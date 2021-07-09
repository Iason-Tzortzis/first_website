$(".social-icon").click(function () {
    location = $(this).find("a").attr("href");
    return false;
});