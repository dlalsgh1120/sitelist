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
    document.getElementById('main_logo').onclick = function(){
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

    $('.W_hover01').hover(
        function(){
            $('.w_inner_img01').css({
                background: "url('img/GG_W_wear_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img01').css({
                background: "url('img/GG_W_wear.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover02').hover(
        function(){
            $('.w_inner_img02').css({
                background: "url('img/GG_W_bag_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img02').css({
                background: "url('img/GG_W_bag.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover03').hover(
        function(){
            $('.w_inner_img03').css({
                background: "url('img/GG_W_shose_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img03').css({
                background: "url('img/GG_W_shose.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover04').hover(
        function(){
            $('.w_inner_img04').css({
                background: "url('img/GG_W_wallet_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img04').css({
                background: "url('img/GG_W_wallet.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.W_hover05').hover(
        function(){
            $('.w_inner_img05').css({
                background: "url('img/GG_W_belt_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_inner_img05').css({
                background: "url('img/GG_W_belt.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.wacth_bot').hover(
        function(){
            $('.w_bot_wacth').css({
                background: "url('img/GG_W_wacth_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_bot_wacth').css({
                background: "url('img/GG_W_wacth.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.accessory_bot').hover(
        function(){
            $('.w_bot_accessory').css({
                background: "url('img/GG_W_accessory_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_bot_accessory').css({
                background: "url('img/GG_W_accessory.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );
    $('.sunglasses_bot').hover(
        function(){
            $('.w_bot_sunglasses').css({
                background: "url('img/GG_W_sunglasses_hover.jpg') no-repeat center",
                backgroundSize: "cover",
            });
        },
        function(){
            $('.w_bot_sunglasses').css({
                background: "url('img/GG_W_sunglasses.jpg') no-repeat center",
                backgroundSize: "cover"
            });
        }
    );


    // var pdt = [
    //     { id:1, name:"레디-투-웨어", desc: "모두보기",src: "GG_W_wear.jpg"},
    //     { id:2, name:"여성가방", desc: "모두보기",src: "GG_W_bag.jpg"},
    //     { id:3, name:"여성슈즈",desc: "모두보기",src: "GG_W_shose.jpg"},
    //     { id:4, name:"지갑", desc: "모두보기",src: "GG_W_wallet.jpg"},
    //     { id:5, name:"벨트", desc: "모두보기",src: "GG_W_belt.jpg"},
    //     { id:6, name:"시계", desc: "모두보기",src: "GG_W_wacth.jpg"},
    //     { id:7, name:"주얼리 & 시계", desc: "모두보기",src: "GG_W_accessory.jpg"},
    //     { id:8, name:"아이웨어", desc: "모두보기",src:"GG_W_sunglasses.jpg"}
    // ];
    // var id, name, desc, src;
    // var html = "";
    // var text = "";

    // for(var i in pdt){
    //     id = pdt[i].id;
    //     name = pdt[i].name;
    //     desc = pdt[i].desc;
    //     src = pdt[i].src;

    //     txt = `
    //             <div class="woman_box">
    //                 <div class="woman_inner W_hover01">
    //                     <div class="w_inner_img">
    //                         <img src="img/${src}">
    //                     </div>
    //                     <span>${name}</span>
    //                     <p>${desc}<i class="fas fa-angle-right"></i></p>
    //                 </div>
    //             </div>
    //     `;
    //     html = html + txt;
    // }
    // $('.sec_box').html(html);
});