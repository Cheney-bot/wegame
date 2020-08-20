if (getCookie('username')) {
    $('.widget-header-login-btn').text(getCookie('username'));
    $('.widget-header-login-btn').prop('href', 'javascript:;');
} else {
    $('.widget-header-login-btn').text("登录");
}


//点击find输入框
var $fript = $('.fr-ipt');
var $frclose = $('.fr-close');
var $frhide = $('.fr-hidebox');
var frFalg = 1;
//显示close
$fript.keyup(function () {
    $frclose.css('display', 'block');
})
$frclose.click(function () {
    $fript.val(' ');
    frFalg = 1;
    $frclose.css('display', 'none');
})
$fript.click(function () {
    $frhide.fadeIn(500);
})
$fript.blur(function () {
    $fript.val(' ');
    $frclose.css('display', 'none');
    $frhide.css('display', 'none');
})
  /* find输入框jsonp请求 */
$fript.keyup(function () {
    $.ajax({
        url: '../php/baidu.php',
        tepe: 'get',
        data: 'wd=' + $fript.val(),
        dataType: 'json',
        success: function (json) {
            console.log(json);
            $('.fr-ipt-ul').html('');
            // $('.fr-ipt-ul').innerHTML = '';
            json.s.forEach(function (item) {
                console.log(item);
                $('.fr-ipt-ul')[0].innerHTML += '<li>' + item + '</li>';
            });
            if ($fript.val() == '') {
                ('.fr-ipt-ul').css('height', 0);
            }
        }
    })
})



/* banner */
var bannerIndex= 0;
$banner = $('.banner');
$banPre = $('.redian-pre');
$banNext = $('.redian-next');
$banBox = $('.banner-box');
var banNewdom = $banBox[0].children[0].cloneNode(true);
$banCont = $('.banner-cont');
var banContWidth = $banCont[0].clientWidth;
$banBox.append(banNewdom);
var banTimer;


/* banner轮播图 */
function banNextmove(){
    clearInterval(banTimer);
    bannerIndex++;
    if (bannerIndex > $banCont.length){
       bannerIndex = 1;
       $banner.scrollLeft(0);
    }
    $banner.stop(true,true).animate({
        'scrollLeft': bannerIndex * banContWidth
    })
    banAotumove();
};
function banAotumove(){
    banTimer = setInterval(() => {
        banNextmove();
    }, 3000)
};
banAotumove();

function banPremove() {
    clearInterval(banTimer);
    bannerIndex--;
    if (bannerIndex < 0) {
        bannerIndex = $banCont.length-1;
        $banner.scrollLeft(banContWidth * $banCont.length);
    }
    $banner.stop(true, true).animate({
        'scrollLeft': bannerIndex * banContWidth
    })
    banAotumove();
}
$banPre.click(function(){
    banPremove();
});
$banNext.click(function () {
    banNextmove();
});

/* 滑入停止轮播图 */
$banBox.mouseenter(function(){
    clearInterval(banTimer);
});
$banBox.mouseleave(function () {
    banAotumove();
});




/* 右侧购物车 */
var $shopCar = $('.shop-car');
var $backtop = $('.backtop');

window.onscroll = function () {
    if (document.documentElement.scrollTop >= document.documentElement.clientHeight) {
        $backtop.slideDown(500);
    } else {
        $backtop.slideUp(500);
    }
}
$backtop.click(function () {
    $(document.documentElement).animate({
        scrollTop: 0
    });
})
$('.shop-car').click(function () {
    open('http://localhost/wegame/dist/html/shopCar.html');
})




/* 初始化页面 */

var typeFlag = 'faddish';
var pages;
autoAjax();

