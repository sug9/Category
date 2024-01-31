$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".manu .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".manu .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
    });



  let $img = $(".changeimg ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0; 
  let idx = 0;
  let img_n = $img.length; 

  
  function changeImg(idx){ 
    if(oldidx != idx){ 
      $img.eq(oldidx).stop().fadeOut("300"); 
      $img.eq(idx).stop().fadeIn("300"); 
    }
    oldidx = idx;  
  };


  function changeAuto(){
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000); 


  //좌우버튼
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx < 0){ 
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });









    //content3_________________________________


    $(".friend img").click(function(){

      $(this).addClass("active"); 
      $(this).siblings().removeClass("active"); 
  
      let result = $(this).attr("data-alt");
      $(".testimonial div").removeClass("active");
    $("#"+result).addClass("active").hide().show();

    });
});