$(".menu a").click(function() {
    $(".menu a.active").removeClass("active");
    $(this).addClass("active");
})