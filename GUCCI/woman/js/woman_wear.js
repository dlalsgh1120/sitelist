$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 실크 셔츠", desc:"쇼핑하기",price: '￦2,700,000', src:"woman_nav_img01",type: false},
        {id: 2, name: "Disney x Gucci 실크 파자마 팬츠", desc:"쇼핑하기",price: '￦2,150,000', src:"woman_nav_img02", type: false},
        {id: 3, name: "울 실크 팬츠", desc:"쇼핑하기", price: '￦1,600,000',src:"woman_nav_img03",type: false},
        {id: 4, name: "캐디 울 실크 숏 드레스", desc:"쇼핑하기", price: '￦2,700,000',src:"woman_nav_img04", type: false},
        {id: 5,name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000',src:"woman_nav_img05", type: true},
        {id: 6, name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000', src:"woman_nav_img06", type: false},
        {id: 7, name: "홀스슈 디테일의 트위드 스커트", desc:"쇼핑하기",  price: '￦2,700,000',src:"woman_nav_img07",type: false},
        {id: 8, name: "라이언 헤드 토글 디테일의 트위드 재킷", desc:"쇼핑하기", price: '￦4,000,000', src:"woman_nav_img08", type: false},
        {id: 9, name: "Disney x Gucci 저지 드레스", desc:"쇼핑하기", price: '￦2,000,000',src:"woman_nav_img09",type: false},
        {id: 10, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000',src:"woman_nav_img010", type: true},
        {id: 11, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000',src:"woman_nav_img011", type: false},
        {id: 12, name: "Disney x Gucci 1980년대 데님 팬츠", desc:"쇼핑하기",  price: '￦1,350,000',src:"woman_nav_img012", type: false},
        {id: 13, name: "Disney x Gucci 오버사이즈 스웨트셔츠", desc:"쇼핑하기",  price: '￦1,550,000',src:"woman_nav_img013", type: false},
        {id: 14, name: "Disney x Gucci 코튼 드릴 스커트", desc:"쇼핑하기",  price: '￦1,250,000',src:"woman_nav_img014", type: false},
        {id: 15, name: "Disney x Gucci 오버사이즈 티셔츠", desc:"쇼핑하기",price: '￦850,000', src:"woman_nav_img015",type: false},
        {id: 16, name: "Disney x Gucci 오버사이즈 스웨트셔츠", desc:"쇼핑하기",price: '￦1,550,000', src:"woman_nav_img016", type: false},
        {id: 17, name: "데님 스키니 팬츠", desc:"쇼핑하기", price: '￦1,370,000',src:"woman_nav_img017",type: false},
        {id: 18, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,300,000',src:"woman_nav_img018", type: false},
        {id: 19, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,700,000',src:"woman_nav_img019", type: true},
        {id: 20, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,700,000', src:"woman_nav_img020", type: false},
        {id: 21, name: "Disney x Gucci 오버사이즈 티셔츠", desc:"쇼핑하기",  price: '￦850,000',src:"woman_nav_img021",type: false},
        {id: 22, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,300,000', src:"woman_nav_img022", type: false},
        {id: 23, name: "패치가 장식된 데님 팬츠", desc:"쇼핑하기", price: '￦1,610,000',src:"woman_nav_img023",type: false},
        {id: 24, name: "탈착 가능한 요소의 트위드 드레스", desc:"쇼핑하기",  price: '￦5,400,000',src:"woman_nav_img024", type: true},
        {id: 25, name: "탈착 가능한 요소의 트위드 드레스", desc:"쇼핑하기",  price: '￦5,400,000',src:"woman_nav_img025", type: false},
        {id: 26, name: "체크 트위드 플레어 팬츠", desc:"쇼핑하기",  price: '￦2,150,000',src:"woman_nav_img026", type: false},
        {id: 27, name: "트위드 튜닉 드레스", desc:"쇼핑하기",  price: '￦3,300,000',src:"woman_nav_img027", type: false},
        {id: 28, name: "트위드 미니 스커트", desc:"쇼핑하기",  price: '￦1,250,000',src:"woman_nav_img028", type: false},
        {id: 29, name: "Disney x Gucci 오버사이즈 티셔츠", desc:"쇼핑하기",price: '￦850,000', src:"woman_nav_img029",type: false},
        {id: 30, name: "Disney x Gucci 오버사이즈 스웨트셔츠", desc:"쇼핑하기",price: '￦1,550,000', src:"woman_nav_img030", type: false},
        {id: 31, name: "데님 스키니 팬츠", desc:"쇼핑하기", price: '￦1,370,000',src:"woman_nav_img031",type: false},
        {id: 32, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,300,000',src:"woman_nav_img032", type: false},
        {id: 33, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,700,000',src:"woman_nav_img033", type: true},
        {id: 34, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,700,000', src:"woman_nav_img034", type: false},
        {id: 35, name: "Disney x Gucci 오버사이즈 티셔츠", desc:"쇼핑하기",  price: '￦850,000',src:"woman_nav_img035",type: false},
        {id: 36, name: "Disney x Gucci 울 스웨터", desc:"쇼핑하기", price: '￦2,300,000', src:"woman_nav_img036", type: false},
        {id: 37, name: "패치가 장식된 데님 팬츠", desc:"쇼핑하기", price: '￦1,610,000',src:"woman_nav_img037",type: false},
        {id: 38, name: "탈착 가능한 요소의 트위드 드레스", desc:"쇼핑하기",  price: '￦5,400,000',src:"woman_nav_img038", type: true},
        {id: 39, name: "탈착 가능한 요소의 트위드 드레스", desc:"쇼핑하기",  price: '￦5,400,000',src:"woman_nav_img039", type: false},
        {id: 40, name: "체크 트위드 플레어 팬츠", desc:"쇼핑하기",  price: '￦2,150,000',src:"woman_nav_img040", type: false},
        {id: 41, name: "트위드 튜닉 드레스", desc:"쇼핑하기",  price: '￦3,300,000',src:"woman_nav_img041", type: false},
        {id: 42, name: "트위드 미니 스커트", desc:"쇼핑하기",  price: '￦1,250,000',src:"woman_nav_img042", type: false}
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