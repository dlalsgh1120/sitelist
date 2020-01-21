$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기",price: '￦1,780,000', src:"GG_M_wear_img01",type: false},
        {id: 2, name: "Disney x Gucci 울 가디건", desc:"쇼핑하기",price: '￦2,340,000', src:"GG_M_wear_img02", type: false},
        {id: 3, name: "뱀 디테일의 옥스포드 듀크  셔츠", desc:"쇼핑하기", price: '￦790,000',src:"GG_M_wear_img03", type: false},
        {id: 4, name: "마블 워시드 데님 팬츠", desc:"쇼핑하기", price: '￦1,250,000',src:"GG_M_wear_img04", type: false},
        {id: 5,name: "Disney x Gucci 오버사이즈 볼링 셔츠", desc:"쇼핑하기", price: '￦1,100,000',src:"GG_M_wear_img05", type: true},
        {id: 6, name: "Disney x Gucci 오버사이즈 볼링 셔츠", desc:"쇼핑하기", price: '￦1,100,000', src:"GG_M_wear_img06", type: false},
        {id: 7, name: "Disney x Gucci 린넨 쇼츠", desc:"쇼핑하기",  price: '￦1,450,000',src:"GG_M_wear_img07",type: false},
        {id: 8, name: "Disney x Gucci 후드 스웨트셔츠", desc:"쇼핑하기", price: '￦1,700,000', src:"GG_M_wear_img08", type: false},
        {id: 9, name: "Disney x Gucci 오버사이즈 티셔츠", desc:"쇼핑하기", price: '￦850,000',src:"GG_M_wear_img09", type: false},
        {id: 10, name: "구찌 밴드 프린트 후드 스웨트셔츠", desc:"쇼핑하기",  price: '￦1,700,000',src:"GG_M_wear_img010", type: true},
        {id: 11, name: "구찌 밴드 프린트 후드 스웨트셔츠", desc:"쇼핑하기",  price: '￦1,700,000',src:"GG_M_wear_img011", type: false},
        {id: 12, name: "자수 테이퍼드 데님 팬츠", desc:"쇼핑하기",  price: '￦1,180,000',src:"GG_M_wear_img012", type: false},
        {id: 13, name: "구찌 밴드 오버사이즈 프린트 티셔츠", desc:"쇼핑하기",  price: '￦810,000',src:"GG_M_wear_img013", type: false},
        {id: 14, name: "구찌 밴드 프린트 오버사이즈 티셔츠", desc:"쇼핑하기",  price: '￦810,000',src:"GG_M_wear_img014", type: false}
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,src3,src4,type, price;
    var html = "";
    var text= "";
    var typeBox = "";
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

        typeBox = 'Wearbox1';
        if(type === true){
            typeBox = 'Wearbox2';
        }

        txt = `
            <div class="sec_inr ${typeBox}">
                <input type="hidden" class="itemId" value="${id}">
                <div class="front">
                    <img src="img/${src}.jpg" class="${typeBox}">
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
        viewIndex = viewIndex % length;
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
        }, timer);
    });

    
});