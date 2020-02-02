$(document).ready(function(){
    var secBox = [
        {id: 1, name: "로즈 프린트 하트 박스", desc:"쇼핑하기",price: '￦840,000', src:"deco_nav_img01",type: false},
        {id: 2, name: "스타 아이 프린트 하트 박스", desc:"쇼핑하기",price: '￦680,000', src:"deco_nav_img02", type: false},
        {id: 3, name: "스타 아이 머그잔", desc:"쇼핑하기", price: '￦440,000',src:"deco_nav_img03", type: false},
        {id: 4, name: "로즈 머그잔", desc:"쇼핑하기", price: '￦520,000',src:"deco_nav_img04", type: false},
        {id: 5, name: "스타 아이 프린트 핸드 트레이", desc:"쇼핑하기", price: '￦520,000',src:"deco_nav_img05", type: true},
        {id: 6, name: "스타 프린트 플라워 박스", desc:"쇼핑하기", price: '￦820,000', src:"deco_nav_img06", type: false},
        {id: 7, name: "로즈 프린트 애쉬트레이", desc:"쇼핑하기",  price: '￦380,000',src:"deco_nav_img07",type: false},
        {id: 8, name: "스타 아이 프린트 애쉬트레이", desc:"쇼핑하기", price: '￦320,000', src:"deco_nav_img08", type: false},
        {id: 9, name: "미스틱 캣 프린트 애쉬트레이", desc:"쇼핑하기", price: '￦320,000',src:"deco_nav_img09", type: false},
        {id: 10, name: "라이언 스퀘어 장신구 트레이", desc:"쇼핑하기",  price: '￦420,000',src:"deco_nav_img010", type: true},
        {id: 11, name: "에쏘테리컴, XL 퓨마 캔들", desc:"쇼핑하기",  price: '￦880,000',src:"deco_nav_img011", type: false},
        {id: 12, name: "프리지아, XL", desc:"쇼핑하기",  price: '￦730,000',src:"deco_nav_img012", type: false},
        {id: 13, name: "[브로쉐] 핸드와 링 머그잔", desc:"쇼핑하기",  price: '￦470,000',src:"deco_nav_img013", type: false},
        {id: 14, name: "퓨마 핸드와 링 머그잔", desc:"쇼핑하기",  price: '￦400,000',src:"deco_nav_img014", type: false},
        {id: 15, name: "urtica ferox 핸드와 링 머그잔", desc:"쇼핑하기",  price: '￦470,000',src:"deco_nav_img015", type: false},
        {id: 16, name: "urtica ferox 핸드와 링 머그잔", desc:"쇼핑하기",  price: '￦470,000',src:"deco_nav_img016", type: false},
        {id: 17, name: "허베리움 나비 머그잔", desc:"쇼핑하기",  price: '￦470,000',src:"deco_nav_img017", type: false},
        {id: 18, name: "허베리움 벌 모양 머그잔", desc:"쇼핑하기",  price: '￦400,000',src:"deco_nav_img018", type: false},
        {id: 19, name: "인벤텀, 미디엄 브로쉐 캔들", desc:"쇼핑하기",  price: '￦580,000',src:"deco_nav_img019", type: false},
        {id: 20, name: "퓨머스, 미디엄 카메오 캔들", desc:"쇼핑하기",  price: '￦430,000',src:"deco_nav_img020", type: false}
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
    document.getElementById('n_span07').onclick = function(){
        window.location.href = "../decoration/deco_nav.html";
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