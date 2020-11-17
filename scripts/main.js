

//NAVBAR APPEARANCE
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

//SCROLL TO FROM NAVBAR
$('.nav-link').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1500);
});


//NAVBAR COLLAPSE ON SELECTED LINK
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

//CHEVRON ON-CLICK SCROLL TO ABOUT
$('#arrow').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});

//BACK TO TOP BUTTON
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});
