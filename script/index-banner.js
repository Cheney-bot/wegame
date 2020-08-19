export {banner};

function banner(){
    /* banner */
    //分页器
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        autoplay: {
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
            bulletClass: 'swiper-pagination-customs',
            bulletActiveClass: 'swiper-pagination-customs-active',

            renderCustom: function (swiper, current, total) {
                var customPaginationHtml = "";
                for (var i = 0; i < total + 1; i++) {
                    //判断哪个分页器此刻应该被激活
                    if (i == (current)) {
                        if (current == 1) {
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
                        if (i == 1) {
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

}