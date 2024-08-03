$(document).ready(function(){
  AOS.init();

    // a태그 기본기능 제거
    $("a").click(function(e){
      e.preventDefault();
    })

  /* 리로드 */
  $('header .logo').click(function() {
    location.reload();
  });

  $(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow"); 
	});


    /* swiper slider */
    var swiper = new Swiper(".main_slide", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      effect:'fade',
      speed:800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
      delay: 3200,
      disableOnInteraction: false,
      },
    });

    
    /* nav */
    $("header .nav>li").mouseleave(function() {
      $(".out").css("display","none");
    });
    $("header .nav>li").mouseover(function() {
      $(".out").css("display","block");
    });


    // 스크롤 시 헤더 배경색 활성화
    $(window).scroll(function(){
    var sch2 = $(document).scrollTop();        
      if(sch2 > 100) {
      $("header").css("background","linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))");
      } else {
        $("header").css("background","linear-gradient(rgb(0, 0, 0,.7), rgb(0, 0, 0,.0))");
      }
    });


});

