$(document).on("click", "#menu_open", function(){
    $('#main-navbar').toggleClass('open');
});

$(document).on("click", "#menu-nav a", function(){
    $('#main-navbar').removeClass('open');
});

$(document).ready(function() {
    $('.navbar a').on('click', function(event) {
        event.preventDefault();
        var location_anchor = $(this).attr('href');
        if(location_anchor == '#'){
            location_anchor = 'html';
        }
        $('html, body').animate({
            scrollTop: $(location_anchor).offset().top
        }, 1000);
    });
});