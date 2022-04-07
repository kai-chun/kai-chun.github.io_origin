function showBtnCondition() {
    if ($(this).scrollTop() > 400) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
}
$(window).scroll(showBtnCondition);

// function unScroll() {
//     var top = $(document).scrollTop();
//     $(document).on("scroll.unable",function (e) {
//         $(document).scrollTop(top);
//     });
// }

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
        // $(window).unScroll();
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
        speed: 600,
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

    // swiper
    const modal_swiper = new Swiper(".modal_swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        speed: 600,

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});