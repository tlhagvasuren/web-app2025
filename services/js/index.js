const acc = document.querySelectorAll(".accordion");
    acc.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 50 + "px";
                console.log(panel.scrollHeight);
            }
        });
    });

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