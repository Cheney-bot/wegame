export {find}

function find(){
    setTimeout(()=>{
         var $fript = $('.fr-ipt');
         var $frclose = $('.fr-close');
         var $frhide = $('.fr-hidebox');
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




         /* find输入框jsonp请求 */
         $fript.keyup(function () {
             $.ajax({
                 url: '../php/baidu.php',
                 tepe: 'get',
                 data: 'wd=' + $fript.val(),
                 dataType: 'json',
                 success: function (json) {
                     console.log(json);
                     $('.fr-ipt-ul').html('');
                     // $('.fr-ipt-ul').innerHTML = '';
                     json.s.forEach(function (item) {
                         console.log(item);
                         $('.fr-ipt-ul')[0].innerHTML += '<li>' + item + '</li>';
                     });
                     if ($fript.val() == '') {
                         ('.fr-ipt-ul').css('height', 0);
                     }
                 }
             })
         })

    },3000)
   
}
