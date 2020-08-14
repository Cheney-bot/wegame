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





//点击find输入框
$fript = $('.fr-ipt');
$frclose = $('.fr-close');
$frhide = $('.fr-hidebox');
var frFalg = 1;
//显示close
$fript.keyup(function(){
    $frclose.css('display','block');
})
$frclose.click(function () {
    $fript.val(' ');
    frFalg = 1;
    $frclose.css('display', 'none');
})
$fript.click(function(){
    $frhide.fadeIn(500);
})
$fript.blur(function () {
    // if (frFalg) {
    //     frFalg = 0;
    //     return;
    // }else{
    //     if($fript.val()){

    //         $frhide.css('display', 'none');
    //         return;
    //     }

    // }
    $frclose.css('display', 'none');
    $frhide.css('display', 'none');
})

/* banner */
   //分页器
  var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项

      autoplay:{
          disableOnInteraction: false,
      }, //自动切换
      effect: 'fade', //切换效果
      //这里分页器类型必须设置为custom,即采用用户自定义配置
      // 如果需要分页器
      pagination: {
          type: 'custom',
          el: '.swiper-pagination',
          //点击分页器进行切换
          clickable: true,
          bulletClass:'swiper-pagination-customs',
          bulletActiveClass: 'swiper-pagination-customs-active',

          renderCustom: function (swiper, current, total) {
              var customPaginationHtml = "";
              for (var i = 0; i < total+1; i++) {
                  //判断哪个分页器此刻应该被激活
                  if (i == (current)) {
                      if(current == 1){
                        // customPaginationHtml = '';
                        customPaginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active ">
                        <li class="swi-number1">
                            <p class="youxi"><img src="../img/youxi.jpg" alt="">NBA2K Online2</p>
                            <p class="youxibt">新秀免费体验顶级球星</p>
                        </li>
                      </span>`;
                    } else if (current == 2) {
                        // customPaginationHtml = '';
                        customPaginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active1">
                        <li class="swi-number1">
                            <p class="youxi"><img src="../img/huodong.jpg" alt="">最终幻想14</p>
                            <p class="youxibt">咸鱼大哥，5.21快乐咯</p>
                        </li>
                      </span>`;
                    } else if (current == 3) {
                        // customPaginationHtml = '';
                        customPaginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active">
                        <li class="swi-number1">
                            <p class="youxi"><img src="../img/youxi.jpg" alt="">地下城与勇士</p>
                            <p class="youxibt">男枪三觉送好礼</p>
                        </li>
                      </span>`;
                    } else if (current == 4) {
                        // customPaginationHtml = '';
                        customPaginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active1">
                        <li class="swi-number1">
                            <p class="youxi"><img src="../img/huodong.jpg" alt="">激战2</p>
                            <p class="youxibt">世界动态新篇章</p>
                        </li>
                      </span>`;
                    } else if (current == 5) {
                        // customPaginationHtml = '';
                        customPaginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active">
                        <li class="swi-number1">
                            <p class="youxi"><img src="../img/youxi.jpg" alt="">混沌银河</p>
                            <p class="youxibt">星际策略新游上线</p>
                        </li>
                      </span>`;
                    } else if (current == 6) {
                        // customPaginationHtml = '';
                        customPaginationHtml += `<span class="swiper-pagination-customs swiper-pagination-customs-active1">
                        <li class="swi-number1">
                            <p class="youxi"><img src="../img/huodong.jpg" alt=""> 穿越火线</p>
                            <p class="youxibt">最考验技术的武器</p>
                        </li>
                      </span>`;
                    }
                  } else {
                      if(i == 1){
                          customPaginationHtml += `<span class="swiper-pagination-customs ">
                        <p>NBA2K Online2</p>
                      </span>`;
                      }
                      if (i == 2) {
                          customPaginationHtml += `<span class="swiper-pagination-customs ">
                        <p>最终幻想14</p>
                      </span>`;
                      }
                      if (i == 3) {
                          customPaginationHtml += `<span class="swiper-pagination-customs ">
                        <p>地下城与勇士</p>
                      </span>`;
                      }
                      if (i == 4) {
                          customPaginationHtml += `<span class="swiper-pagination-customs ">
                        <p>激战2</p>
                      </span>`;
                      }
                      if (i == 5) {
                          customPaginationHtml += `<span class="swiper-pagination-customs ">
                        <p>混沌银河</p>
                      </span>`;
                      }
                      if (i == 6) {
                          customPaginationHtml += `<span class="swiper-pagination-customs ">
                        <p>穿越火线</p>
                      </span>`;
                      }
                  }
              }
              return customPaginationHtml;
          }          
      },

  })


//   for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
//       mySwiper.pagination.bullets[i].index = i
//       mySwiper.pagination.bullets[i].onmouseover = function () {
//           mySwiper.slideTo(this.index);
//       };
//   }
//   for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
//       mySwiper.pagination.bullets[i].onmouseover = function () {
//           this.click();
//       };
//   }








/* 热点预告鼠标滑过 */
var $redItemBox = $('.redItem-box');
var $redItemBot = $('.redItem-bot');
var $redHiden = $(".redHiden");
var redTimer;
$redItemBox.mouseenter(function(){
  /* 隐藏的轮播图 */
  $(this).find('.redItem-bot').css('bottom', '40px');

  redTimer = setTimeout(()=>{
      $(this).closest('li').find('.redHiden').stop(true, true).fadeIn(500, function () {
        var mySwiper1 = new Swiper('.swiper-container1', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: {
            delay: 1000,
          }, //自动切换
          effect: 'fade', //切换效果
        })
      });
      $(this).closest('.redcur').find('.redHiden').stop(true, true).fadeIn(500, function () {
        var mySwiper1 = new Swiper('.swiper-container1', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: {
            delay: 1000,
          }, //自动切换
          effect: 'fade', //切换效果
        })
      });

      $(this).closest('.last').find('.redHiden').stop(true, true).fadeIn(500, function () {
        var mySwiper1 = new Swiper('.swiper-container1', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: {
            delay: 1000,
          }, //自动切换
          effect: 'fade', //切换效果
        })
      });

  },300)

  /* 轮播图鼠标滚轮事件 */
  $redItemBox[0].onmousewheel = function (e) {

    var htmlHeight = document.documentElement.clientHeight;
    var windowTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(e.wheelDelta < 0){
    
    if (offset($redItemBox[0], true).top < windowTop){
      $redHiden[0].style.top = windowTop - offset($redItemBox[0], true).top + 200+'px';
    }
  } else if (e.wheelDelta > 0) {
    if (offset($redItemBox[0], true).top > windowTop + htmlHeight) {
      $redHiden[0].style.top = offset($redItemBox[0], true).top-windowTop +'px';
      console.log(offset($redItemBox[0], true).top - windowTop);
    }
  }
  }
})

/* 鼠标滑出 */
$redItemBox.mouseleave(function () {
  clearTimeout(redTimer);
  $(this).find('.redItem-bot').css('bottom', '0px');
  $(this).closest('li').find('.redHiden').stop(true,true).fadeOut(500);
  $(this).closest('.redcur').find('.redHiden').stop(true, true).fadeOut(500);
})

/* 点击关注 */
var $redItemguan2 = $('.redItem-guan2');
$redItemguan2.click(function(){
  $(this).text('已关注');
})







/* 热点预告轮播 */
$rediancont = $('.rediancont');
$soon = $('.soon');
$redianpre = $('.redian-pre');
$rediannext = $('.redian-next');
$redianList = $('.redianUl li');
var soonWidth = ($soon[0].clientWidth);
var soonIndex = 0;
$redianpre.click(function(){
  soonIndex--;
  if(soonIndex < 0 ){
    soonIndex = 0;
  }
    $rediancont.animate({
      'scrollLeft': soonWidth * soonIndex
    });

})
$rediannext.click(function () {
  rednext();
})
function rednext(){
  soonIndex++;
  if (soonIndex > 5) {
    soonIndex = 5;
  }
  $rediancont.animate({
    'scrollLeft': soonWidth * soonIndex
  });
}





/* 排行榜ajax请求 */
$.ajax({
  url:'../data/rank.json',
  type:'get',
  dataType:"json",
  success:function(json){
    $.each(json,function(index, item) {
      var newdom = `
        <div class="rank-botBox"><h2 class="rank-botTit">${item.title}</h2>
          <div class="rank-littleBox">
          <img class="ranking" src="../img/rank-first1.jpg"" alt="">
          <img class="ranking-img" src="${item.titleImage}" alt="">
          <div class="rank-yong">
              <p>${item.describe}</p>
              <span>${item.titPrice}</span>
          </div>
        </div>
      `;
      $('.rank-botCont').append(newdom);
      $.each(json[index].value,function(index1,item1){
        var newDom2  = `
          <div class="rank-littleBox cont">
          <img class="ranking rankNum" src="${item1.ranking}" alt="">
          <img class="ranking-img" src="${item1.rankCont}" alt="">
          <div class="rank-yo">
              <p>${item1.name}</p>
              <span>${item1.price}</span>
          </div>
          <div class="rank-hiden">
            <div class="rankHiden-top">
                <div class="swiper-container2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../img/mengsanguo-pic1.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../img/mengsanguo-pic2.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../img/mengsanguo-pic3.jpg" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="rankHiden-bot">
                <h3 class="rankHiden-tit">梦三国2</h3>
                <p><img src="../img/redHidsx.jpg" alt="">
                    2020-01-09 上线
                </p>
                <p><img src="../img/redHidpc.jpg" alt="">
                    65.8% (3262条评测)
                </p>
                <p><img src="../img/redHidms.jpg" alt="">
                    MMORPG/moba/电子竞技/三国/RPG
                </p>
            </div>
            <span class="hidden-jiao"></span>
          </div>
        `;

        $('.rank-botBox').append(newDom2);
      })
    })

  }

})



/* 排行榜点击切换 */

var $rankLi = $('.rank-topUl li ');
var $rankBot = $('.rank-bot');
var rankIndex = 0;
$rankLi.click(function(){
  var index = $('.rank-topUl li ').index(this);
  $($rankLi[rankIndex]).removeClass("rank-show");
  rankIndex = index;
  $($rankLi[rankIndex]).addClass("rank-show");


  if (index > $rankLi.length-3){
    index = $rankLi.length - 3;
    $rankBot.animate({
      "scrollLeft": index * ($('.rank-botBox')[0].clientWidth + 20)
    })
  }
  $rankBot.animate({
    "scrollLeft":index*($('.rank-botBox')[0].clientWidth+20)
  })

})


/* 排行榜左右点击按钮 */
var $rankprev = $('.rank-prev');
var $ranknext = $('.rank-next');

$rankprev.click(function(){
  $($rankLi[rankIndex]).removeClass("rank-show");
  rankIndex = rankIndex-3;
  if(rankIndex < 0){
    rankIndex = 0
  }
  $($rankLi[rankIndex]).addClass("rank-show");
  var index = $('.rank-topUl li ').index(this);
    $rankBot.animate({
      "scrollLeft": rankIndex * ($('.rank-botBox')[0].clientWidth + 20)
    })
})


$ranknext.click(function () {
  $($rankLi[rankIndex]).removeClass("rank-show");
  rankIndex = rankIndex + 3;
  if (rankIndex > $rankLi.length - 3) {
    rankIndex = $rankLi.length - 3;
  }
  $($rankLi[rankIndex]).addClass("rank-show");

  var index = $('.rank-topUl li ').index(this);
  $rankBot.animate({
    "scrollLeft": rankIndex * ($('.rank-botBox')[0].clientWidth + 20)
  })
})


var ranktime1;
var ranktimer;
function rankmoveIn(){

    

}


//排行榜滑过出现轮播图
$('.rank-botCont').on('mouseenter', '.rank-littleBox', function(){
  $(this).css('backgroundColor', "#f4f4f4");
  ranktime1 = Date.now();
  ranktimer = setTimeout(()=>{
    $(this).find('.rank-hiden').stop(true).fadeIn(200, function () {
      var mySwiper2 = new Swiper('.swiper-container2', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1000,
        }, //自动切换
        effect: 'fade', //切换效果
      })
    });
  },300)

  console.log(1111);
});

$('.rank-botCont').on('mouseleave', '.rank-littleBox', function () {
  clearTimeout(ranktimer);
  $(this).find('.rank-hiden').css('display','none');
  $(this).css('backgroundColor', "#fff");
})






/* 最近更新 */

var $updateBot = $('.update-bot');
var $updateList = $('.update-list');
var $updateLi = $('.update-list li');
var $updatePrev = $('.update-prev');
var $updateNext = $('.update-next');
var updateLiWidth = $updateLi[0].clientWidth;
var updateNew1 = $updateLi[0].cloneNode(true);
var updateNew2 = $updateLi[1].cloneNode(true);
var updateNew3 = $updateLi[2].cloneNode(true);
$updateList.append(updateNew1);
$updateList.append(updateNew2);
$updateList.append(updateNew3);
var updateIndex= 0
$updatePrev.click(function () {
  updateIndex-=3;
  if (updateIndex < 0){
    updateIndex = $updateLi.length-3;
    $updateBot.scrollLeft(updateLiWidth * $updateLi.length);
  }
  $updateBot.stop(true,true).animate({
    'scrollLeft': updateIndex * updateLiWidth
  })
})
$updateNext.click(function () {
  updateIndex += 3;
  if (updateIndex > $updateLi.length){
    updateIndex = 3;
    $updateBot.scrollLeft(0);
  }
  $updateBot.stop(true,true).animate({
    'scrollLeft': updateIndex * updateLiWidth
  })
})