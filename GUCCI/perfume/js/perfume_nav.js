$(document).ready(function(){
    $(document).scroll(function(){
        scrollTop = $(window).scrollTop();
        
        headerHeight = $('header').height();
        if(scrollTop > headerHeight){
            $('nav').addClass('fixed');
            $('.left_ul').addClass('block');
            $('.right_ul').addClass('block');
        }
        else{
            $('nav').removeClass('fixed');
            $('.left_ul').removeClass('block');
            $('.right_ul').removeClass('block');
        }
    });
    document.getElementById('main_logo').onclick = function(){
        window.location.href = "../index.html";
    }; 
    document.getElementById('n_span01').onclick = function(){
        window.location.href = "../what_nav/what_nav.html";
    };
    document.getElementById('n_span02').onclick = function(){
        window.location.href = "../woman/woman_nav.html";
    }; 
    document.getElementById('n_span03').onclick = function(){
        window.location.href = "../man/man_nav.html";
    }; 
    document.getElementById('n_span04').onclick = function(){
        window.location.href = "../gift/gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "../watch_acc/acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "../perfume/perfume_nav.html";
    };
    document.getElementById('n_span07').onclick = function(){
        window.location.href = "../decoration/deco_nav.html";
    };
    document.getElementById('man_perfume').onclick = function(){
        window.location.href = "man_perfume.html";
    };
    document.getElementById('woman_perfume').onclick = function(){
        window.location.href = "woman_perfume.html";
    };
    document.getElementById('memorie_perfume').onclick = function(){
        window.location.href = "memorie_perfume.html";
    };
    document.getElementById('memorie_perfume02').onclick = function(){
        window.location.href = "memorie_perfume.html";
    };
    document.getElementById('memorie_perfume03').onclick = function(){
        window.location.href = "memorie_perfume.html";
    };

    
});