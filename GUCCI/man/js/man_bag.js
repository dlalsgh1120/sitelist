$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 미디엄 백팩", desc:"쇼핑하기",price: '￦2,900,000', src:"GG_M_bag_img01",type: false},
        {id: 2, name: "Disney x Gucci 미디엄 토트백", desc:"쇼핑하기",price: '￦2,280,000', src:"GG_M_bag_img02", type: false},
        {id: 3, name: "Disney x Gucci 미디엄 캐리온 더플 백", desc:"쇼핑하기", price: '￦3,100,000',src:"GG_M_bag_img03", type: false},
        {id: 4, name: "Disney x Gucci 스몰 백팩", desc:"쇼핑하기", price: '￦2,140,000',src:"GG_M_bag_img04", type: false},
        {id: 5, name: "[오피디아] 미디엄 사이즈 GG 백팩", desc:"쇼핑하기", price: '￦2,430,000',src:"GG_M_bag_img05", type: true},
        {id: 6, name: "[오피디아] 미디엄 사이즈 GG 백팩", desc:"쇼핑하기", price: '￦2,430,000', src:"GG_M_bag_img06", type: false},
        {id: 7, name: "[오피디아] GG 스몰 메신저 백", desc:"쇼핑하기",  price: '￦1,280,000',src:"GG_M_bag_img07",type: false},
        {id: 8, name: "[오피디아] GG 파우치 ", desc:"쇼핑하기", price: '￦1,220,000', src:"GG_M_bag_img08", type: false},
        {id: 9, name: "[오피디아] GG 서류 가방 ", desc:"쇼핑하기", price: '￦2,470,000',src:"GG_M_bag_img09", type: false},
        {id: 10, name: "[GG 블랙] 수프림 메신저 백", desc:"쇼핑하기",  price: '￦1,060,000',src:"GG_M_bag_img010", type: true},
        {id: 11, name: "[GG 블랙] 수프림 메신저 백", desc:"쇼핑하기",  price: '￦1,060,000',src:"GG_M_bag_img011", type: false},
        {id: 12, name: "[GG 블랙] 수프림 벨트 백", desc:"쇼핑하기",  price: '￦1,030,000',src:"GG_M_bag_img012", type: false},
        {id: 13, name: "[GG 블랙] 소프트 GG 수프림 토트백", desc:"쇼핑하기",  price: '￦1,600,000',src:"GG_M_bag_img013", type: false},
        {id: 14, name: "[GG 블랙] 소프트 GG 수프림 타이거 토트백", desc:"쇼핑하기",  price: '￦1,620,000',src:"GG_M_bag_img014", type: false}
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
        src3 = src2 + "02";
        src4 = src2 + "03";
        price = secBox[i].price;
        type = secBox[i].type;

        backBox = '';

        if(type === true){
            typeBox = 'Wearbox2';
        }
        else{
            typeBox = 'Wearbox1';
            backBox = `
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
            `;
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
                ${backBox}
            </div>
        `;
        html = html + txt;
    }
    $('.sec_box').html(html);

    $(document).on('click', '.wrapper', function(){
        var itemId = $(this).parent().siblings('.itemId')[0].value;
        window.location = "woman_wear_look.html?itemId=" + itemId;
    });

    $(document).on('mouseover', '.Wearbox1', function(){
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