if (getQueryString("product_id") == 1){
    $.ajax({
        url:"../data/details.json",
        type:'get',
        success:function(json){
            var titledom = `<span>${json[0].title}</span>`;
            $('.tit-crumb p').append(titledom);
            var titledom1 = `<img src="${json[0].titleImg}" alt="">
                <h2>${json[0].title}</h2>
            `;
            $('.title-name').append(titledom1);
            var titBack = `<img class="tit-back" src="${json[0].titleback}" alt="">`;
            $('.titleWrap').append(titBack);
            var videoItem = '';
            $.each(json[0].bigImg, function(index,item){
                if(index <=2){
                    videoItem += `
                    <div class="video-item">
                        <video src="${item}" class="video" controls width="700px" height="394px" autoplay muted
                            preload="metadata"></video>
                    </div>
                `
                }else{
                    videoItem +=`
                        <div class="video-item">
                        <img src="${item}" alt="">
                        </div>
                    `
                }
            })
            $('.video-cont').append(videoItem);
            var videoli = '';
            $.each(json[0].littleImg,function(index,item){
                if(index <= 2){
                    if(index ==1){
                        videoli += `
                        <li class="video-pos video-show">
                                <span></span>
                                <img src="${item}" alt="">
                        </li>
                    `
                    }else{
                        videoli += `
                        <li class="video-pos">
                                <span></span>
                                <img src="${item}" alt="">
                        </li>
                    `
                    }   
                }else{
                    videoli +=`
                        <li>
                            <span></span>
                            <img src="${item}" alt="">
                        </li>
                    `
                }
            })
            $('.video-ul').append(videoli);
            $('.video-ul').find('li').eq(0).find('span').css('display','block');
            var datedom = `<div class="fr-cont">
                                ${json[0].date}
                            </div>`;
            var ratedom = `
                <div class="fr-cont">
                                ${json[0].rate}
                            </div>
            `;
            var developers = `
                <div class="fr-cont">
                                ${json[0].developers}
                            </div>
            `;
            var operator = `
                <div class="fr-cont">
                                ${json[0].operator}
                            </div>
            `
            var platform = `
                <div class="fr-cont">
                                ${json[0].platform}
                            </div>
            `
            $('.detail-prop-table li').eq(0).append(datedom);
            $('.detail-prop-table li').eq(1).append(ratedom);
            $('.detail-prop-table li').eq(2).append(developers);
            $('.detail-prop-table li').eq(3).append(operator);
            $('.detail-prop-table li').eq(4).append(platform);
            // console.log($('.detail-prop-table li').eq(0));

            var prettyTop = `
                <h4>${json[0].saleTit}</h4>
                        <p>共包括 ${json[0].saleNum} 款</p>
                        <div class="operate">
                            <span>￥${json[0].salePrice}</span>
                        </div>
            `;
            $('.pretty-cont1-top').append(prettyTop);
            var saleImg = '';
            $.each(json[0].saleImg,function(index,item){
                if(index <=1){
                    saleImg +=`
                        <li>
                                <img src="${item}" alt="">
                                <div class="pretty-position">
                                </div>
                            </li>
                    `
                }else{
                    saleImg+=`
                        <li>
                                <img src="${item}" alt="">
                            </li>
                    `
                }
            })
            $('.pretty-cont1-ul ul').append(saleImg);

            var relatedp1 = `
                <h4>${json[0].relatedp1}</h4>
            `;
            var relatedp2 = `
                <h4>${json[0].relatedp2}</h4>
            `
            $('.pre-cont2').eq(0).prepend(relatedp1);
            $('.pre-cont2').eq(1).prepend(relatedp2);

            var details = '';
            $.each(json[0].details,function(index,item){
                details +=`
                     <p class="ql-indent-1">${item}</p>
                `;
            })
            $('.pretty-cont3-main').append(details);
            var detailsImg = `<p class="ql-indent-1"><img
                                        src="${json[0].detailsImg}">
                                </p>`;
            $('.pretty-cont3-main').append(detailsImg);
            var detailsCon = '';
            $.each(json[0].detailsCon,function(index,item){
                detailsCon+=`
                    <p class="ql-indent-1">${item}</p>
                `
            })
            $('.pretty-cont3-main').append(detailsCon);
            var detailsImg2 = `<p class="ql-indent-1"><img
                                        src="${json[0].detailsImg2}">
                                </p>`;
            $('.pretty-cont3-main').append(detailsImg2);
        }
    })
}

