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
        window.location.href = "../watch_acc/acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "../perfume/perfume_nav.html";
    };
    document.getElementById('man_wear').onclick = function(){
        window.location.href = "../man/man_wear.html";
    };
    document.getElementById('man_bag').onclick = function(){
        window.location.href = "../man/man_bag.html";
    };
    document.getElementById('man_shose').onclick = function(){
        window.location.href = "../man/man_shose.html";
    };
    document.getElementById('man_glass').onclick = function(){
        window.location.href = "../man/man_glass.html";
    };
    document.getElementById('man_wallet').onclick = function(){
        window.location.href = "../man/man_wallet.html";
    };
    document.getElementById('man_cap').onclick = function(){
        window.location.href = "../man/man_cap.html";
    };
    document.getElementById('man_watch').onclick = function(){
        window.location.href = "../man/man_watch.html";
    };

    $('.W_hover01').hover(
        function(){
            $('.w_inner_img01').css({
                background: "url('img/GG_M_wear_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img01').css({
                background: "url('img/GG_M_wear.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover02').hover(
        function(){
            $('.w_inner_img02').css({
                background: "url('img/GG_M_bag_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img02').css({
                background: "url('img/GG_M_bag.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover03').hover(
        function(){
            $('.w_inner_img03').css({
                background: "url('img/GG_M_shose_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img03').css({
                background: "url('img/GG_M_shose.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover04').hover(
        function(){
            $('.w_inner_img04').css({
                background: "url('img/GG_M_sunglasses_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img04').css({
                background: "url('img/GG_M_sunglasses.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover05').hover(
        function(){
            $('.w_inner_img05').css({
                background: "url('img/GG_M_wallet_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img05').css({
                background: "url('img/GG_M_wallet.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover06').hover(
        function(){
            $('.w_inner_img06').css({
                background: "url('img/GG_M_cap_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img06').css({
                background: "url('img/GG_M_cap.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover07').hover(
        function(){
            $('.w_inner_img07').css({
                background: "url('img/GG_M_wacth_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img07').css({
                background: "url('img/GG_M_wacth.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    
});