$(document).ready(function(){
    var secBox = [
        {id: 1, name: "플로라 디테일의 메탈 반지", desc:"쇼핑하기",price: '￦410,000', src:"woman_acc_img01",type: false},
        {id: 2, name: "플로라 디테일의 메탈 팔찌 ", desc:"쇼핑하기",price: '￦580,000', src:"woman_acc_img02", type: false},
        {id: 3, name: "플로라 디테일의 메탈 귀걸이 ", desc:"쇼핑하기", price: '￦490,000',src:"woman_acc_img03", type: false},
        {id: 4, name: "플로라 디테일의 비즈 팔찌 ", desc:"쇼핑하기", price: '￦640,000',src:"woman_acc_img04", type: false},
        {id: 5, name: "플로라 디테일의 비즈 목걸이 ", desc:"쇼핑하기", price: '￦1,240,000',src:"woman_acc_img05", type: false},
        {id: 6, name: "플로라 디테일의 메탈 목걸이 ", desc:"쇼핑하기", price: '￦910,000', src:"woman_acc_img06", type: false},
        {id: 7, name: "인터로킹 G 펄과 크리스털 귀걸이 ", desc:"쇼핑하기",  price: '￦1,150,000',src:"woman_acc_img07",type: false},
        {id: 8, name: "인터로킹 G 진주 귀걸이", desc:"쇼핑하기", price: '￦600,000', src:"woman_acc_img08", type: false},
        {id: 9, name: "스트로베리 잠금장치가 달린 진주 목걸이", desc:"쇼핑하기", price: '￦2,950,000',src:"woman_acc_img09", type: false},
        {id: 10, name: "인터로킹 G 진주 목걸이", desc:"쇼핑하기",  price: '￦680,000',src:"woman_acc_img010", type: false},
        {id: 11, name: "크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦810,000',src:"woman_acc_img011", type: false},
        {id: 12, name: "크리스털 더블 G 반지", desc:"쇼핑하기",  price: '￦580,000',src:"woman_acc_img012", type: false},
        {id: 13, name: "싱글 크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦490,000',src:"woman_acc_img013", type: false},
        {id: 14, name: "크리스털 더블 G 팔찌", desc:"쇼핑하기",  price: '￦690,000',src:"woman_acc_img014", type: false},
        {id: 15, name: "크리스털 더블 G 목걸이", desc:"쇼핑하기",  price: '￦750,000',src:"woman_acc_img015", type: false},
        {id: 16, name: "더블 G 디테일의 라이언 헤드 귀걸이", desc:"쇼핑하기",  price: '￦910,000',src:"woman_acc_img016", type: false},
        {id: 17, name: "더블 G 디테일의 라이언 헤드 팔찌", desc:"쇼핑하기",  price: '￦1,240,000',src:"woman_acc_img017", type: false},
        {id: 18, name: "더블 G 디테일의 라이언 헤드 싱글 귀걸이", desc:"쇼핑하기",  price: '￦670,000',src:"woman_acc_img018", type: false},
        {id: 19, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img019", type: false},
        {id: 20, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img020", type: false},
        {id: 21, name: "플로라 디테일의 메탈 반지", desc:"쇼핑하기",price: '￦410,000', src:"woman_acc_img021",type: false},
        {id: 22, name: "플로라 디테일의 메탈 팔찌 ", desc:"쇼핑하기",price: '￦580,000', src:"woman_acc_img022", type: false},
        {id: 23, name: "플로라 디테일의 메탈 귀걸이 ", desc:"쇼핑하기", price: '￦490,000',src:"woman_acc_img023", type: false},
        {id: 24, name: "플로라 디테일의 비즈 팔찌 ", desc:"쇼핑하기", price: '￦640,000',src:"woman_acc_img024", type: false},
        {id: 25, name: "플로라 디테일의 비즈 목걸이 ", desc:"쇼핑하기", price: '￦1,240,000',src:"woman_acc_img025", type: false},
        {id: 26, name: "플로라 디테일의 메탈 목걸이 ", desc:"쇼핑하기", price: '￦910,000', src:"woman_acc_img026", type: false},
        {id: 27, name: "인터로킹 G 펄과 크리스털 귀걸이 ", desc:"쇼핑하기",  price: '￦1,150,000',src:"woman_acc_img027",type: false},
        {id: 28, name: "인터로킹 G 진주 귀걸이", desc:"쇼핑하기", price: '￦600,000', src:"woman_acc_img028", type: false},
        {id: 29, name: "스트로베리 잠금장치가 달린 진주 목걸이", desc:"쇼핑하기", price: '￦2,950,000',src:"woman_acc_img029", type: false},
        {id: 30, name: "인터로킹 G 진주 목걸이", desc:"쇼핑하기",  price: '￦680,000',src:"woman_acc_img030", type: false},
        {id: 31, name: "크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦810,000',src:"woman_acc_img031", type: false},
        {id: 32, name: "크리스털 더블 G 반지", desc:"쇼핑하기",  price: '￦580,000',src:"woman_acc_img032", type: false},
        {id: 33, name: "싱글 크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦490,000',src:"woman_acc_img033", type: false},
        {id: 34, name: "크리스털 더블 G 팔찌", desc:"쇼핑하기",  price: '￦690,000',src:"woman_acc_img034", type: false},
        {id: 35, name: "크리스털 더블 G 목걸이", desc:"쇼핑하기",  price: '￦750,000',src:"woman_acc_img035", type: false},
        {id: 36, name: "더블 G 디테일의 라이언 헤드 귀걸이", desc:"쇼핑하기",  price: '￦910,000',src:"woman_acc_img036", type: false},
        {id: 37, name: "더블 G 디테일의 라이언 헤드 팔찌", desc:"쇼핑하기",  price: '￦1,240,000',src:"woman_acc_img037", type: false},
        {id: 38, name: "더블 G 디테일의 라이언 헤드 싱글 귀걸이", desc:"쇼핑하기",  price: '￦670,000',src:"woman_acc_img038", type: false},
        {id: 39, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img039", type: false},
        {id: 40, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img040", type: false},
        {id: 41, name: "플로라 디테일의 메탈 반지", desc:"쇼핑하기",price: '￦410,000', src:"woman_acc_img041",type: false},
        {id: 42, name: "플로라 디테일의 메탈 팔찌 ", desc:"쇼핑하기",price: '￦580,000', src:"woman_acc_img042", type: false},
        {id: 43, name: "플로라 디테일의 메탈 귀걸이 ", desc:"쇼핑하기", price: '￦490,000',src:"woman_acc_img043", type: false},
        {id: 44, name: "플로라 디테일의 비즈 팔찌 ", desc:"쇼핑하기", price: '￦640,000',src:"woman_acc_img044", type: false},
        {id: 45, name: "플로라 디테일의 비즈 목걸이 ", desc:"쇼핑하기", price: '￦1,240,000',src:"woman_acc_img045", type: false},
        {id: 46, name: "플로라 디테일의 메탈 목걸이 ", desc:"쇼핑하기", price: '￦910,000', src:"woman_acc_img046", type: false},
        {id: 47, name: "인터로킹 G 펄과 크리스털 귀걸이 ", desc:"쇼핑하기",  price: '￦1,150,000',src:"woman_acc_img047",type: false},
        {id: 48, name: "인터로킹 G 진주 귀걸이", desc:"쇼핑하기", price: '￦600,000', src:"woman_acc_img048", type: false},
        {id: 49, name: "스트로베리 잠금장치가 달린 진주 목걸이", desc:"쇼핑하기", price: '￦2,950,000',src:"woman_acc_img049", type: false},
        {id: 50, name: "인터로킹 G 진주 목걸이", desc:"쇼핑하기",  price: '￦680,000',src:"woman_acc_img050", type: false},
        {id: 51, name: "크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦810,000',src:"woman_acc_img051", type: false},
        {id: 52, name: "크리스털 더블 G 반지", desc:"쇼핑하기",  price: '￦580,000',src:"woman_acc_img052", type: false},
        {id: 53, name: "싱글 크리스털 더블 G 귀걸이", desc:"쇼핑하기",  price: '￦490,000',src:"woman_acc_img053", type: false},
        {id: 54, name: "크리스털 더블 G 팔찌", desc:"쇼핑하기",  price: '￦690,000',src:"woman_acc_img054", type: false},
        {id: 55, name: "크리스털 더블 G 목걸이", desc:"쇼핑하기",  price: '￦750,000',src:"woman_acc_img055", type: false},
        {id: 56, name: "더블 G 디테일의 라이언 헤드 귀걸이", desc:"쇼핑하기",  price: '￦910,000',src:"woman_acc_img056", type: false},
        {id: 57, name: "더블 G 디테일의 라이언 헤드 팔찌", desc:"쇼핑하기",  price: '￦1,240,000',src:"woman_acc_img057", type: false},
        {id: 58, name: "더블 G 디테일의 라이언 헤드 싱글 귀걸이", desc:"쇼핑하기",  price: '￦670,000',src:"woman_acc_img058", type: false},
        {id: 59, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img059", type: false},
        {id: 60, name: "크리스털 구찌 싱글 헤어 바레트", desc:"쇼핑하기",  price: '￦1,090,000',src:"woman_acc_img060", type: false}
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,type, price;
    var html = "";
    var text= "";

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


    
});