$(document).ready(function(){
    $('.slick-container').slick({
        dots: true,
        swipe: true,
        infinite: false,
        customPaging: function(slider, i) {
            return '<button class="slick-dot"></button>';
        },
        appendDots: $('.slick-dots'),
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
  
    function adjustDotSpacing() {
      var dots = $('.slick-dots li');
      dots.each(function() {
        var button = $(this).find('button');
        if ($(this).hasClass('slick-active')) {
          button.css('width', '48px');
        } else {
          button.css('width', '8px');
        }
      });
  
      dots.css('margin', '0 4px');
      $('.slick-dots li.slick-active').css('margin', '0 12px');
    }
  
    $('.slick-container').on('afterChange', function(event, slick, currentSlide){
      adjustDotSpacing();
    });
  
    adjustDotSpacing(); // Initial call to set spacing on page load
  });
  