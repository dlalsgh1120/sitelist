$(document).ready(function(){
    var secBox = [
        {id: 1, name: "플로라 디테일의 메탈 반지", desc:"쇼핑하기",price: '￦410,000', src:"woman_acc_img01",type: false},
        {id: 2, name: "플로라 디테일의 메탈 팔찌 ", desc:"쇼핑하기",price: '￦580,000', src:"woman_acc_img02", type: false},
        {id: 3, name: "플로라 디테일의 메탈 귀걸이 ", desc:"쇼핑하기", price: '￦490,000',src:"woman_acc_img03", type: false},
        {id: 4, name: "플로라 디테일의 비즈 팔찌 ", desc:"쇼핑하기", price: '￦640,000',src:"woman_acc_img04", type: false},
        {id: 5, name: "플로라 디테일의 비즈 목걸이 ", desc:"쇼핑하기", price: '￦1,240,000',src:"woman_acc_img05", type: true},
        {id: 6, name: "플로라 디테일의 메탈 목걸이 ", desc:"쇼핑하기", price: '￦910,000', src:"woman_acc_img06", type: false},
        {id: 7, name: "인터로킹 G 펄과 크리스털 귀걸이 ", desc:"쇼핑하기",  price: '￦1,150,000',src:"woman_acc_img07",type: false},
        {id: 8, name: "인터로킹 G 진주 귀걸이", desc:"쇼핑하기", price: '￦600,000', src:"woman_acc_img08", type: false},
        {id: 9, name: "스트로베리 잠금장치가 달린 진주 목걸이", desc:"쇼핑하기", price: '￦2,950,000',src:"woman_acc_img09", type: false},
        {id: 10, name: "인터로킹 G 진주 목걸이", desc:"쇼핑하기",  price: '￦680,000',src:"woman_acc_img010", type: true},
        {id: 11, name: "크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦810,000',src:"woman_acc_img011", type: false},
        {id: 12, name: "크리스털 더블 G 반지", desc:"쇼핑하기",  price: '￦580,000',src:"woman_acc_img012", type: false},
        {id: 13, name: "싱글 크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦490,000',src:"woman_acc_img013", type: false},
        {id: 14, name: "크리스털 더블 G 팔찌", desc:"쇼핑하기",  price: '￦690,000',src:"woman_acc_img014", type: false},
        {id: 15, name: "크리스털 더블 G 목걸이", desc:"쇼핑하기",  price: '￦750,000',src:"woman_acc_img015", type: false},
        {id: 16, name: "더블 G 디테일의 라이언 헤드 귀걸이", desc:"쇼핑하기",  price: '￦910,000',src:"woman_acc_img016", type: false},
        {id: 17, name: "더블 G 디테일의 라이언 헤드 팔찌", desc:"쇼핑하기",  price: '￦1,240,000',src:"woman_acc_img017", type: false},
        {id: 18, name: "더블 G 디테일의 라이언 헤드 싱글 귀걸이", desc:"쇼핑하기",  price: '￦670,000',src:"woman_acc_img018", type: false},
        {id: 19, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img019", type: false},
        {id: 20, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img020", type: false},
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,src3,src4,type, price;
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