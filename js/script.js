//background turning while scrolldown
$(window).scroll(function() {
    var scrollwindow = $(this).scrollTop()
    if (scrollwindow > 1600) {
        $("body").css({
            // animation: 'none',
            background: '#fff',
        })
    } else if (scrollwindow < 1600) {
        $("body").css({
            // animation: '',
            background: '',
        })
    }
});


//Swiper
var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    // Navigation arrows
    navigation: {
        nextEl: '.news_next',
        prevEl: '.news_prev',
    }
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
});


 








