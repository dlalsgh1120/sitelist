$(document).ready(function(){

    var scrollTop, headerHeight;
    $(document).scroll(function(){
        scrollTop = $(window).scrollTop();
        
        headerHeight = $('header').height();
        if(scrollTop > headerHeight){
            $('nav').addClass('fixed');
            $('.left_icon_ul').addClass('block');
            $('.right_icon_ul').addClass('block');
        }
        else{
            $('nav').removeClass('fixed');
            $('.left_icon_ul').removeClass('block');
            $('.right_icon_ul').removeClass('block');
        }
    });




    var index = 0;
    var length = $('.slide').length;
    var auto;

    autoplay();

    $(document).on('click', '.bull', function(){
        index = $(this).index();
        action(index);
    });

    function next(){
        index++;
        index = index%length;
        action(index);
    }

    function autoplay() {
        clearInterval(auto);
        auto = setInterval(function(){
                next();
            }, 5000);
    };
    function action(idx){
        $('.slide').removeClass('active').eq(idx).addClass('active');
        $('.bull').removeClass('liActive').eq(idx).addClass('liActive');
    };
    
    document.getElementById('logo_click').onclick = function(){
        window.location.href = "index.html";
    }; 
    document.getElementById('n_span01').onclick = function(){
        window.location.href = "what_nav.html";
    };
    document.getElementById('n_span02').onclick = function(){
        window.location.href = "woman_nav.html";
    }; 
    document.getElementById('n_span03').onclick = function(){
        window.location.href = "man_nav.html";
    }; 
    document.getElementById('n_span04').onclick = function(){
        window.location.href = "gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "perfume_nav.html";
    };
});