if (getQueryString("product_id") == 2) 
    $.ajax({
        url: "../data/details.json",
        type: 'get',
        success: function (json) {
            var titledom = `<span>${json[1].title}</span>`;
            $('.tit-crumb p').append(titledom);
            var titledom1 = `<img src="${json[1].titleImg}" alt="">
                <h2>${json[1].title}</h2>
            `;
            $('.title-name').append(titledom1);
            var titBack = `<img class="tit-back" src="${json[1].titleback}" alt="">`;
            $('.titleWrap').append(titBack);
            var videoItem = '';
            $.each(json[1].bigImg, function (index, item) {
                if (index <= 2) {
                    videoItem += `
                    <div class="video-item">
                        <video src="${item}" class="video" controls width="700px" height="394px" autoplay muted
                            preload="metadata"></video>
                    </div>
                `
                } else {
                    videoItem += `
                        <div class="video-item">
                        <img src="${item}" alt="">
                        </div>
                    `
                }
            })
            $('.video-cont').append(videoItem);
            var videoli = '';
            $.each(json[1].littleImg, function (index, item) {
                if (index <= 2) {
                    if (index == 1) {
                        videoli += `
                        <li class="video-pos video-show">
                                <span></span>
                                <img src="${item}" alt="">
                        </li>
                    `
                    } else {
                        videoli += `
                        <li class="video-pos">
                                <span></span>
                                <img src="${item}" alt="">
                        </li>
                    `
                    }
                } else {
                    videoli += `
                        <li>
                            <span></span>
                            <img src="${item}" alt="">
                        </li>
                    `
                }
            })
            $('.video-ul').append(videoli);
            $('.video-ul').find('li').eq(0).find('span').css('display', 'block');
            var datedom = `<div class="fr-cont">
                                ${json[1].date}
                            </div>`;
            var ratedom = `
                <div class="fr-cont">
                                ${json[1].rate}
                            </div>
            `;
            var developers = `
                <div class="fr-cont">
                                ${json[1].developers}
                            </div>
            `;
            var operator = `
                <div class="fr-cont">
                                ${json[1].operator}
                            </div>
            `
            var platform = `
                <div class="fr-cont">
                                ${json[1].platform}
                            </div>
            `
            $('.detail-prop-table li').eq(0).append(datedom);
            $('.detail-prop-table li').eq(1).append(ratedom);
            $('.detail-prop-table li').eq(2).append(developers);
            $('.detail-prop-table li').eq(3).append(operator);
            $('.detail-prop-table li').eq(4).append(platform);
            // console.log($('.detail-prop-table li').eq(0));

            var prettyTop = `
                <h4>${json[1].saleTit}</h4>
                        <p>共包括 ${json[1].saleNum} 款</p>
                        <div class="operate">
                            <span>￥${json[1].salePrice}</span>
                        </div>
            `;
            $('.pretty-cont1-top').append(prettyTop);
            var saleImg = '';
            $.each(json[1].saleImg, function (index, item) {
                if (index <= 1) {
                    saleImg += `
                        <li>
                                <img src="${item}" alt="">
                                <div class="pretty-position">
                                </div>
                            </li>
                    `
                } else {
                    saleImg += `
                        <li>
                                <img src="${item}" alt="">
                            </li>
                    `
                }
            })
            $('.pretty-cont1-ul ul').append(saleImg);

            var relatedp1 = `
                <h4>${json[1].relatedp1}</h4>
            `;
            var relatedp2 = `
                <h4>${json[1].relatedp2}</h4>
            `
            $('.pre-cont2').eq(0).prepend(relatedp1);
            $('.pre-cont2').eq(1).prepend(relatedp2);

            var details = '';
            $('.pretty-cont3-main').append(details);
            var detailsImg = `<p class="ql-indent-1"><img
                                        src="${json[1].detailsImg}">
                                </p>`;
            $('.pretty-cont3-main').append(detailsImg);
            var detailsCon = '';
            $.each(json[1].detailsCon, function (index, item) {
                detailsCon += `
                    <p class="ql-indent-1">${item}</p>
                `
            })
            $('.pretty-cont3-main').append(detailsCon);
        }
    })

