export {rank};

function rank(){
    /* 排行榜ajax请求 */
    $.ajax({
        url: '../data/rank.json',
        type: 'get',
        dataType: "json",
        success: function (json) {
            $.each(json, function (index, item) {
                // console.log(index);
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
                $.each(json[index].value, function (index1, item1) {
                    // console.log(item1);
                    var newDom2 = `
          <div class="rank-littleBox cont">
          <img class="ranking rankNum" src="${item1.ranking}" alt="">
          <img class="ranking-img" src="${item1.rankCont}" alt="">
          <div class="rank-yo">
              <p>${item1.name}</p>
              <span>${item1.price}</span>
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
    $rankLi.click(function () {
        var index = $('.rank-topUl li ').index(this);
        $($rankLi[rankIndex]).removeClass("rank-show");
        rankIndex = index;
        $($rankLi[rankIndex]).addClass("rank-show");


        if (index > $rankLi.length - 3) {
            index = $rankLi.length - 3;
            $rankBot.animate({
                "scrollLeft": index * ($('.rank-botBox')[0].clientWidth + 20)
            })
        }
        $rankBot.animate({
            "scrollLeft": index * ($('.rank-botBox')[0].clientWidth + 20)
        })

    })


    /* 排行榜左右点击按钮 */
    var $rankprev = $('.rank-prev');
    var $ranknext = $('.rank-next');

    $rankprev.click(function () {
        $($rankLi[rankIndex]).removeClass("rank-show");
        rankIndex = rankIndex - 3;
        if (rankIndex < 0) {
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



    var poleft = 0;
    var hiddenIndex = 0
    var potop = 0
    var ranktimer;
    //排行榜滑过出现轮播图
    $('.rank-botCont').on('mouseenter', '.rank-littleBox', function () {
        $(this).css('backgroundColor', "#f4f4f4");
        var index = $('.rank-littleBox').index(this);

        poleft = $(this).offset().left + this.clientWidth;
        potop = $(this).offset().top;
        $('.rank-hiden').css({
            left: poleft,
            top: potop
        }).stop(true, true).fadeIn(500, function () {
            ranktimer = setTimeout(() => {
                var mySwiper2 = new Swiper('.swiper-container2', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay: {
                        delay: 1000,
                    }, //自动切换
                    effect: 'fade', //切换效果
                })
            }, 300)
        });

    });

    $('.rank-botCont').on('mouseleave', '.rank-littleBox', function () {
        clearTimeout(ranktimer);
        $('.rank-hiden').css('display', 'none');
        $(this).css('backgroundColor', "#fff");
    })

}