//初始化页面
function autoAjax(){
    typeFlag = 'faddish';
    $.ajax({
        url: '../php/nav.php',
        type: 'get',
        data: {
            label: 'faddish',
            page: 1
        },
        dataType: 'json',
        success: function (json) {
            $('.nav').html(''),
            $('.game-list').html('');
            pages = Math.ceil(json.total / 4);
            var newnum = '';
            for (let i = 0; i < pages; i++) {
                newnum += `<li>${i+1}</li>`;
            }
            $('.nav').append(newnum);
            $('.nav li').eq(0).addClass('number');
            $('.tip-numbers').text(json.total);
            var newDom = '';    
            $.each(json.data, function (index, item) {
                 if (index < 3) {
                     newDom += `
                        <li>
                            <a class="figure" href="http://localhost/wegame/dist/html/details.html?product_id=${index+1}" >
                                    <img src="${item.src}" alt="迷失岛3宇宙的尘埃">
                                </a>
                                <div class="game-box">
                                    <div class="game-table">
                                        <div class="game-desc">
                                            <h3>${item.title}</h3>
                                            <div class="game-subtit">
                                                <span>${item.online}</span>
                                                <h6>${item.tuijian}</h6>
                                            </div>
                                            <div class="game-bot">
                                                <a href="javascript:;">${item.a1}</a>
                                                <a href="javascript:;">${item.a2}</a>
                                                <a href="javascript:;">${item.a3}</a>
                                                <a href="javascript:;">${item.a4}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                    `
                 } else {
                     newDom += `
                        <li>
                            <a class = "figure" href = "http://localhost/wegame/dist/html/details.html?product_id=3" >
                                    <img src="${item.src}" alt="迷失岛3宇宙的尘埃">
                                </a>
                                <div class="game-box">
                                    <div class="game-table">
                                        <div class="game-desc">
                                            <h3>${item.title}</h3>
                                            <div class="game-subtit">
                                                <span>${item.online}</span>
                                                <h6>${item.tuijian}</h6>
                                            </div>
                                            <div class="game-bot">
                                                <a href="javascript:;">${item.a1}</a>
                                                <a href="javascript:;">${item.a2}</a>
                                                <a href="javascript:;">${item.a3}</a>
                                                <a href="javascript:;">${item.a4}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </a>
                    `
                 }

            })
            $('.game-list').append(newDom);
        }

    });
}

// 热门点击切换页面
function ajaxType(type) {
    $.ajax({
        url: '../php/nav.php',
        type: 'get',
        data: {
            "page": 1,
            "label": type,
        },
        dataType: 'json',
        success: function (json) {
            $('.nav').html(''),
                $('.game-list').html('');
            pages = Math.ceil(json.total / 4);
            var newnum = '';
            for (let i = 0; i < pages; i++) {
                newnum += `<li>${i+1}</li>`;
            }
            $('.nav').append(newnum);
            $('.nav li').eq(0).addClass('number');
            $('.tip-numbers').text(json.total);
            $('.all-numbers').text(json.total);
            var newDom = '';
            $.each(json.data, function (index, item) {
                if(index < 3){
                    newDom += `
                        <li>
                            <a class = "figure" href = "http://localhost/wegame/dist/html/details.html?product_id=${index+1}" >
                                    <img src="${item.src}" alt="迷失岛3宇宙的尘埃">
                                </a>
                                <div class="game-box">
                                    <div class="game-table">
                                        <div class="game-desc">
                                            <h3>${item.title}</h3>
                                            <div class="game-subtit">
                                                <span>${item.online}</span>
                                                <h6>${item.tuijian}</h6>
                                            </div>
                                            <div class="game-bot">
                                                <a href="javascript:;">${item.a1}</a>
                                                <a href="javascript:;">${item.a2}</a>
                                                <a href="javascript:;">${item.a3}</a>
                                                <a href="javascript:;">${item.a4}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    `
                }else{
                    newDom += `
                        <li>
                            <a class = "figure"  href = "http://localhost/wegame/dist/html/details.html?product_id=3" >
                                    <img src="${item.src}" alt="迷失岛3宇宙的尘埃">
                                </a>
                                <div class="game-box">
                                    <div class="game-table">
                                        <div class="game-desc">
                                            <h3>${item.title}</h3>
                                            <div class="game-subtit">
                                                <span>${item.online}</span>
                                                <h6>${item.tuijian}</h6>
                                            </div>
                                            <div class="game-bot">
                                                <a href="javascript:;">${item.a1}</a>
                                                <a href="javascript:;">${item.a2}</a>
                                                <a href="javascript:;">${item.a3}</a>
                                                <a href="javascript:;">${item.a4}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    `
                }
                
            })
            $('.game-list').append(newDom);
        }
    })
}
var numIndex = 0;
$('.nav').on('click','li',function(){
        var index = $('.nav li').index(this);
        $(this).addClass('number').siblings('li').removeClass('number');
        numIndex = index;
        load(numIndex); 
});

var $toInput = $('.topage-ipt');
var $sure = $('.sure');
/* 输入加载页面 */

$sure.click(function () {
    var index = $toInput.val();
    index = parseInt(index);
    if (index > pages) {
        $toInput.val('');
        return false;
    } else {
        $('.nav li').eq(index-1).addClass('number').siblings().removeClass('number');
        $toInput.val('');
        load(index-1);
    }
})

