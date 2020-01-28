$(document).ready(function(){
    var secBox = [
        {id: 1, name: "[롸이톤] 남성용 Disney x Gucci 롸이톤 스니커즈", desc:"쇼핑하기",price: '￦1,210,000', src:"GG_M_watch_img01",type: false},
        {id: 2, name: "[롸이톤] 남성용 롸이톤 구찌 월드와이드 스니커즈", desc:"쇼핑하기",price: '￦1,210,000', src:"GG_M_watch_img02", type: false},
        {id: 3, name: "[롸이톤] 구찌 로고 롸이톤 가죽 스니커즈", desc:"쇼핑하기", price: '￦1,100,000',src:"GG_M_watch_img03", type: false},
        {id: 4, name: "[롸이톤] 남성용 입 모양 프린트 스니커즈", desc:"쇼핑하기", price: '￦1,240,000',src:"GG_M_watch_img04", type: false},
        {id: 5, name: "[에이스] 남성용 GG Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기", price: '￦920,000',src:"GG_M_watch_img05", type: true},
        {id: 6, name: "[에이스] 남성용 GG Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기", price: '￦920,000', src:"GG_M_watch_img06", type: false},
        {id: 7, name: "[에이스] 남성용 Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기",  price: '￦1,090,000',src:"GG_M_watch_img07",type: false},
        {id: 8, name: "구찌 테니스 장식의 남성용 에이스 스니커즈", desc:"쇼핑하기", price: '￦780,000', src:"GG_M_watch_img08", type: false},
        {id: 9, name: "구찌 밴드 장식의 남성용 에이스 스니커즈", desc:"쇼핑하기", price: '￦920,000',src:"GG_M_watch_img09", type: false},
        {id: 10, name: "[울트라페이스] 남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img010", type: true},
        {id: 11, name: "[울트라페이스] 남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img011", type: false},
        {id: 12, name: "[울트라페이스] 남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img012", type: false},
        {id: 13, name: "[울트라페이스] 남성용 울트라페이스 미드탑 스니커즈", desc:"쇼핑하기",  price: '￦1,290,000',src:"GG_M_watch_img013", type: false},
        {id: 14, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img014", type: false},
        {id: 15, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img015", type: false},
        {id: 16, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img016", type: false},
        {id: 17, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img017", type: false},
        {id: 18, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img018", type: false},
        {id: 19, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img019", type: false},
        {id: 20, name: "남성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_watch_img020", type: false}
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
        src3 = src2 + "02";
        src4 = src2 + "03";
        price = secBox[i].price;
        type = secBox[i].type;

        txt = `
            <div class="sec_inr">
                <input type="hidden" class="itemId" value="${id}">
                <div class="front">
                    <img src="img/${src}.jpg"">
                </div>
                <div class="like_icon">
                    <i class="far fa-heart"></i>
                </div>
                <div class="back">
                    <div class="wrapper">
                        <div class="slide">
                            <img src="img/${src2}.jpg">
                        </div>
                        <div class="slide">
                            <img src="img/${src3}.jpg">
                        </div>
                        <div class="slide">
                            <img src="img/${src4}.jpg">
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