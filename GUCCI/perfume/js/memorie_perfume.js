$(document).ready(function(){
    var scrollTop, headerHeight;
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
        window.location.href = "../gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "../watch_acc/acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "../perfume/perfume_nav.html";
    };
    document.getElementById('woman_bag').onclick = function(){
        window.location.href = "../woman/woman_bag.html";
    };
    document.getElementById('woman_wallet').onclick = function(){
        window.location.href = "../woman/woman_wallet.html";
    };
    document.getElementById('woman_shose').onclick = function(){
        window.location.href = "../woman/woman_shose.html";
    };
    document.getElementById('man_bag').onclick = function(){
        window.location.href = "../man/man_bag.html";
    };
    document.getElementById('man_wallet').onclick = function(){
        window.location.href = "../man/man_wallet.html";
    };
    document.getElementById('man_shose').onclick = function(){
        window.location.href = "../man/man_shose.html";
    };
});