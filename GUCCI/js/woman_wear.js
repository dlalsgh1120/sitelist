$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 실크 셔츠", desc:"쇼핑하기",price: '￦2,000,000', src:"woman_nav_img01.jpg", src2:"woman_nav_img01_hover.jpg", type: false},
        {id: 2, name: "Disney x Gucci 실크 파자마 팬츠", desc:"쇼핑하기",price: '￦2,000,000', src:"woman_nav_img02.jpg", src2:"woman_nav_img02_hover.jpg", type: false},
        {id: 3, name: "울 실크 팬츠", desc:"쇼핑하기", price: '￦2,000,000',src:"woman_nav_img03.jpg", src2:"woman_nav_img03_hover.jpg", type: false},
        {id: 4, name: "캐디 울 실크 숏 드레스", desc:"쇼핑하기", price: '￦2,000,000',src:"woman_nav_img04.jpg", src2:"woman_nav_img04_hover.jpg", type: false},
        {id: 5, src:"woman_nav_img05.jpg", src2:"woman_nav_img05.jpg", type: true},
        {id: 6, name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦2,000,000', src:"woman_nav_img06.jpg", src2:"woman_nav_img06_hover.jpg", type: false},
        {id: 7, name: "홀스슈 디테일의 트위드 스커트", desc:"쇼핑하기",  price: '￦2,000,000',src:"woman_nav_img07.jpg", src2:"woman_nav_img07_hover.jpg"},
        {id: 8, name: "라이언 헤드 토글 디테일의 트위드 재킷", desc:"쇼핑하기", price: '￦2,000,000', src:"woman_nav_img08.jpg", src2:"woman_nav_img08_hover.jpg", type: false},
        {id: 9, name: "Disney x Gucci 저지 드레스", desc:"쇼핑하기", price: '￦2,000,000',src:"woman_nav_img09.jpg", src2:"woman_nav_img09_hover.jpg", type: false},
        {id: 10, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,000,000',src:"woman_nav_img010.jpg", src2:"woman_nav_img010.jpg", type: true},
        {id: 11, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,000,000',src:"woman_nav_img010.jpg", src2:"what_nav_look010_hover.jpg", type: false}
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2, type, price;
    var html = "";
    var text= "";
    var className = "";
    // var index = 0;
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
        price = secBox[i].price;
        type = secBox[i].type;

        typeBox = 'box1';
        if(type === true){
            typeBox = 'box2';
        }

        txt = `
            <div class="sec_inr ${typeBox}">
                <input type="hidden" value="${id}">
                <div class="front">
                    <img src="img/${src}">
                </div>
                <div class="back">
                    <img src="img/${src2}">
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
});