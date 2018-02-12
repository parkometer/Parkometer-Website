$("#arrow-button").click(function(){
    $("#arrow-button-icon").removeClass("bounce");
    $('html, body').animate({
        scrollTop: $("#usp-container").offset().top
    }, 900);
});



