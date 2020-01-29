$(document).ready(function(){
    var secBox = [
        {id: 1, name: "[GG 마몽] 장지갑", desc:"쇼핑하기",price: '￦1,030,000', src:"gift_wallet_img01",type: false},
        {id: 2, name: "[GG 마몽] 장지갑", desc:"쇼핑하기",price: '￦1,030,000', src:"gift_wallet_img02", type: false},
        {id: 3, name: "[GG 마몽] 가죽 장지갑", desc:"쇼핑하기", price: '￦830,000',src:"gift_wallet_img03", type: false},
        {id: 4, name: "[GG 마몽] 가죽 장지갑", desc:"쇼핑하기", price: '￦830,000',src:"gift_wallet_img04", type: false},
        {id: 5, name: "[GG 마몽] 가죽 장지갑", desc:"쇼핑하기", price: '￦830,000',src:"gift_wallet_img05", type: true},
        {id: 6, name: "[GG 마몽] 가죽 카드 케이스", desc:"쇼핑하기", price: '￦470,000', src:"gift_wallet_img06", type: false},
        {id: 7, name: "[GG 마몽] 가죽 카드 케이스", desc:"쇼핑하기",  price: '￦470,000',src:"gift_wallet_img07",type: false},
        {id: 8, name: "[GG 마몽] 가죽 카드 케이스", desc:"쇼핑하기", price: '￦470,000', src:"gift_wallet_img08", type: false},
        {id: 9, name: "[애니멀리에] 카드 케이스", desc:"쇼핑하기", price: '￦550,000',src:"gift_wallet_img09", type: false},
        {id: 10, name: "[애니멀리에] 카드 케이스", desc:"쇼핑하기",  price: '￦550,000',src:"gift_wallet_img010", type: true},
        {id: 11, name: "[GG 마몽] 미니 가죽 체인백", desc:"쇼핑하기",  price: '￦1,190,000',src:"gift_wallet_img011", type: false},
        {id: 12, name: "[디오니서스] 미니 가죽 체인백", desc:"쇼핑하기",  price: '￦1,860,000',src:"gift_wallet_img012", type: false},
        {id: 13, name: "[실비] 가죽 장지갑", desc:"쇼핑하기",  price: '￦1,160,000',src:"gift_wallet_img013", type: false},
        {id: 14, name: "[실비] 가죽 장지갑", desc:"쇼핑하기",  price: '￦1,160,000',src:"gift_wallet_img014", type: false},
        {id: 15, name: "GG 수프림 Web 지갑", desc:"쇼핑하기",  price: '￦520,000',src:"gift_wallet_img015", type: false},
        {id: 16, name: "[구찌 베스트리에] 스네이크 프린트 지갑", desc:"쇼핑하기",  price: '￦520,000',src:"gift_wallet_img016", type: false},
        {id: 17, name: "[구찌 베스트리에] 벌 모양 프린트 지갑", desc:"쇼핑하기",  price: '￦520,000',src:"gift_wallet_img017", type: false},
        {id: 18, name: "타이거 프린트 지갑", desc:"쇼핑하기",  price: '￦520,000',src:"gift_wallet_img018", type: false},
        {id: 19, name: "뉴 웹(Web) GG 수프림 지갑", desc:"쇼핑하기",  price: '￦520,000',src:"gift_wallet_img019", type: false},
        {id: 20, name: "GG 수프림 Web 지갑", desc:"쇼핑하기",  price: '￦520,000',src:"gift_wallet_img020", type: false},
        {id: 21, name: "[네오 빈티지] GG 수프림 지갑", desc:"쇼핑하기",  price: '￦650,000',src:"gift_wallet_img021", type: false},
        {id: 22, name: "[구찌 에덴] GG 수프림 지갑", desc:"쇼핑하기",  price: '￦650,000',src:"gift_wallet_img022", type: false},
        {id: 23, name: "[GG 마몽] 가죽 지갑", desc:"쇼핑하기",  price: '￦550,000',src:"gift_wallet_img023", type: false},
        {id: 24, name: "테유스 프린트 가죽 지갑", desc:"쇼핑하기",  price: '￦930,000',src:"gift_wallet_img024", type: false},
        {id: 25, name: "구찌 로고 가죽 지갑", desc:"쇼핑하기",  price: '￦550,000',src:"gift_wallet_img025", type: false},
        {id: 26, name: "애니멀리에 가죽 지갑", desc:"쇼핑하기",  price: '￦600,000',src:"gift_wallet_img026", type: false},
        {id: 27, name: "구찌 시그니처 카드 케이스", desc:"쇼핑하기",  price: '￦550,000',src:"gift_wallet_img027", type: false}
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,type, price;
    var html = "";
    var txt= "";

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
    for(var i in secBox){
        id = secBox[i].id;
        name = secBox[i].name;
        desc = secBox[i].desc;
        src = secBox[i].src;
        src2 = src + "_hover";
        price = secBox[i].price;
        type = secBox[i].type;

        txt = `
            <div class="sec_inr">
                <input type="hidden" class="itemId" value="${id}">
                <div class="front">
                    <img src="img/${src}.jpg">
                </div>
                <div class="like_icon">
                    <i class="far fa-heart"></i>
                </div>
                <div class="back">
                    <div class="wrapper">
                        <div class="slide">
                            <img src="img/${src2}.jpg">
                        </div>
                    </div>
                    <div class="like_icon">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="sec_inr_name">
                        ${name}
                    </div>
                    <div class="sec_inr_price">
                        ${price}
                    </div>
                    <div class="sec_inr_desc">
                        ${desc}
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
        `;
        html = html + txt;
    }
    $('.sec_box').html(html);

    $(document).on('click', '.wrapper', function(){
        var itemId = $(this).parent().siblings('.itemId')[0].value;
        window.location = "woman_wear_look.html?itemId=" + itemId;
    });
});