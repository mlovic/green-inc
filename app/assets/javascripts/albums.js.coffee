$(document).ready ->
  $(".icon").on "mouseenter", ->
    #$(this).closest(".menu").find("ul").show();
    #$('ul').fadein();
    #$('ul').slidedown().animate({'opacity': '1'},{'queue': 'false'});
    $('ul').css('opacity', 0).slideDown('slow').animate
      opacity: 1 
    ,
      queue: false
      duration: 'slow'
    $(@).parent().animate
      color: '#999999'
  $("#menu").on "mouseleave", ->
    #$(this).closest(".menu").find("ul").show();
    $('ul').fadeOut('slow')
  
