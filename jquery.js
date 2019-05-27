$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 82) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });
});
$('.responsive').slick({
    dots: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.responsive1').slick({
    dots: true,
      prevArrow: $('.prev1'),
      nextArrow: $('.next1'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(function(){ 
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      $(window).scroll( function(){
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},500);
                      
              }
              
          }); 
      
      });
      
  });
  $(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
  });
            $(document).ready(function() {
                $('a[href*=#]').bind('click', function(e) {
                        e.preventDefault(); 
                        var target = $(this).attr("href");
                        $('html, body').stop().animate({
                                scrollTop: $(target).offset().top
                        }, 600, function() {
                                location.hash = target; 
                        });
                        return false;
                });
            });
            $(window).scroll(function() {
                    var scrollDistance = $(window).scrollTop();
                    $('.page-section').each(function(i) {
                            if ($(this).position().top <= scrollDistance) {
                                    $('.navigation a.active').removeClass('active');
                                    $('.navigation a').eq(i).addClass('active');
                            }
                    });
            }).scroll();