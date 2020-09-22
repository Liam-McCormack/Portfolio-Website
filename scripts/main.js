

//NAVBAR APPEARANCE
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100); 
});

//SCROLL TO FROM NAVBAR
$('.nav-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});


//BACK TO TOP BUTTON
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});