if (getQueryString("product_id") == 3)
    $.ajax({
        url: "../data/details.json",
        type: 'get',
        success: function (json) {
            var titledom = `<span>${json[2].title}</span>`;
            $('.tit-crumb p').append(titledom);
            var titledom1 = `<img src="${json[2].titleImg}" alt="">
                <h2>${json[2].title}</h2>
            `;
            $('.title-name').append(titledom1);
            var titBack = `<img class="tit-back" src="${json[2].titleback}" alt="">`;
            $('.titleWrap').append(titBack);
            var videoItem = '';
            $.each(json[2].bigImg, function (index, item) {
                if (index <= 2) {
                    videoItem += `
                    <div class="video-item">
                        <video src="${item}" class="video" controls width="700px" height="394px" autoplay muted
                            preload="metadata"></video>
                    </div>
                `
                } else {
                    videoItem += `
                        <div class="video-item">
                        <img src="${item}" alt="">
                        </div>
                    `
                }
            })
            $('.video-cont').append(videoItem);
            var videoli = '';
            $.each(json[2].littleImg, function (index, item) {
                if (index <= 2) {
                    if (index == 0) {
                        videoli += `
                        <li class="video-pos video-show">
                                <span></span>
                                <img src="${item}" alt="">
                        </li>
                    `
                    } else {
                        videoli += `
                        <li class="video-pos">
                                <span></span>
                                <img src="${item}" alt="">
                        </li>
                    `
                    }
                } else {
                    videoli += `
                        <li>
                            <span></span>
                            <img src="${item}" alt="">
                        </li>
                    `
                }
            })
            $('.video-ul').append(videoli);
            $('.video-ul').find('li').eq(0).find('span').css('display','block');

            var datedom = `<div class="fr-cont">
                                ${json[2].date}
                            </div>`;
            var ratedom = `
                <div class="fr-cont">
                                ${json[2].rate}
                            </div>
            `;
            var developers = `
                <div class="fr-cont">
                                ${json[2].developers}
                            </div>
            `;
            var operator = `
                <div class="fr-cont">
                                ${json[2].operator}
                            </div>
            `
            var platform = `
                <div class="fr-cont">
                                ${json[2].platform}
                            </div>
            `
            $('.detail-prop-table li').eq(0).append(datedom);
            $('.detail-prop-table li').eq(1).append(ratedom);
            $('.detail-prop-table li').eq(2).append(developers);
            $('.detail-prop-table li').eq(3).append(operator);
            $('.detail-prop-table li').eq(4).append(platform);
            // console.log($('.detail-prop-table li').eq(0));

            var prettyTop = `
                <h4>${json[2].saleTit}</h4>
                        <p>共包括 ${json[2].saleNum} 款</p>
                        <div class="operate">
                            <span>￥${json[2].salePrice}</span>
                        </div>
            `;
            $('.pretty-cont1-top').append(prettyTop);
            var saleImg = '';
            $.each(json[2].saleImg, function (index, item) {
                if (index <= 1) {
                    saleImg += `
                        <li>
                                <img src="${item}" alt="">
                                <div class="pretty-position">
                                </div>
                            </li>
                    `
                } else {
                    saleImg += `
                        <li>
                                <img src="${item}" alt="">
                            </li>
                    `
                }
            })
            $('.pretty-cont1-ul ul').append(saleImg);

            var relatedp1 = `
                <h4>${json[2].relatedp1}</h4>
            `;
            var relatedp2 = `
                <h4>${json[2].relatedp2}</h4>
            `
            $('.pre-cont2').eq(0).prepend(relatedp1);
            $('.pre-cont2').eq(1).prepend(relatedp2);

            var details = '';
            $('.pretty-cont3-main').append(details);
            var detailsImg = `<p class="ql-indent-1"><img
                                        src="${json[2].detailsImg}">
                                </p>`;
            $('.pretty-cont3-main').append(detailsImg);
            var detailsCon = '';
            $.each(json[2].detailsCon, function (index, item) {
                detailsCon += `
                    <p class="ql-indent-1">${item}</p>
                `
            })
            $('.pretty-cont3-main').append(detailsCon);
        }
    })




