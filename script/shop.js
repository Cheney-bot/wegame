$(function () {
    if (localStorage.getItem('goods')) {
        //获得已经存在的localStorage中的goods
        var goodsArr = JSON.parse(localStorage.getItem('goods'));

        //页面初始化
        $.ajax({
            url: '../data/goods.json',
            type: 'get',
            dataType: 'json',
            success: function (jsonArr) {
                console.log(jsonArr);
                $.each(goodsArr, function (index, item) {
                    $.each(jsonArr, function (index1, item1) {
                        if (item.code == item1.code) {
                            var totalPrice = item.num * item1.price;
                            var newDom = `
                            <div class="goodsBox">
                                <div class="store">
                                    <input type="checkbox">
                                    <h2>京东自营</h2>
                                </div>
                                <div class="goodsCont">
                                    <div class="goodsItem">
                                        <img src="${item1.imgurl}" alt="">
                                        <div class="desc">
                                            <p>
                                                ${item1.title}
                                            </p>
                                        </div>
                                        <div class="desc2">
                                            演绎三国传奇
                                        </div>
                                        <span class="unit">￥${item1.price}</span>
                                        <div class="modified">
                                            <span class="subtract" code=${item1.code}>一</span>
                                            <span class="number">${item.num}</span>
                                            <span class="add" code=${item1.code}>＋</span>
                                        </div>

                                        <span class="subtotal">￥${totalPrice}</span>

                                        <div class="attention">
                                            <span class="remove" code=${item1.code}>删除</span>
                                            <span class="atten">移到我的关注</span>
                                        </div>
                                    </div>
                                    <input type="checkbox" code=${item1.code} class="checkCont">
                                </div>
                            </div>
                            
                            `
                            $('.goodsWrap').append(newDom);
                        }
                    })
                })
            }
        })
    }

    //全选
    $('.allcheck').click(function () {
        var totalPrice = 0;
        if ($(this).prop('checked') == true) {
            $('.mainWrap input').prop('checked', true);
            $('.checkCont').each(function (index, dom) {
                var a = $(dom).siblings('.goodsItem').find('.subtotal').text();
                a = a.slice(1, a.length);
                totalPrice += parseInt(a);
            })
            $('.tot').html(totalPrice);

        } else {
            $('.mainWrap input').prop('checked', false);
            $('.tot').html('0.00');
        }

    })


    //删除单个
    $('.goodsWrap').on('click', '.remove', function () {
        var code = $(this).attr('code');
        $.each(goodsArr, function (index, item) {
            if (item.code == code) {
                goodsArr.splice(index, 1);
                return false
            }
        });
        if (goodsArr.length > 0) {
            localStorage.setItem('goods', JSON.stringify(goodsArr));
        } else {
            localStorage.clear();
            var dom = `<div>购物车暂无内容</div>`
            $('.goodsWrap').append(dom);
        }
        $(this).closest('.goodsBox').remove();
    })



    //清理购物车
    $('.clear').click(function () {
        localStorage.clear();
        location.reload();
    })



    //点击-号
    $('.goodsWrap').on('click', '.subtract', function () {
        var $_this = $(this);
        var code = $(this).attr('code');
        $.each(goodsArr, function (index, item) {
            if (code == item.code) {
                item.num--;
                if (item.num <= 0) {
                    goodsArr.splice(index, 1);
                    localStorage.setItem("goods", JSON.stringify(goodsArr));
                    $_this.closest('.goodsBox').remove();
                    return false;
                } else {
                    $_this.siblings('.number').text(item.num)
                    localStorage.setItem("goods", JSON.stringify(goodsArr));
                }
            }
        })
        var a = $(this).parent().siblings('.subtotal').text();
        a = a.slice(1, a.length);
        var b = $(this).parent().siblings('.unit').text();
        b = b.slice(1, b.length);

        $(this).parent().siblings('.subtotal').text('￥' + (a - b));

        if ($(this).closest('.goodsCont').find('.checkCont').attr('checked')) {
            var temporary = $('.tot').html();
            var c = $(this).parent().siblings('.unit').text();
            c = c.slice(1, c.length);
            temporary = temporary - c;
            $('.tot').html(temporary);
        }

    })


    //点击＋号

    $('.goodsWrap').on("click", '.add', function () {
        var code = $(this).attr('code');
        var $_this = $(this);
        $.each(goodsArr, function (index, item) {
            if (code === item.code) {
                item.num++;
                $_this.siblings('.number').text(item.num)
                localStorage.setItem("goods", JSON.stringify(goodsArr));
            }
        })
        var a = $(this).parent().siblings('.subtotal').text();
        a = parseInt(a.slice(1, a.length));
        var b = $(this).parent().siblings('.unit').text();
        b = parseInt(b.slice(1, b.length));
        $(this).parent().siblings('.subtotal').text('￥' + (a + b));


        if ($(this).closest('.goodsCont').find('.checkCont').attr('checked')) {
            var temporary = $('.tot').html();
            var c = $(this).parent().siblings('.unit').text();
            c = c.slice(1, c.length);
            temporary = parseInt(temporary) + parseInt(c);
            $('.tot').html(temporary);
        }
    })


    //check

    $('.goodsWrap').on('click', '.checkCont', function () {


        var totalPrice = 0
        var flag = false;
        $('.checkCont').each(function (index, dom) {
            if (!$(dom).attr('checked')) {
                $('.allcheck').attr('checked', false);
                return false;
            } else {
                $('.allcheck').attr('checked', true);
            }
        })
        if ($(this).attr('checked')) {

            var a = $(this).siblings('.goodsItem').find('.subtotal').text();
            a = a.slice(1, a.length);
            totalPrice = a;
            var b = $('.tot').text();
            // console.log(b);
            totalPrice = parseInt(totalPrice) + parseInt(b);
            $('.tot').html(totalPrice);


        } else {
            console.log(1111);
            var a = $(this).siblings('.goodsItem').find('.subtotal').text();
            a = a.slice(1, a.length);
            totalPrice = a;
            var b = $('.tot').text();
            totalPrice = parseInt(b) - parseInt(totalPrice);
            $('.tot').html(totalPrice);
        }

    })

})