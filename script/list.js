//点击find输入框
$fript = $('.fr-ipt');
$frclose = $('.fr-close');
$frhide = $('.fr-hidebox');
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




/* 热门标签 */
var $condItem = $('.condetion-item');
var condFlag = 0;
$condItem.click(function(){
    if(!condFlag){
        $(this).find('input').attr('checked', true);
        condFlag = 1;
    }else{
        $(this).find('input').attr('checked', false);
        condFlag = 0;
    };
});



/* 初始化页面 */
$.ajax(
    {
        url: '../php/nav.php',
        type: 'get',
        data:{
            type:'page',
            page:1
        },
        dataType:'json',
        success:function(json){
            var pages = Math.ceil(json.total/4);
            var newnum = '';
            for(let i = 0 ; i < pages; i++){
                newnum += `<li>${i+1}</li>`;
            }
            $('.nav').append(newnum);
            $('.nav li').eq(0).addClass('number');

            var newDom = '';
            $.each(json.data,function(index,item){
                newDom +=`
                    <li>
                           <a class="figure" href="/store/2001371/ISOLAND3_Dust_of_the_Universe">
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

    }
);

var numIndex = 0;
$('.nav').on('click','li',function(){
        var index = $('.nav li').index(this);
        $(this).addClass('number').siblings('li').removeClass('number');
        numIndex = index;
        load(numIndex); 
});


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
            type: 'page',
            page: index+1
        },
        dataType:'json',
        success:function(json){
            var newDom = '';
            $('.game-list').html('');
            $.each(json.data,function(index,item){
                newDom += `
                    <li>
                           <a class="figure" href="/store/2001371/ISOLAND3_Dust_of_the_Universe">
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