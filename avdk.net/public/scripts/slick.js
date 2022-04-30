$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
});