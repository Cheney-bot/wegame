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
ipt1.onblur = function(){
    var reg = /[0-9 | a-z | A-Z]{8,16}/ig;
    if(!reg.test(ipt1.value)){
        alert('用户名智能为数字和字母,且长度为8~16');
    }

}
logBtn.onclick = function () {
    if (ipt1.value == '' || ipt2.value == '') {
        alert('输入框不能为空!');
        return false;
    }
    ajax({
        url: '../php/login.php',
        type: 'post',
        data: {
            type: 'login',
            user: ipt1.value,
            pass: ipt2.value
        },
        dataType: 'json',
        success: function (data) {
            var json = JSON.parse(data);
            if (json.msg == "登录成功"){
                setTimeout(() => {
                    open('http://localhost/wegame/dist/html/index.html');
                }, 500)
            }else{
                alert(json.msg);
            }
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




var $formgroup = $('.form-group');

// var num = 2145364576432;
// console.log(reg1.test(num));
// console.log(reg1.test(num));


$('.banBot').on('click', '.editSubmit',function(){
    var user = $formgroup.eq(0).find('input').val();
    var pass = $formgroup.eq(1).find('input').val();
    var email = $formgroup.eq(2).find('input').val();
    var idcard = $formgroup.eq(3).find('input').val();
    var reg1 = /[0-9 | a-z | A-Z]{8,16}/ig;
    var reg2 = /[0-9 | a-z | A-Z]{8,16}/ig;
    var reg3 = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    var reg4 = /^[1-9]\d{5}(19|20)\d{2}[01]\d[0123]\d\d{3}[xX\d]$/;


    var flag1 = reg1.test(user);
    var flag2 = reg2.test(pass);
    var flag3 = reg3.test(email);
    var flag4 = reg4.test(idcard);

      if (!(user | pass | email | idcard)) {
          alert('输入框不能为空！！！')
          return false;
      } 
      if (flag1 && flag2 && flag3 && flag4){
         $.ajax({
             url: '../php/login.php',
             type: 'get',
             data: {
                 type: 'add',
                 user: user,
                 pass: pass
             },
             dataType: 'json',
             success: function (json) {
                alert(json.msg);
                $('.btn-default').click();
             },
             error: function (status) {
                 alert(status + '注册失败');
             }

         })
      }else{
          if (!flag1){
            alert('请输入正确的账号！');
          }
          if(!flag2){
            alert('请输入正确的密码！');
          }
          if(!flag3){
              alert('请输入正确的邮箱！')
          }
          if (!flag4) {
              alert('请输入正确的身份证！')
          }
      }
     

})