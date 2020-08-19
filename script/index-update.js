export {update};



function update(){
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
        'scrollLeft': updateIndex * updateLiWidth+10
      })
    })
    $updateNext.click(function () {
      updateIndex += 3;
      if (updateIndex > $updateLi.length){
        updateIndex = 3;
        $updateBot.scrollLeft(0);
      }
      $updateBot.stop(true,true).animate({
        'scrollLeft': updateIndex * updateLiWidth+10
      })
    })


    /* 蛋蛋君推荐 */

    var $recomLine = $('.recommend-line');
    var $recomBot = $('.recommend-bot');
    var $recomMove = $('.recommend-move');
    var recomTimer;
    var moveLength = 25;
    $recomBot.mouseenter(function(){
      $recomLine.stop(true,true).animate({
        "width":550
      })
      recomTimer =  setInterval(()=>{
        moveLength -= 5;
        if(moveLength <= 5){
          moveLength = 25;
        }
        $recomMove.animate({
          "right": moveLength
        },100)
      },10)
    })
    $recomBot.mouseleave(function () {
      clearInterval(recomTimer);
      $recomLine.stop(true, true).animate({
        "width": 0
      })
    })


}