/* 游戏列表左右点击 */
$('.game-pre').click(function(){
    numIndex--;
    if(numIndex <= 0){
        numIndex = 0;
    }
    $('.nav li').eq(numIndex).addClass('number').siblings('li').removeClass('number');
    load(numIndex);
});
$('.game-next').click(function () {
    numIndex++;
    if (numIndex >= $('.nav li').length) {
        numIndex = $('.nav li').length-1;
    }
    $('.nav li').eq(numIndex).addClass('number').siblings('li').removeClass('number');
    load(numIndex);
});


//点击加载页面
function load(index) {
    $.ajax({
        url: '../php/nav.php',
        type: 'get',
        data: {
            label:typeFlag,
            page: index+1
        },
        dataType:'json',
        success:function(json){
            var newDom = '';
            $('.game-list').html('');
            $.each(json.data,function(index,item){
                newDom += `
                    <li>
                           <a class = "figure" href = "http://localhost/wegame/dist/html/details.html?product_id=${index+1}" >
                                <img src="${item.src}" alt="迷失岛3宇宙的尘埃">
                            </a>
                            <div class="game-box">
                                <div class="game-table">
                                    <div class="game-desc">
                                        <h3>${item.title}</h3>
                                        <div class="game-subtit">
                                            <span>${item.online}</span>
                                            <h6>${item.tuijian}</h6>
                                        </div>
                                        <div class="game-bot">
                                            <a href="javascript:;">${item.a1}</a>
                                            <a href="javascript:;">${item.a2}</a>
                                            <a href="javascript:;">${item.a3}</a>
                                            <a href="javascript:;">${item.a4}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                
                `
            })
            $('.game-list').append(newDom);
        }

    })

};



/* 火爆热门 */
$faddish = $('.faddish');
$faddish.click(function () {
    autoAjax();
})

/* 本周热门 */
$hot = $('.hot');
$hot.click(function(){
    typeFlag = 'hot'
    ajaxType(typeFlag);
})

/* 最新上架 */
$newest = $('.newest');
$newest.click(function(){
    typeFlag = 'newest'
    ajaxType(typeFlag);
})

/* 折扣促销 */
$discount = $('.discount');
$discount.click(function(){
    typeFlag = 'discount'
    ajaxType(typeFlag);
})



/* 热门标签点击 */
var $check = $('.check');
var checkFlag = 1;
$check.click(function(e){
    if($(this).prop('checked')){
        $(this).parent().siblings('a').find('input').prop('disabled','disabled');
        checkFlag = 0;
        var val = $(this).siblings('span').text();
        var newDom = `
            <div class="label-del">${val}
                <i class="label-remove">×</i>
            </div>
        `
        $('.alltips').css("display",'none');
        $('.turn-r').css("display", 'none');
        $('.pretty-hd').css('display','block').append(newDom);
        e.stopPropagation();
        if(val =='篮球'){
            ajaxType('basketball');
            $('.nullWrap').css('display', 'none');
        } else if (val == '单机'){
            ajaxType('single');
            $('.nullWrap').css('display', 'none');
        }else if(val == '电子竞技'){
            ajaxType('athletics');
            $('.nullWrap').css('display', 'none');
        }else if(val == '大型网游'){
            ajaxType('online');
            $('.nullWrap').css('display', 'none');
        } else if (val == "免费" || val == '竞速赛车' || val =='功能游戏'){
            $('.game-card').css('display',"none");
            $('.nullWrap').css('display','block');
            $('.all-numbers').text(0);
        }
    }else{
        $(this).parent().siblings('a').find('input').prop('disabled', false);
        e.stopPropagation();
        $('.nullWrap').css('display', 'none');
        $('.game-card').css('display', "block");
        $('.pretty-hd').css('display', 'none');
        $('.alltips').css("display", 'block');
        $('.turn-r').css("display", 'block');
        $('.label-del').remove();
        autoAjax();
    }
})
$('.turn-ul li').click(function(){
    $(this).addClass('cur').siblings().removeClass('cur');
})
$('.all-title').on('click', '.label-del',function(){
    $('.pretty-hd').css('display', 'none');
    $('.alltips').css("display", 'block');
    $('.game-card').css('display', "block");
    $('.turn-r').css("display", 'block');
    $('.label-del').remove();
    $('.check').prop({
        checked:false,
        disabled: false
    });
    autoAjax();
})



