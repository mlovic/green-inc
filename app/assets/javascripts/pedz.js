// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

        // DIV DIMENSIONS

$(document).ready(function() {
    var hWindow = $(window).height();
    $('.slider_wrap').height(hWindow);
    $('.wrapper').height(hWindow);
    $('.category').height(hWindow);
    var wWindow = $(window).width();
    $('.wrapper').width(wWindow);
});

$(window).resize(function() {
    var hWindow = $(window).height();
    $('.slider_wrap').height(hWindow);
    $('.wrapper').height(hWindow);
    $('.category').height(hWindow);
    var wWindow = $(window).width();
    $('.wrapper').width(wWindow);
});

        // VIEW BUTTON ANIMATION

/* THIS IS A FUCKING MESS, DISABLED UNTIL I FIND AN ANIMATION I LIKE

$('.view').mouseenter(function() {
    $('.view .ph').addClass('animated bounceOutLeft');
    $('.view .click').addClass('animated bounceInRight');
});

$('.view').mouseleave(function() {
    $('.view .click').addClass('animated bounceOutLeft');
    $('.view .ph').addClass('animated bounceInRight');
});


*/

        // SLIDER

$(window).load(function(){

    var totalWidth = 0;
    $(".item").each(function(){
        totalWidth = totalWidth + $(this).outerWidth(true);
    });

    var maxScrollPosition = totalWidth - $(".slider_wrap").outerWidth();

    function sliderMove($targetItem){
        if($targetItem.length){
            var newPosition = $targetItem.position().left;
            if(newPosition <= maxScrollPosition){
                $targetItem.addClass("item--active");
                $targetItem.siblings().removeClass("item--active");
                $(".slider").animate({
                    left : - newPosition
                });
            } else {
                $(".slider").animate({
                    left : - maxScrollPosition
                });
            };
        };
    };

    $(".slider").width(totalWidth);
    $(".item:first").addClass("item--active");

        // SLIDER CONTROLLERS

    $(".prev_post").click(function(){
        var $targetItem = $(".item--active").prev();
        sliderMove($targetItem);
    });

    $(".next_post").click(function(){
        var $targetItem = $(".item--active").next();
        sliderMove($targetItem);
    });

        // MOUSE CONTROLLERS

    $(document).on('DOMMouseScroll mousewheel', function (e) {
      if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        var $targetItem = $(".item--active").next();
        sliderMove($targetItem);
      } else {
        var $targetItem = $(".item--active").prev();
        sliderMove($targetItem);      }

      return false;
    });
    
});

