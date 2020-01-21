$(document).ready(function(){
    var secBox = [
        {id: 1, name: "GG러닝 X 다이아몬드 반지", desc:"쇼핑하기",price: '￦1,870,000', src:"acc_gold_img01",type: false},
        {id: 2, name: "GG러닝 다이아몬드 X 반지", desc:"쇼핑하기",price: '￦4,200,000', src:"acc_gold_img02", type: false},
        {id: 3, name: "GG러닝 옐로우 골드 귀걸이", desc:"쇼핑하기", price: '￦3,700,000',src:"acc_gold_img03", type: false},
        {id: 4, name: "러닝 G 다이아몬드 장식의 더블 G 커프", desc:"쇼핑하기", price: '￦2,860,000',src:"acc_gold_img04", type: false},
        {id: 5, name: "[아이콘] 별 장식의 아이콘 옐로우 골드 반지", desc:"쇼핑하기", price: '￦1,210,000',src:"acc_gold_img05", type: true},
        {id: 6, name: "[아이콘] 별 장식의 아이콘 화이트 골드 반지", desc:"쇼핑하기", price: '￦1,210,000', src:"acc_gold_img06", type: false},
        {id: 7, name: "[아이콘] 아이코닉 반지", desc:"쇼핑하기",  price: '￦1,030,000',src:"acc_gold_img07",type: false},
        {id: 8, name: "[아이콘] 아이코닉 반지", desc:"쇼핑하기", price: '￦1,030,000', src:"acc_gold_img08", type: false},
        {id: 9, name: "[아이콘] 옐로우 골드 인터로킹 G 아이콘 반지", desc:"쇼핑하기", price: '￦1,050,000',src:"acc_gold_img09", type: false},
        {id: 10, name: "[아이콘] 옐로우 골드 인터로킹 G 아이콘 반지", desc:"쇼핑하기",  price: '￦1,050,000',src:"acc_gold_img010", type: true},
        {id: 11, name: "[아이콘] 보석이 장식된 아이콘 반지", desc:"쇼핑하기",  price: '￦1,470,000',src:"acc_gold_img011", type: false},
        {id: 12, name: "[아이콘] 보석이 장식된 아이콘 반지", desc:"쇼핑하기",  price: '￦1,470,000',src:"acc_gold_img012", type: false},
        {id: 13, name: "[아이콘] 화이트 골드 아이코닉 씬 밴드", desc:"쇼핑하기",  price: '￦580,000',src:"acc_gold_img013", type: false},
        {id: 14, name: "[아이콘] 옐로우 골드 아이코닉 반지", desc:"쇼핑하기",  price: '￦580,000',src:"acc_gold_img014", type: false},
        {id: 15, name: "GG러닝 다이아몬드 귀걸이, 스몰", desc:"쇼핑하기",  price: '￦4,000,000',src:"acc_gold_img015", type: false},
        {id: 16, name: "GG러닝 다이아몬드 귀걸이", desc:"쇼핑하기",  price: '￦4,100,000',src:"acc_gold_img016", type: false},
        {id: 17, name: "GG 러닝 화이트 골드 목걸이", desc:"쇼핑하기",  price: '￦1,310,000',src:"acc_gold_img017", type: false},
        {id: 18, name: "러닝G 토파즈 장식의 더블 G 목걸이", desc:"쇼핑하기",  price: '￦1,090,000',src:"acc_gold_img018", type: false},
        {id: 19, name: "러닝 G 다이아몬드 장식의 더블 G 목걸이", desc:"쇼핑하기",  price: '￦3,700,000',src:"acc_gold_img019", type: false},
        {id: 20, name: "러닝 G 화이트 골드 GG 반지", desc:"쇼핑하기",  price: '￦940,000',src:"acc_gold_img020", type: false},
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,src3,src4,type, price;
    var html = "";
    var text= "";
    var itemIndex;
    var viewIndex;
    var timer = 500;
    var length = 3;
    var animation = false;

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
        window.location.href = "../gift_nav.html";
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
                    <img src="img/${src}.jpg">
                </div>
                <div class="like_icon">
                    <i class="far fa-heart"></i>
                </div>
                <div class="back">
                    <input type="button" value="〈" id="left_btn" class="btn">
                    <input type="button" value="〉" id="right_btn" class="btn">
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

    $(document).on('mouseover', '.sec_inr', function(){
        viewIndex = 0;
        $(this).find('.slide').css({
            left: '100%'
        });
        $(this).find('.slide').eq(0).css({
            left: 0
        });
    });

    $(document).on('click', '#right_btn', function(){
        if(animation){
            return;
        }
        animation = true;
        itemIndex = $(this).parent().parent().index();
        $('.sec_inr').eq(itemIndex).find('.slide').eq(viewIndex).animate({
            left: "-100%"
        }, timer);
        viewIndex++;
        
        viewIndex = viewIndex % length;i
        $('.sec_inr').eq(itemIndex).find('.slide').eq(viewIndex).css({
            left: "100%"
        }).animate({
           left: "0" 
        }, {
            duration: timer,
            complete:function(){
                animation = false;
            }
        });
    });
    $(document).on('click', '#left_btn', function(){
        if(animation){
            return;
        }
        animation = true;
        itemIndex = $(this).parent().parent().index();
        $('.sec_inr').eq(itemIndex).find('.slide').eq(viewIndex).animate({
            left:'100%'
        }, timer);
        viewIndex--;
        if (viewIndex < 0) {
            viewIndex = length - 1;
        }
        $('.sec_inr').eq(itemIndex).find('.slide').eq(viewIndex).css({
            left:'-100%'
        }).animate({
            left: '0%'
        }, {
            duration: timer,
            complete:function(){
                animation = false;
            }
        });
    });
    
});