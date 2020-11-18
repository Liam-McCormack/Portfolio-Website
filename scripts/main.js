

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

//CHEVRON ON-CLICK SCROLLS
$('.arrow').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});

$('.aboutArrow').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#experience").offset().top
    }, 1500);
});

$('.experienceArrow').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1500);
});

$('.projectArrow').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

//BACK TO TOP BUTTON
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});

//DATE FOR FOOTER
const year = new Date().getFullYear();
document.getElementById("date").innerHTML = year;
