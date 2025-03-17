$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('active');
        $('.navbar').toggleClass('nav-toggle');

    });
    $(window).on('scroll load' , function(){
        $('fa-bars').removeClass('active');
        $('.navbar').removeClass('nav-toggle');
        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
         } else {
                $('header').removeClass('header-active');

            }
        


    })

});