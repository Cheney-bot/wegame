export {shop};


function shop(){
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
}