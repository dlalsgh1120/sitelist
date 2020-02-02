$(document).ready(function(){
    var secBox = [
        {id: 1, name: "GG 캔버스 야구 모자", desc:"쇼핑하기",price: '￦500,000', src:"GG_M_cap_img01",type: false},
        {id: 2, name: "GG 캔버스 페도라 ", desc:"쇼핑하기",price: '￦640,000', src:"GG_M_cap_img02", type: false},
        {id: 3, name: "웹(Web) 디테일의 오리지널 GG 캔버스 야구 모자", desc:"쇼핑하기", price: '￦440,000',src:"GG_M_cap_img03", type: false},
        {id: 4, name: "웹(Web) 디테일의 오리지널 GG 캔버스 야구 모자", desc:"쇼핑하기", price: '￦440,000',src:"GG_M_cap_img04", type: false},
        {id: 5, name: "GG 타이거 야구 모자", desc:"쇼핑하기", price: '￦440,000',src:"GG_M_cap_img05", type: true},
        {id: 6, name: "뉴욕 양키스™(New York Yankees™) 야구 모자", desc:"쇼핑하기", price: '￦710,000', src:"GG_M_cap_img06", type: false},
        {id: 7, name: "뉴욕 양키스™ 야구 모자", desc:"쇼핑하기",  price: '￦710,000',src:"GG_M_cap_img07",type: false},
        {id: 8, name: "헤드 밴드 디테일의 구찌 야구 모자", desc:"쇼핑하기", price: '￦550,000', src:"GG_M_cap_img08", type: false},
        {id: 9, name: "자수 디테일의 캔버스 야구 모자", desc:"쇼핑하기", price: '￦600,000',src:"GG_M_cap_img09", type: false},
        {id: 10, name: "스네이크 프린트 GG 수프림 야구 모자", desc:"쇼핑하기",  price: '￦440,000',src:"GG_M_cap_img010", type: true},
        {id: 11, name: "킹스네이크 프린트 GG 수프림 야구 모자", desc:"쇼핑하기",  price: '￦440,000',src:"GG_M_cap_img011", type: false},
        {id: 12, name: "타이거 프린트 GG 수프림 야구 모자", desc:"쇼핑하기",  price: '￦440,000',src:"GG_M_cap_img012", type: false},
        {id: 13, name: "스네이크 스킨 GG 야구 모자", desc:"쇼핑하기",  price: '￦790,000',src:"GG_M_cap_img013", type: false},
        {id: 14, name: "스네이크 스킨 GG 페도라", desc:"쇼핑하기",  price: '￦830,000',src:"GG_M_cap_img014", type: false},
        {id: 15, name: "스네이크 스킨 GG 바이저", desc:"쇼핑하기",  price: '￦630,000',src:"GG_M_cap_img015", type: false},
        {id: 16, name: "구찌 로고 바이닐 바이저", desc:"쇼핑하기",  price: '￦450,000',src:"GG_M_cap_img016", type: false},
        {id: 17, name: "웹(Web) 바이닐 바이저", desc:"쇼핑하기",  price: '￦450,000',src:"GG_M_cap_img017", type: false},
        {id: 18, name: "리버서블 버킷 모자", desc:"쇼핑하기",  price: '￦460,000',src:"GG_M_cap_img018", type: false},
        {id: 19, name: "Disney x Gucci 야구 모자", desc:"쇼핑하기",  price: '￦480,000',src:"GG_M_cap_img019", type: false},
        {id: 20, name: "구찌 자카드 라벨의 울 모자", desc:"쇼핑하기",  price: '￦380,000',src:"GG_M_cap_img020", type: false},
        {id: 21, name: "인터로킹 G 스트라이프 장식의 울 모자", desc:"쇼핑하기",  price: '￦500,000',src:"GG_M_cap_img021", type: false},
        {id: 22, name: "GG 패턴 울 모자 ", desc:"쇼핑하기",  price: '￦380,000',src:"GG_M_cap_img022", type: false},
        {id: 23, name: "더블 G 로고의 GG 캔버스 버킷 모자", desc:"쇼핑하기",  price: '￦640,000',src:"GG_M_cap_img023", type: false},
        {id: 24, name: "GG 캔버스 야구 모자", desc:"쇼핑하기",  price: '￦500,000',src:"GG_M_cap_img024", type: false}
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