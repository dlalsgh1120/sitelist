$(document).ready(function(){
    var secBox = [
        {id: 1, name: "그립 시계, 38mm", desc:"쇼핑하기",price: '￦2,338,000', src:"woman_watch_img01",type: false},
        {id: 2, name: "그립 시계, 35mm", desc:"쇼핑하기",price: '￦2,208,000', src:"woman_watch_img02", type: false},
        {id: 3, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,338,000',src:"woman_watch_img03", type: false},
        {id: 4, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,058,000',src:"woman_watch_img04", type: false},
        {id: 5, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,508,000',src:"woman_watch_img05", type: true},
        {id: 6, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,338,000', src:"woman_watch_img06", type: false},
        {id: 7, name: "그립 시계, 38mm", desc:"쇼핑하기",  price: '￦2,508,000',src:"woman_watch_img07",type: false},
        {id: 8, name: "그립 시계, 38mm", desc:"쇼핑하기", price: '￦2,208,000', src:"woman_watch_img08", type: false},
        {id: 9, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기", price: '￦1,548,000',src:"woman_watch_img09", type: false},
        {id: 10, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img010", type: true},
        {id: 11, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img011", type: false},
        {id: 12, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img012", type: false},
        {id: 13, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img013", type: false},
        {id: 14, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img014", type: false},
        {id: 15, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img015", type: false},
        {id: 16, name: "[G-Timeless] 시계, 27mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img016", type: false},
        {id: 17, name: "[G-타임리스] 27mm 시계", desc:"쇼핑하기",  price: '￦1,278,000',src:"woman_watch_img017", type: false},
        {id: 18, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦2,508,000',src:"woman_watch_img018", type: false},
        {id: 19, name: "[G-타임리스] 시계, 42mm", desc:"쇼핑하기",  price: '￦2,838,000',src:"woman_watch_img019", type: false},
        {id: 20, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,278,000',src:"woman_watch_img020", type: false}
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