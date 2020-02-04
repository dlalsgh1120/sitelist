$(document).ready(function(){
    var secBox = [
        {id: 1, name: "[롸이톤] 여성 Disney x Gucci 롸이톤 스니커즈", desc:"쇼핑하기",price: '￦1,210,000', src:"woman_shose_img01",type: false},
        {id: 2, name: "[롸이톤] 여성용 롸이톤 GG 애플 스니커즈", desc:"쇼핑하기",price: '￦1,210,000', src:"woman_shose_img02", type: false},
        {id: 3, name: "[롸이톤] 여성용 입 모양 프린트 스니커즈", desc:"쇼핑하기", price: '￦1,240,000',src:"woman_shose_img03", type: false},
        {id: 4, name: "[롸이톤] 여성용 구찌 로고 가죽 스니커즈", desc:"쇼핑하기", price: '￦1,100,000',src:"woman_shose_img04", type: false},
        {id: 5, name: "[에이스] 여성 Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기", price: '￦1,090,000',src:"woman_shose_img05", type: true},
        {id: 6, name: "[에이스] 여성 Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기", price: '￦1,090,000', src:"woman_shose_img06", type: false},
        {id: 7, name: "[에이스] 여성 GG Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기",  price: '￦920,000',src:"woman_shose_img07",type: false},
        {id: 8, name: "[에이스] 온라인 단독 에이스 GG 플로라 프린트 스니커즈", desc:"쇼핑하기", price: '￦860,000', src:"woman_shose_img08", type: false},
        {id: 9, name: "[에이스] GG 플로라 스니커즈", desc:"쇼핑하기", price: '￦2,140,000',src:"woman_shose_img09", type: false},
        {id: 10, name: "[울트라페이스] 여성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"woman_shose_img010", type: true},
        {id: 11, name: "[에이스] 구찌 테니스 장식의 여성용 에이스 스니커즈", desc:"쇼핑하기",  price: '￦780,000',src:"woman_shose_img011", type: false},
        {id: 12, name: "[에이스] 인터로킹 G 디테일의 여성용 에이스 스니커즈", desc:"쇼핑하기",  price: '￦750,000',src:"woman_shose_img012", type: false},
        {id: 13, name: "[울트라페이스] 여성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"woman_shose_img013", type: false},
        {id: 14, name: "[울트라페이스] 여성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"woman_shose_img014", type: false},
        {id: 15, name: "[울트라페이스] 여성용 미드탑 스니커즈", desc:"쇼핑하기",price: '￦1,170,000', src:"woman_shose_img015",type: false},
        {id: 16, name: "[울트라페이스] 여성용 울트라페이스 스니커즈", desc:"쇼핑하기",price: '￦1,080,000', src:"woman_shose_img016", type: false},
        {id: 17, name: "[울트라페이스] 여성용 스니커즈", desc:"쇼핑하기", price: '￦1,180,000',src:"woman_shose_img017", type: false},
        {id: 18, name: "[울트라페이스] 여성용 스니커즈", desc:"쇼핑하기", price: '￦1,180,000',src:"woman_shose_img018", type: false},
        {id: 19, name: "[울트라페이스] 여성용 미드탑 스니커즈", desc:"쇼핑하기", price: '￦1,170,000',src:"woman_shose_img019", type: true},
        {id: 20, name: "[울트라페이스] 여성용 스니커즈", desc:"쇼핑하기", price: '￦1,180,000', src:"woman_shose_img020", type: false},
        {id: 21, name: "[울트라페이스] 여성용 울트라페이스 스니커즈", desc:"쇼핑하기",  price: '￦1,180,000',src:"woman_shose_img021",type: false},
        {id: 22, name: "가죽 발레 펌프스", desc:"쇼핑하기", price: '￦1,050,000', src:"woman_shose_img022", type: false},
        {id: 23, name: "가죽 미드힐 슬링백 펌프스", desc:"쇼핑하기", price: '￦1,200,000',src:"woman_shose_img023", type: false},
        {id: 24, name: "가죽 발레 펌프스", desc:"쇼핑하기",  price: '￦1,050,000',src:"woman_shose_img024", type: true},
        {id: 25, name: "[구찌 주미] 미드힐 앵클 부츠", desc:"쇼핑하기",  price: '￦1,290,000',src:"woman_shose_img025", type: false},
        {id: 26, name: "[구찌 주미] 미드힐 가죽 펌프스", desc:"쇼핑하기",  price: '￦1,120,000',src:"woman_shose_img026", type: false},
        {id: 27, name: "[구찌 주미] 가죽 미드힐 펌프스", desc:"쇼핑하기",  price: '￦1,120,000',src:"woman_shose_img027", type: false},
        {id: 28, name: "[구찌 주미] 가죽 미드힐 로퍼", desc:"쇼핑하기",  price: '￦1,150,000',src:"woman_shose_img028", type: false},
        {id: 29, name: "[GG 마몽] 더블 G 가죽 로퍼", desc:"쇼핑하기",price: '￦930,000', src:"woman_shose_img029",type: false},
        {id: 30, name: "[GG 마몽] 더블 G 가죽 로퍼", desc:"쇼핑하기",price: '￦930,000', src:"woman_shose_img030", type: false},
        {id: 31, name: "[GG 마몽] 스웨이드 미드힐 펌프스", desc:"쇼핑하기", price: '￦970,000',src:"woman_shose_img031", type: false},
        {id: 32, name: "[GG 마몽] 가죽 미드힐 펌프스", desc:"쇼핑하기", price: '￦970,000',src:"woman_shose_img032", type: false},
        {id: 33, name: "[에이스] 여성 Disney x Gucci 에이스 스니커즈", desc:"쇼핑하기", price: '￦1,090,000',src:"woman_shose_img033", type: true},
        {id: 34, name: "[구찌 주미] 미드힐 앵클 부츠", desc:"쇼핑하기", price: '￦1,290,000', src:"woman_shose_img034", type: false},
        {id: 35, name: "가죽 앵클 부츠", desc:"쇼핑하기",  price: '￦1,770,000',src:"woman_shose_img035",type: false},
        {id: 36, name: "[구찌 주미] 가죽 미드힐 로퍼", desc:"쇼핑하기", price: '￦1,150,000', src:"woman_shose_img036", type: false},
        {id: 37, name: "[구찌 주미] 가죽 슬라이드 샌들", desc:"쇼핑하기", price: '￦870,000',src:"woman_shose_img037", type: false},
        {id: 38, name: "[GG 마몽] 더블 G 가죽 로퍼", desc:"쇼핑하기",  price: '￦930,000',src:"woman_shose_img038", type: true},
        {id: 39, name: "[GG 마몽] 가죽 플랫폼 펌프스", desc:"쇼핑하기",  price: '￦1,390,000',src:"woman_shose_img039", type: false},
        {id: 40, name: "[GG 마몽] 가죽 플랫폼 펌프스", desc:"쇼핑하기",  price: '￦1,270,000',src:"woman_shose_img040", type: false},
        {id: 41, name: "[GG 마몽] 가죽 미드힐 펌프스", desc:"쇼핑하기",  price: '￦970,000',src:"woman_shose_img041", type: false},
        {id: 42, name: "[GG 마몽] 자수 장식의 가죽 미드힐 펌프스", desc:"쇼핑하기",  price: '￦1,110,000',src:"woman_shose_img042", type: false}
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,src3,src4,type, price;
    var html = "";
    var txt= "";
    var typeBox = "";
    var itemIndex;
    var viewIndex;
    var timer = 500;
    var length = 3;
    var animation = false;
    var backBox = "";

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
              addItem(index, 14);
        }
    });

  addItem(index, 14);
  function addItem(start, _add){
      html = "";
      end = start + 14;
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