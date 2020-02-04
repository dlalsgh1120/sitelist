$(document).ready(function(){
    var secBox = [
        {id: 1, name: "[GG 마몽] Disney x Gucci GG 마몽 카드 케이스 지갑", desc:"쇼핑하기",price: '￦640,000', src:"woman_wallet_img01",type: false},
        {id: 2, name: "[GG 마몽] Disney x Gucci GG 마몽 지퍼 달린 지갑", desc:"쇼핑하기",price: '￦1,110,000', src:"woman_wallet_img02", type: false},
        {id: 3, name: "Disney x Gucci 지퍼 달린 지갑 ", desc:"쇼핑하기", price: '￦1,020,000',src:"woman_wallet_img03", type: false},
        {id: 4, name: "Disney x Gucci 파우치", desc:"쇼핑하기", price: '￦1,360,000',src:"woman_wallet_img04", type: false},
        {id: 5, name: "Disney x Gucci 카드 케이스 지갑", desc:"쇼핑하기", price: '￦640,000',src:"woman_wallet_img05", type: false},
        {id: 6, name: "Disney x Gucci 카드 케이스", desc:"쇼핑하기", price: '￦390,000', src:"woman_wallet_img06", type: false},
        {id: 7, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦640,000',src:"woman_wallet_img07",type: false},
        {id: 8, name: "[GG 마몽] 지퍼 달린 지갑", desc:"쇼핑하기", price: '￦1,100,000', src:"woman_wallet_img08", type: false},
        {id: 9, name: "[GG 마몽] 장지갑", desc:"쇼핑하기", price: '￦1,030,000',src:"woman_wallet_img09", type: false},
        {id: 10, name: "[GG 마몽] 장지갑", desc:"쇼핑하기",  price: '￦1,030,000',src:"woman_wallet_img010", type: false},
        {id: 11, name: "[GG 마몽] 장지갑", desc:"쇼핑하기",  price: '￦1,030,000',src:"woman_wallet_img011", type: false},
        {id: 12, name: "[GG 마몽] 장지갑", desc:"쇼핑하기",  price: '￦1,030,000',src:"woman_wallet_img012", type: false},
        {id: 13, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦550,000',src:"woman_wallet_img013", type: false},
        {id: 14, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦550,000',src:"woman_wallet_img014", type: false},
        {id: 15, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦550,000',src:"woman_wallet_img015", type: false},
        {id: 16, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦340,000',src:"woman_wallet_img016", type: false},
        {id: 17, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦340,000',src:"woman_wallet_img017", type: false},
        {id: 18, name: "[오피디아] GG 카드 케이스", desc:"쇼핑하기",  price: '￦390,000',src:"woman_wallet_img018", type: false},
        {id: 19, name: "오피디아 GG 프렌치 플랩 지갑", desc:"쇼핑하기",  price: '￦860,000',src:"woman_wallet_img019", type: false},
        {id: 20, name: "[오피디아] GG 카드 케이스 지갑", desc:"쇼핑하기",  price: '￦820,000',src:"woman_wallet_img020", type: false},

        {id: 21, name: "[오피디아] 온라인 단독 오피디아 GG 플로라 카드 케이스", desc:"쇼핑하기",price: '￦390,000', src:"woman_wallet_img021",type: false},
        {id: 22, name: "[오피디아] GG 여권 케이스", desc:"쇼핑하기",price: '￦550,000', src:"woman_wallet_img022", type: false},
        {id: 23, name: "[오피디아] GG 수프림 파우치", desc:"쇼핑하기", price: '￦870,000',src:"woman_wallet_img023", type: false},
        {id: 24, name: "[오피디아] GG 플로라 파우치", desc:"쇼핑하기", price: '￦930,000',src:"woman_wallet_img024", type: false},
        {id: 25, name: "[오피디아] GG 화장품 케이스", desc:"쇼핑하기", price: '￦990,000',src:"woman_wallet_img025", type: false},
        {id: 26, name: "[오피디아] GG 수프림 벨트 아이폰 케이스", desc:"쇼핑하기", price: '￦1,030,000', src:"woman_wallet_img026", type: false},
        {id: 27, name: "[오피디아] GG 체인 지갑", desc:"쇼핑하기",  price: '￦1,220,000',src:"woman_wallet_img027",type: false},
        {id: 28, name: "[오피디아] GG 화장품 케이스", desc:"쇼핑하기", price: '￦510,000', src:"woman_wallet_img028", type: false},
        {id: 29, name: "[오피디아] GG 플로라 화장품 케이스", desc:"쇼핑하기", price: '￦530,000',src:"woman_wallet_img029", type: false},
        {id: 30, name: "[오피디아] GG 화장품 케이스", desc:"쇼핑하기",  price: '￦540,000',src:"woman_wallet_img030", type: false},
        {id: 31, name: "[오피디아] 온라인 단독 오피디아 GG 플로라 아이폰 X/XS 케이스", desc:"쇼핑하기",  price: '￦470,000',src:"woman_wallet_img031", type: false},
        {id: 32, name: "[오피디아] 카드 케이스 지갑", desc:"쇼핑하기",  price: '￦960,000',src:"woman_wallet_img032", type: false},
        {id: 33, name: "[오피디아] 프렌치 플랩 지갑", desc:"쇼핑하기",  price: '￦950,000',src:"woman_wallet_img033", type: false},
        {id: 34, name: "[오피디아] 카드 케이스", desc:"쇼핑하기",  price: '￦410,000',src:"woman_wallet_img034", type: false},
        {id: 35, name: "[오피디아] 카드 케이스", desc:"쇼핑하기",  price: '￦410,000',src:"woman_wallet_img035", type: false},
        {id: 36, name: "[오피디아] 카드 케이스", desc:"쇼핑하기",  price: '￦670,000',src:"woman_wallet_img036", type: false},
        {id: 37, name: "[오피디아] 카드 케이스", desc:"쇼핑하기",  price: '￦670,000',src:"woman_wallet_img037", type: false},
        {id: 38, name: "[오피디아] 지퍼 달린 지갑", desc:"쇼핑하기",  price: '￦1,020,000',src:"woman_wallet_img038", type: false},
        {id: 39, name: "[오피디아] 지퍼 달린 지갑", desc:"쇼핑하기",  price: '￦1,020,000',src:"woman_wallet_img039", type: false},
        {id: 40, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦340,000',src:"woman_wallet_img040", type: false},
        {id: 41, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",price: '￦460,000', src:"woman_wallet_img041",type: false},
        {id: 42, name: "[GG 마몽] 가죽 지갑", desc:"쇼핑하기",price: '￦730,000', src:"woman_wallet_img042", type: false},
        {id: 43, name: "[GG 마몽] 가죽 지갑", desc:"쇼핑하기", price: '￦730,000',src:"woman_wallet_img043", type: false},
        {id: 44, name: "[오피디아] GG 플로라 줄자 키체인", desc:"쇼핑하기", price: '￦390,000',src:"woman_wallet_img044", type: false},
        {id: 45, name: "[GG 마몽] 손목지갑", desc:"쇼핑하기", price: '￦940,000',src:"woman_wallet_img045", type: false},
        {id: 46, name: "[GG 마몽] 가죽 파우치", desc:"쇼핑하기", price: '￦1,170,000', src:"woman_wallet_img046", type: false},
        {id: 47, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기",  price: '￦460,000',src:"woman_wallet_img047",type: false},
        {id: 48, name: "[GG 마몽] 카드 케이스", desc:"쇼핑하기", price: '￦460,000', src:"woman_wallet_img048", type: false},
        {id: 49, name: "체리 장식의 GG 수프림 미니 체인백", desc:"쇼핑하기", price: '￦1,030,000',src:"woman_wallet_img049", type: false},
        {id: 50, name: "체리 장식의 GG 수프림 카드 케이스", desc:"쇼핑하기",  price: '￦610,000',src:"woman_wallet_img050", type: false},
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
    var index = 0;
    var windowHeight = $(window).height();
    var footHeight = $('footer').height();
    var length_scroll = secBox.length;
    var end;

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


        var scroll_top = $(window).scrollTop();
        var documentHeight = $(document).height()-footHeight;
        var scrollHeight = scroll_top + windowHeight;
        
        if(scrollHeight > documentHeight){
              addItem(index, 20);
        }
    });

  addItem(index, 20);
  function addItem(start, _add){
      html = "";
      end = start + 20;
      if(end > length_scroll){
          end = length_scroll;
      }
      for(var i = start; i < end; i++){
            index++;
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
    
            if(type){
                typeBox = 'Wearbox2';
            }
            else{
                typeBox = "Wearbox1";
                backBox = 
                `<div class="back">
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
                </div>`;
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
      $('.sec_box').append(html);
    }
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