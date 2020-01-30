$(document).ready(function(){
    var secBox = [
        {id: 1, name: "[GG 마몽] 더블 G 디테일의 실버 반지", desc:"쇼핑하기",price: '￦440,000', src:"acc_sliver_img01",type: false},
        {id: 2, name: "[GG 마몽] 더블 G 디테일의 실버 반지", desc:"쇼핑하기",price: '￦390,000', src:"acc_sliver_img02", type: false},
        {id: 3, name: "[GG 마몽] 더블 G 디테일의 실버 팔찌", desc:"쇼핑하기", price: '￦610,000',src:"acc_sliver_img03", type: false},
        {id: 4, name: "[GG 마몽] 더블 G 플라워 팔찌", desc:"쇼핑하기", price: '￦1,090,000',src:"acc_sliver_img04", type: false},
        {id: 5, name: "인터로킹 G 디테일의 실버 팔찌", desc:"쇼핑하기", price: '￦410,000',src:"acc_sliver_img05", type: true},
        {id: 6, name: "인터로킹 G 실버 반지", desc:"쇼핑하기", price: '￦530,000', src:"acc_sliver_img06", type: false},
        {id: 7, name: "인터로킹 G 실버 체인 팔찌", desc:"쇼핑하기",  price: '￦700,000',src:"acc_sliver_img07",type: false},
        {id: 8, name: "인터로킹 G 디테일의 실버 목걸이", desc:"쇼핑하기", price: '￦590,000', src:"acc_sliver_img08", type: false},
        {id: 9, name: "인터로킹 G 실버 반지", desc:"쇼핑하기", price: '￦420,000',src:"acc_sliver_img09", type: false},
        {id: 10, name: "인터로킹 G 실버 팔찌", desc:"쇼핑하기",  price: '￦420,000',src:"acc_sliver_img010", type: true},
        {id: 11, name: "인터로킹 G 실버 팔찌", desc:"쇼핑하기",  price: '￦420,000',src:"acc_sliver_img011", type: false},
        {id: 12, name: "인터로킹 G 실버 커프링크스", desc:"쇼핑하기",  price: '￦430,000',src:"acc_sliver_img012", type: false},
        {id: 13, name: "인터로킹 G 실버 타이 바", desc:"쇼핑하기",  price: '￦330,000',src:"acc_sliver_img013", type: false},
        {id: 14, name: "인터로킹 G 실버 반지", desc:"쇼핑하기",  price: '￦380,000',src:"acc_sliver_img014", type: false},
        {id: 15, name: "인터로킹 G 실버 귀걸이", desc:"쇼핑하기",  price: '￦360,000',src:"acc_sliver_img015", type: false},
        {id: 16, name: "인터로킹 G 실버 목걸이", desc:"쇼핑하기",  price: '￦450,000',src:"acc_sliver_img016", type: false},
        {id: 17, name: "인터로킹 G 실버 목걸이", desc:"쇼핑하기",  price: '￦470,000',src:"acc_sliver_img017", type: false},
        {id: 18, name: "실버 인터로킹 G 귀걸이", desc:"쇼핑하기",  price: '￦230,000',src:"acc_sliver_img018", type: false},
        {id: 19, name: "인터로킹 G 실버 귀걸이", desc:"쇼핑하기",  price: '￦300,000',src:"acc_sliver_img019", type: false},
        {id: 20, name: "인터로킹 G 펜던트 목걸이", desc:"쇼핑하기",  price: '￦290,000',src:"acc_sliver_img020", type: false},
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,type, price;
    var html = "";
    var text= "";

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
                    <img src="img/${src}.jpg" class="">
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