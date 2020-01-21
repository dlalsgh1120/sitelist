$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 파우치", desc:"쇼핑하기",price: '￦1,360,000', src:"GG_M_wallet_img01",type: false},
        {id: 2, name: "Disney x Gucci 지퍼 달린 지갑 ", desc:"쇼핑하기",price: '￦1,020,000', src:"GG_M_wallet_img02", type: false},
        {id: 3, name: "Disney x Gucci 지갑", desc:"쇼핑하기", price: '￦680,000',src:"GG_M_wallet_img03", type: false},
        {id: 4, name: "[네오 빈티지] 카드 케이스", desc:"쇼핑하기", price: '￦390,000',src:"GG_M_wallet_img04", type: false},
        {id: 5, name: "[네오 빈티지] GG 수프림 지갑", desc:"쇼핑하기", price: '￦650,000',src:"GG_M_wallet_img05", type: true},
        {id: 6, name: "[네오 빈티지] GG 수프림 파우치", desc:"쇼핑하기", price: '￦1,110,000', src:"GG_M_wallet_img06", type: false},
        {id: 7, name: "[오피디아] GG 파우치 ", desc:"쇼핑하기",  price: '￦1,220,000',src:"GG_M_wallet_img07",type: false},
        {id: 8, name: "[오피디아] GG 화장품 케이스", desc:"쇼핑하기", price: '￦990,000', src:"GG_M_wallet_img08", type: false},
        {id: 9, name: "[오피디아] GG 지갑 ", desc:"쇼핑하기", price: '￦640,000',src:"GG_M_wallet_img09", type: false},
        {id: 10, name: "[오피디아] GG 여권 케이스", desc:"쇼핑하기",  price: '￦640,000',src:"GG_M_wallet_img010", type: true},
        {id: 11, name: "[오피디아] GG 카드 케이스", desc:"쇼핑하기",  price: '￦380,000',src:"GG_M_wallet_img011", type: false},
        {id: 12, name: "[오피디아] GG 지퍼 달린 카드 케이스", desc:"쇼핑하기",  price: '￦580,000',src:"GG_M_wallet_img012", type: false},
        {id: 13, name: "[GG 마몽] 가죽 지갑", desc:"쇼핑하기",  price: '￦550,000',src:"GG_M_wallet_img013", type: false},
        {id: 14, name: "[GG 마몽] 가죽 지갑", desc:"쇼핑하기",  price: '￦550,000',src:"GG_M_wallet_img014", type: false},
        {id: 15, name: "[GG 마몽] 가죽 카드 케이스", desc:"쇼핑하기",  price: '￦500,000',src:"GG_M_wallet_img015", type: false},
        {id: 16, name: "[GG 마몽] ID 장지갑", desc:"쇼핑하기",  price: '￦690,000',src:"GG_M_wallet_img016", type: false},
        {id: 17, name: "[GG 마몽] 가죽 파우치", desc:"쇼핑하기",  price: '￦1,050,000',src:"GG_M_wallet_img017", type: false},
        {id: 18, name: "G 장식의 파우치", desc:"쇼핑하기",  price: '￦1,210,000',src:"GG_M_wallet_img018", type: false},
        {id: 19, name: "G 장식의 지갑", desc:"쇼핑하기",  price: '￦600,000',src:"GG_M_wallet_img019", type: false},
        {id: 20, name: "G 장식의 카드 케이스", desc:"쇼핑하기",  price: '￦390,000',src:"GG_M_wallet_img020", type: false}
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

        // typeBox = 'Wearbox1';
        // if(type === true){
        //     typeBox = 'WearboxWearbox1';
        // }

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