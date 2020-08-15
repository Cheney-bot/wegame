var erweiWrap = document.querySelector('.erweiWrap');
var orange = document.querySelector(".orange");

erweiWrap.onmouseenter = function () {
    animate(erweiWrap, {
        'left': 0
    });
    orange.style.display = 'block';
}
erweiWrap.onmouseleave = function () {
    animate(erweiWrap, {
        'left': 84
    });
    orange.style.display = 'none';
}


var banBot = document.querySelector(".banBot");
on(banBot, 'mouseover', 'span', function (e) {
    var target = e.target || e.srcElement;
    if ((target.parentNode.tagName == 'LI' && target.tagName == 'SPAN') || (target.parentNode.tagName == 'P' && target.tagName == 'SPAN')) {
        target.style.borderBottom = '1px solid #b61d1d';
        target.style.color = '#b61d1d';
    }
})
on(banBot, 'mouseout', 'span', function (e) {
    var target = e.target || e.srcElement;
    if ((target.parentNode.tagName == 'LI' && target.tagName == 'SPAN') || (target.parentNode.tagName == 'P' && target.tagName == 'SPAN')) {
        target.style.borderBottom = 0;
        target.style.color = '#999999';
    }
})


/* nav */
var nav = document.querySelector(".nav");
on(nav, 'mouseover', 'a', function (e) {
    var target = e.target || e.srcElement;
    if (target.parentNode.parentNode.tagName == 'UL') {
        target.style.color = "#e4393c";
    }
})
on(nav, 'mouseout', 'a', function (e) {
    var target = e.target || e.srcElement;
    if (target.parentNode.parentNode.tagName == 'UL') {
        target.style.color = "#666";
    }
})


/* smRight */

var smRight = document.querySelector('.smRight');
var smLeft = document.querySelector(".smLeft");
var banLogin = document.querySelector(".banLogin");
var userLogin = document.querySelector(".userLogin");
smRight.onmouseenter = function () {
    smRight.style.color = '#e4393c';
}
smRight.onmouseout = function () {
    smRight.style.color = '#666666';
}
smRight.onclick = function () {
    banLogin.style.display = 'none';
    userLogin.style.display = 'block';
}
smLeft.onclick = function () {
    banLogin.style.display = 'block';
    userLogin.style.display = 'none';
}



/* login */

var ipt1 = document.querySelector('.ipt1');
var ipt2 = document.querySelector('.ipt2');
var logBtn = document.querySelector(".logBtn");
var register = document.querySelector(".register");

if (getCookie('username')) {
    ipt1.value = getCookie('username');
    ipt2.value = getCookie('password');
}
logBtn.onclick = function () {
    if (ipt1.value == '' || ipt2.value == '') {
        return false;
    }
    ajax({
        url: './data/login.php',
        type: 'post',
        data: {
            type: 'login',
            user: ipt1.value,
            pass: ipt2.value
        },
        dataType: 'json',
        success: function (data) {
            var json = JSON.parse(data);
            open('http://localhost/jd/Demo.html');

        },
        error: function (status) {
            alert(status + '登录失败');
        }
    })


    setCookie({
        key: 'username',
        val: ipt1.value,
        days: 7
    });
    setCookie({
        key: 'password',
        val: ipt2.value,
        days: 7
    })
}

register.onclick = function () {
    if (ipt1.value == '' || ipt2.value == '') {
        return false;
    }
    ajax({
        url: './data/login.php',
        type: 'post',
        data: {
            type: 'add',
            user: ipt1.value,
            pass: ipt2.value
        },
        dataType: 'json',
        success: function (data) {
            var json = JSON.parse(data);
            alert(json.msg);
        },
        error: function (status) {
            alert(status + '注册失败');
        }

    })
}