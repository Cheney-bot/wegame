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