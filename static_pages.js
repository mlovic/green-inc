# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
		// DIV HEIGHT

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

    $(".prev_post").click(function(){
        var $targetItem = $(".item--active").prev();
        sliderMove($targetItem);
    });

    $(".next_post").click(function(){
        var $targetItem = $(".item--active").next();
        sliderMove($targetItem);
    });
    $(window).scroll(function(event) {
    	/* Act on the event */
    });
});