var $preViewmore = $('.pretty-viewmore');
var $preCont3main = $('.pretty-cont3-main');
var $viewSpan = $('.pretty-viewmore span');
var $viewI = $(".pretty-viewmore i");
var preflag = 0;
$preViewmore.click(function(){
    if(preflag == 0){
        $viewSpan.html('收起<i style="background-image: url(../img/pretty-sjian.jpg);margin-top: -3px"></i>');
        $preCont3main.css('maxHeight', 10000);
        preflag = 1
    }else{
        $viewSpan.html('查看更多<i style="background-image: url(../img/pretty-jian.jpg);"></i>');
        $preCont3main.css('maxHeight', 275);
        preflag = 0;
    }
})


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


/* 视频轮播图 */
var $videoBox = $('.video-box');
var $videoulBox = $('.video-ulbox');
var $videoPre = $('.video-pre');
var $videoNext = $('.video-next');
var videoIndex = 0;


/* 轮播图向左点击 */
$videoPre.click(function(){
    var videoLiWidth = $('.video-ul li')[0].clientWidth;
    var videoWidth = $('.video-item')[0].clientWidth;
    videoIndex--;
    if(videoIndex < 0){
        videoIndex = $('.video-ul li').length-1;
        $('.video-ulbox').scrollLeft = videoLiWidth * $('.video-ul li').length;
    }
    $('.video-ulbox').stop(true,true).animate({
        scrollLeft:(videoIndex-5)*videoLiWidth
    },function(){
        $('.video-ul li').eq(videoIndex).find('span').css('display', 'block');

    })
    $('.video-ul li').eq(videoIndex).addClass('video-show').siblings('li').removeClass('video-show').find('span').css('display', 'none');
    $videoBox.stop(true, true).animate({
        scrollLeft: (videoIndex) * videoWidth
    })

})

/* 轮播图向右点击 */
$videoNext.click(function () {
    var videoLiWidth = $('.video-ul li')[0].clientWidth;
    var videoWidth = $('.video-item')[0].clientWidth;
    videoIndex++;
    if (videoIndex >= $('.video-ul li').length) {
        videoIndex = 0;
        $('.video-ulbox').scrollLeft = 0;
    }
    $('.video-ulbox').stop(true, true).animate({
        scrollLeft: (videoIndex-5) * videoLiWidth
    },function(){
        $('.video-ul li').eq(videoIndex).find('span').css('display', 'block');
    })
    $('.video-ul li').eq(videoIndex).addClass('video-show').siblings('li').removeClass('video-show').find('span').css('display','none');
    $videoBox.stop(true, true).animate({
        scrollLeft: (videoIndex) * videoWidth
    })

})

/* 点击分页器 */

$('.video-ul').on('click','li',function(){
    var videoWidth = $('.video-item')[0].clientWidth;
    var _this = $(this)
    var index = $('.video-ul li').index(this);
    videoIndex = index;
    $('.video-ul li').eq(videoIndex).addClass('video-show').siblings('li').removeClass('video-show').find('span').css('display', 'none');

    $videoBox.stop(true, true).animate({
        scrollLeft: (videoIndex) * videoWidth
    }, function () {
        _this.find('span').css('display', 'block');
    })
})