$(document).ready(function(){
    var secBox = [
        {id: 1, name: "레디-투-웨어", desc:"모두보기", src:"GG_W_wear.jpg", src2:"GG_W_wear_hover.jpg", type: true},
        {id: 2, name: "여성가방", desc:"모두보기", src:"GG_W_bag.jpg", src2:"GG_W_bag_hover.jpg", type: false},
        {id: 3, name: "여성슈즈", desc:"모두보기", src:"GG_W_shose.jpg", src2:"GG_W_shose_hover.jpg", type: false},
        {id: 4, name: "지갑", desc:"모두보기", src:"GG_W_wallet.jpg", src2:"GG_W_wallet_hover.jpg", type: false},
        {id: 5, name: "벨트", desc:"모두보기", src:"GG_W_belt.jpg", src2:"GG_W_belt_hover.jpg", type: false},
        {id: 6, name: "시계", desc:"모두보기", src:"GG_W_wacth.jpg", src2:"GG_W_wacth_hover.jpg", type: false},
        {id: 7, name: "주얼리 & 시계", desc:"모두보기", src:"GG_W_accessory.jpg", src2:"GG_W_accessory_hover.jpg", type: false},
        {id: 8, name: "아이웨어", desc:"모두보기", src:"GG_W_sunglasses.jpg", src2:"GG_W_sunglasses_hover.jpg", type: false}
    ];
    var scrollTop, headerHeight;
    var html = "";
    var text = "";
    var id, name, desc, src, src2, typeTag;

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
    
    for(var i in secBox){
        id = secBox[i].id;
        name = secBox[i].name;
        desc = secBox[i].desc;
        src = secBox[i].src;
        src2 = secBox[i].src2;
        typeTag = secBox[i].type;

        // typeTag = "";
        // if(typeTag){
        //     typeTag = `<div class="boxType"></div>`;
        // }
        txt=`
            <div class="woman_box">
                <div class="front">
                    <img src="img/${src}">
                </div>
                <div class="black">
                    <img src="img/${src2}">
                </div>
                <div class="name">
                    ${name}
                </div>
                <div class="desc">
                    ${desc}
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        `;
        html = html + txt;
    }
    $('.sec_box').html(html);
});