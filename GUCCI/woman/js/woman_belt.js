$(document).ready(function(){
    var secBox = [
        {id: 1, name: "홀스빗 디테일의 가죽 벨트", desc:"쇼핑하기",price: '￦760,000', src:"woman_belt_img01",type: false},
        {id: 2, name: "홀스빗 디테일의 가죽 벨트", desc:"쇼핑하기",price: '￦760,000', src:"woman_belt_img02", type: false},
        {id: 3, name: "홀스빗 디테일의 가죽 벨트", desc:"쇼핑하기", price: '￦630,000',src:"woman_belt_img03", type: false},
        {id: 4, name: "인터로킹 G 홀스빗 가죽 벨트", desc:"쇼핑하기", price: '￦760,000',src:"woman_belt_img04", type: false},
        {id: 5, name: "인터로킹 G 홀스빗 가죽 벨트", desc:"쇼핑하기", price: '￦760,000',src:"woman_belt_img05", type: false},
        {id: 6, name: "인터로킹 G 홀스빗 장식의 가죽 벨트", desc:"쇼핑하기", price: '￦760,000', src:"woman_belt_img06", type: false},
        {id: 7, name: "인터로킹 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦510,000',src:"woman_belt_img07",type: false},
        {id: 8, name: "인터로킹 G 버클 가죽 GG 벨트", desc:"쇼핑하기", price: '￦660,000', src:"woman_belt_img08", type: false},
        {id: 9, name: "인터로킹 G 버클 가죽 벨트", desc:"쇼핑하기", price: '￦600,000',src:"woman_belt_img09", type: false},
        {id: 10, name: "인터로킹 G 버클 GG 수프림 벨트", desc:"쇼핑하기",  price: '￦610,000',src:"woman_belt_img010", type: false},
        {id: 11, name: "[GG 마몽] 텍스처드 더블 G 버클 벨트", desc:"쇼핑하기",  price: '￦780,000',src:"woman_belt_img011", type: false},
        {id: 12, name: "[GG 마몽] 토르숑 더블 G 버클 스웨이드 벨트", desc:"쇼핑하기",  price: '￦460,000',src:"woman_belt_img012", type: false},
        {id: 13, name: "[GG 마몽] 토르숑 더블 G 버클 벨트", desc:"쇼핑하기",  price: '￦800,000',src:"woman_belt_img013", type: false},
        {id: 14, name: "[GG 마몽] 펄 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦740,000',src:"woman_belt_img014", type: false},
        {id: 15, name: "[GG마몽] 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦630,000',src:"woman_belt_img015", type: false},
        {id: 16, name: "[GG 마몽] 더블 G 버클 벨트", desc:"쇼핑하기",  price: '￦560,000',src:"woman_belt_img016", type: false},
        {id: 17, name: "[GG 마몽] 더블 G 버클 벨트", desc:"쇼핑하기",  price: '￦560,000',src:"woman_belt_img017", type: false},
        {id: 18, name: "[GG마몽] 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦560,000',src:"woman_belt_img018", type: false},
        {id: 19, name: "[GG마몽] 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦560,000',src:"woman_belt_img019", type: false},
        {id: 20, name: "[GG 마몽] 더블 G 버클 리버서블 가죽 벨트.", desc:"쇼핑하기",  price: '￦750,000',src:"woman_belt_img020", type: false},
        {id: 21, name: "[GG 마몽] 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦690,000',src:"woman_belt_img021", type: false},
        {id: 22, name: "[GG 마몽] 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦690,000',src:"woman_belt_img022", type: false},
        {id: 23, name: "[GG 마몽] 토르숑 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦750,000',src:"woman_belt_img023", type: false},
        {id: 24, name: "[GG 마몽] 토르숑 더블 G 버클 가죽 벨트", desc:"쇼핑하기",  price: '￦750,000',src:"woman_belt_img024", type: false},
        {id: 25, name: "[GG 마몽] 샤이니 버클 가죽 벨트", desc:"쇼핑하기",price: '￦570,000', src:"woman_belt_img025",type: false},
        {id: 26, name: "[GG 마몽] 샤이니 버클 가죽 벨트", desc:"쇼핑하기",price: '￦570,000', src:"woman_belt_img026", type: false},
        {id: 27, name: "[GG 마몽] 토르숑 더블 G 버클 웹(Web) 디테일 엘라스틱 벨트", desc:"쇼핑하기", price: '￦770,000',src:"woman_belt_img027", type: false},
        {id: 28, name: "스퀘어 G 버클 가죽 벨트", desc:"쇼핑하기", price: '￦580,000',src:"woman_belt_img028", type: false},
        {id: 29, name: "스퀘어 G 버클 가죽 벨트", desc:"쇼핑하기", price: '￦730,000',src:"woman_belt_img029", type: false},
        {id: 30, name: "벌과 별 모양 프린트 벨트", desc:"쇼핑하기", price: '￦470,000', src:"woman_belt_img030", type: false},
        {id: 31, name: "벌과 별 모양 프린트 벨트", desc:"쇼핑하기",  price: '￦470,000',src:"woman_belt_img031",type: false},
        {id: 32, name: "G 버클 가죽 벨트", desc:"쇼핑하기", price: '￦570,000', src:"woman_belt_img032", type: false},
        {id: 33, name: "G 버클 가죽 벨트", desc:"쇼핑하기", price: '￦570,000',src:"woman_belt_img033", type: false},
        {id: 34, name: "타원형 에나멜 버클 가죽 벨트 ", desc:"쇼핑하기",  price: '￦460,000',src:"woman_belt_img034", type: false},
        {id: 35, name: "[디오니서스] GG 수프림 벨트", desc:"쇼핑하기",  price: '￦740,000',src:"woman_belt_img035", type: false},
        {id: 36, name: "[디오니서스] GG 수프림 벨트", desc:"쇼핑하기",  price: '￦740,000',src:"woman_belt_img036", type: false}
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