$(document).ready(function () {
    // top
    $(".top").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // more_detail hover
    $(".more_detail").hover(function () {
        $(this).find("p").animate({ bottom: "0px" });
    }, function () {
        $(this).find("p").animate({ bottom: "-60px" });
    });

    // more_detail click
    $(".more_detail").click(function (e) {
        e.preventDefault();
        $(this).siblings(".modal").fadeIn(600);
    });

    // close
    $(".close").click(function (e) {
        e.preventDefault();
        $(this).parent().fadeOut(600);
    });

    // swiper
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2000,
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});