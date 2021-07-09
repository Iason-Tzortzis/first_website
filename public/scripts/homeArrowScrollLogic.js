$(function () {
    let eventPresent = false;

    if (window.innerWidth >= 1024 && eventPresent == false) {
        $('.button').unbind().on('click', function () {
            $('html, body').animate({ scrollTop: $(this).offset().top }, 200, 'linear');
        });
        eventPresent = true;
    }

    $(window).resize(function () {


        if (window.innerWidth >= 1024 && eventPresent == false) {
            $('button').unbind().on('click', function () {
                $('html, body').animate({ scrollTop: $(this).offset().top }, 200, 'linear');
            });
            eventPresent = true;
        }
        else if (window.innerWidth < 1024 && eventPresent == true) {
            $('.button').unbind();
            eventPresent = false;
        }
    });
});