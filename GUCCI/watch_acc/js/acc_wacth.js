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
        window.location.href = "../gift/gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "../perfume/perfume_nav.html";
    };
    document.getElementById('woman_acc').onclick = function(){
        window.location.href = "../woman/woman_acc.html";
    };
    document.getElementById('woman_acc_sliver').onclick = function(){
        window.location.href = "../watch_acc/acc_sliver.html";
    };
    document.getElementById('woman_acc_gold').onclick = function(){
        window.location.href = "../watch_acc/acc_gold.html";
    };
    document.getElementById('woman_watch').onclick = function(){
        window.location.href = "../woman/woman_watch.html";
    };

    $('.W_hover01').hover(
        function(){
            $('.w_inner_img01').css({
                background: "url('img/acc_wacth_sec01_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img01').css({
                background: "url('img/acc_wacth_sec01.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover02').hover(
        function(){
            $('.w_inner_img02').css({
                background: "url('img/acc_wacth_sec02_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img02').css({
                background: "url('img/acc_wacth_sec02.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover03').hover(
        function(){
            $('.w_inner_img03').css({
                background: "url('img/acc_wacth_sec03_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img03').css({
                background: "url('img/acc_wacth_sec03.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover04').hover(
        function(){
            $('.w_inner_img04').css({
                background: "url('img/acc_wacth_sec04_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img04').css({
                background: "url('img/acc_wacth_sec04.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
});