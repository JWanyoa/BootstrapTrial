$(document).ready(function () {

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    items: 1,
    nav: true,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
    responsive: {
        0: {
        },
        600: { 
        },
        1000: {
        }
    }
})
});