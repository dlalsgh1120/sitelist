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
    document.getElementById('ready_woman').onclick = function(){
        window.location.href = "woman_wear.html";
    };
    document.getElementById('bag_woman').onclick = function(){
        window.location.href = "woman_bag.html";
    };
    document.getElementById('shose_woman').onclick = function(){
        window.location.href = "woman_shose.html";
    };
    document.getElementById('wallet_woman').onclick = function(){
        window.location.href = "woman_wallet.html";
    };
    document.getElementById('belt_woman').onclick = function(){
        window.location.href = "woman_belt.html";
    };
    document.getElementById('watch_woman').onclick = function(){
        window.location.href = "woman_watch.html";
    };
    document.getElementById('acc_woman').onclick = function(){
        window.location.href = "woman_acc.html";
    };
    document.getElementById('glass_woman').onclick = function(){
        window.location.href = "woman_glass.html";
    };
});