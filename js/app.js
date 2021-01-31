$(function(){
    $(window).on('load', function(){
        $('.overlay-loader').delay(100).fadeOut(500);
   });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop()
        var ducHeight = $(document).height()
        var winHeight = $(window).height()
        var value = (scroll/(ducHeight- winHeight))* 100

        $("#progress").css("width", value + "%")
    })

    $('#back_to_top').on('click', function(){
        $('html, body').animate({scrollTop:0},1000);
    });

    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
    
        if(scrolling > 300){
            $('#back_to_top').fadeIn(500);
        }
        else {
            $('#back_to_top').fadeOut(500);
        }
        if(scrolling > 100){
            $('#header').addClass('stickyMenu');
        }
        else {
            $('#header').removeClass('stickyMenu');
        }
        console.log(scrolling)
    
    });

    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 88
                }, 700);
                return false;
            }
        }
    });
})