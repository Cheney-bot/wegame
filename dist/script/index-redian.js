export {redian};


function redian(){
    function offset(dom, bool) {
        var l = 0,
            t = 0;
        var bdleft = dom.clientLeft; //初始元素的左边框
        var bdtop = dom.clientTop; //初始元素的上边框
        while (dom) {
            l = l + dom.offsetLeft + dom.clientLeft;
            t = t + dom.offsetTop + dom.clientTop;
            dom = dom.offsetParent;
        }
        if (bool) {
            // 元素边框外侧到body的距离
            return {
                left: l - bdleft,
                top: t - bdtop
            };
        } else {
            // 元素内容外侧到body的距离
            return {
                left: l,
                top: t
            };
        }

    }
    $.ajax({
        url: '../data/advance.json',
        type: 'get',
        success: function (json) {
            var newdom = '';
            $.each(json, function (index, item) {
                if (index == 3) {
                    newdom += `
        <li class = "redcur" >
          <div class="redianItem">
              <div class = "reddate reddate-cur" >
                  <h5>${item.month}</h5>
              </div>

              <div class="redItem-box">
                  <div class="redItem-cont">
                      <div class="redItem-top">
                          <a href=""><img src="${item.img}" alt=""></a>
                      </div>
                      <div class="redItem-bot">
                          <div class="redItem-botTit">
                              <strong>${item.title}</strong>
                          </div>
                          <div class="redItem-botMeta">
                              <span>${item.disc}</span>
                          </div>
                          <div class="redItem-botInfo">
                              <div class="redItem-InfoLeft">
                                  <div class="redItem-InfoLeftBox">
                                      <span class="redItem-guan1">已关注</span>
                                      <span class="redItem-guan2">关注</span>
                                  </div>
                              </div>
                              <a href="http://localhost/wegame/dist/html/details.html?product_id=1"
                                  class="redItem-xiangq">
                                  <span>游戏详情</span>
                              </a>
                          </div>
                          <div class="forenotice-tag">
                              <div class="forenotice-tag-inner">
                                  <span>${item.type}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </li>
      `
                } else {
                    newdom += `
        <li class="soon">
          <div class="redianItem">
              <div class="reddate">
                  <p>${item.month}</p>
                  <span>${item.date}</span>
              </div>

              <div class="redItem-box">
                  <div class="redItem-cont">
                      <div class="redItem-top">
                          <a href=""><img src="${item.img}" alt=""></a>
                      </div>
                      <div class="redItem-bot">
                          <div class="redItem-botTit">
                              <strong>${item.title}</strong>
                          </div>
                          <div class="redItem-botMeta">
                              <span>${item.disc}</span>
                          </div>
                          <div class="redItem-botInfo">
                              <div class="redItem-InfoLeft">
                                  <div class="redItem-InfoLeftBox">
                                      <span class="redItem-guan1">已关注</span>
                                      <span class="redItem-guan2">关注</span>
                                  </div>
                              </div>
                              <a href="http://localhost/wegame/dist/html/details.html?product_id=1"
                                  class="redItem-xiangq">
                                  <span>游戏详情</span>
                              </a>
                          </div>
                          <div class="forenotice-tag">
                              <div class="forenotice-tag-inner">
                                  <span>${item.type}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>       
      </li>
      `
                }
            })

            $('.redianUl').append(newdom);
        }

    })

    //页面高度和页面滚动条的高度
    var htmlHeight = document.documentElement.clientHeight;
    var windowTop = document.documentElement.scrollTop || document.body.scrollTop;
    var b = 70; //隐藏盒子初始定位高度
    /* 热点预告鼠标滑过 */
    var $redHiden = $(".redHiden");
    var redTimer;
    var initIndex = 0;
    $('.redianUl').on("mouseenter", '.redItem-box', function () {
        $(this).find('.redItem-bot').css('bottom', '40px');
        var index = $('.redItem-box').index(this);
        windowTop = document.documentElement.scrollTop || document.body.scrollTop;
        b = 70
        if (windowTop - offset($('.redItem-box')[0], true).top > 0) {
            b += windowTop - offset($('.redItem-box')[0], true).top
        } else {
            b = 70
        }



        //轮播图隐藏块初始化
        $.ajax({
            url: '../data/hide.json',
            type: 'get',
            success: function (json) {
                for (let i = 0; i < json.length; i++) {
                    // console.log(index);
                    if (index + 1 == json[i].code) {
                        var newdom = `
            <div class="redHiden">
              <div class="redHiden-top">
                  <div class="swiper-container1">
                      <div class="swiper-wrapper">
                          <div class="swiper-slide"><img src="${json[i].img[0]}" alt=""></div>
                          <div class="swiper-slide"><img src="${json[i].img[1]}" alt=""></div>
                          <div class="swiper-slide"><img src="${json[i].img[2]}" alt=""></div>
                      </div>
                  </div>
              </div>
              <div class="redHiden-bot">
                  <h3 class="redHidden-tit">${json[i].title}</h3>
                  <p><img src="../img/redHidsx.jpg" alt="">
                      ${json[i].date}
                  </p>
                  <p><img src="../img/redHidpc.jpg" alt="">
                      ${json[i].rate}
                  </p>
                  <p><img src="../img/redHidms.jpg" alt="">
                      ${json[i].developers}
                  </p>
              </div>
              <span class="hidden-jiao"></span>
          </div>
          `
                    }
                }
                $('.redianbox').prepend(newdom);
                redTimer = setTimeout(() => {
                    if (index == 4) {
                        $('.redHiden').css({
                            left: (index - initIndex - 1) * $('.soon')[0].clientWidth,
                            top: b
                        }).fadeIn(300, function () {
                            var mySwiper1 = new Swiper('.swiper-container1', {
                                direction: 'horizontal', // 垂直切换选项
                                loop: true, // 循环模式选项
                                autoplay: {
                                    delay: 1000,
                                }, //自动切换
                                effect: 'fade', //切换效果
                            })
                        }).find(".hidden-jiao").css('display', 'none');
                    } else {
                        $('.redHiden').css({
                            left: (index + 1 - initIndex) * $('.soon')[0].clientWidth,
                            top: b
                        }).fadeIn(300, function () {
                            var mySwiper1 = new Swiper('.swiper-container1', {
                                direction: 'horizontal', // 垂直切换选项
                                loop: true, // 循环模式选项
                                autoplay: {
                                    delay: 1000,
                                }, //自动切换
                                effect: 'fade', //切换效果
                            })
                        });
                    }
                }, 300)
            }
        })
    })



    /* 轮播图鼠标滚轮事件 */
    $(".rediancont").on('mousewheel', '.redItem-box', function (e) {
        windowTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (e.originalEvent.wheelDelta < 0) {
            if (offset($('.redItem-box')[0], true).top < windowTop) {
                $('.redHiden').css("top", windowTop - offset($('.redItem-box')[0], true).top + 200)
            }
        } else if (e.originalEvent.wheelDelta > 0) {
            if (offset($('.redItem-box')[0], true).top + $('.redItem-box')[0].clientHeight > windowTop + htmlHeight) {
                $(".redHiden").css('top', offset($('.redItem-box')[0], true).top + $('.redItem-box')[0].clientHeight - windowTop)
            }
        }

    })






    /* 鼠标滑出热点预告 */
    $(".redianUl").on('mouseleave', '.redItem-box', function () {
        // b = 70;
        clearTimeout(redTimer);
        $(this).find('.redItem-bot').css('bottom', '0px');
        $(this).closest('li').find('.redHiden').stop(true, true).fadeOut(500);
        $(this).closest('.redcur').find('.redHiden').stop(true, true).fadeOut(500);
        $('.redHiden').remove();
    })





    /* 点击关注 */
    $(".redianUl").on('click', '.redItem-guan2', function () {
        $(this).text('已关注');
    })





    /* 热点预告轮播 */
    var $rediancont = $('.rediancont');
    var $redianpre = $('.redian-pre');
    var $rediannext = $('.redian-next');
    var soonIndex = 0;
    $redianpre.click(function () {
        initIndex--;
        if (initIndex <= 0) {
            initIndex = 0;
        }
        var soonWidth = ($('.soon')[0].clientWidth);
        var $redianList = $('.redianUl li');
        soonIndex--;
        if (soonIndex < 0) {
            soonIndex = 0;
        }
        $rediancont.animate({
            'scrollLeft': soonWidth * soonIndex
        });
        // $('.redianUl li').each(function(index,item){
        //   console.log(index);
        //   $(item).css('left', (index-initIndex) * soonWidth);
        // })

    })
    $rediannext.click(function () {
        rednext();
    })

    function rednext() {
        initIndex++;
        if (initIndex >= $('.redianUl li').length - 1) {
            initIndex = $('.redianUl li').length - 1;
        }
        var soonWidth = ($('.soon')[0].clientWidth);
        var $redianList = $('.redianUl li');
        soonIndex++;
        if (soonIndex > 5) {
            soonIndex = 5;
        }
        $rediancont.animate({
            'scrollLeft': soonWidth * soonIndex
        });
        // $('.redianUl li').closest('.rediancont').siblings('.redHiden').each(function (index, item) {

        //   $(item).css('left', (index - initIndex) * soonWidth);

    }


}