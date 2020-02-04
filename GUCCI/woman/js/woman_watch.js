$(document).ready(function(){
    var secBox = [
        {id: 1, name: "그립 시계, 38mm", desc:"쇼핑하기",price: '￦2,338,000', src:"woman_watch_img01",type: false},
        {id: 2, name: "그립 시계, 35mm", desc:"쇼핑하기",price: '￦2,208,000', src:"woman_watch_img02", type: false},
        {id: 3, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,338,000',src:"woman_watch_img03", type: false},
        {id: 4, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,058,000',src:"woman_watch_img04", type: false},
        {id: 5, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,508,000',src:"woman_watch_img05", type: false},
        {id: 6, name: "그립 시계, 35mm", desc:"쇼핑하기", price: '￦2,338,000', src:"woman_watch_img06", type: false},
        {id: 7, name: "그립 시계, 38mm", desc:"쇼핑하기",  price: '￦2,508,000',src:"woman_watch_img07",type: false},
        {id: 8, name: "그립 시계, 38mm", desc:"쇼핑하기", price: '￦2,208,000', src:"woman_watch_img08", type: false},
        {id: 9, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기", price: '￦1,548,000',src:"woman_watch_img09", type: false},
        {id: 10, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img010", type: false},
        {id: 11, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img011", type: false},
        {id: 12, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img012", type: false},
        {id: 13, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img013", type: false},
        {id: 14, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img014", type: false},
        {id: 15, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img015", type: false},
        {id: 16, name: "[G-Timeless] 시계, 27mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img016", type: false},
        {id: 17, name: "[G-타임리스] 27mm 시계", desc:"쇼핑하기",  price: '￦1,278,000',src:"woman_watch_img017", type: false},
        {id: 18, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦2,508,000',src:"woman_watch_img018", type: false},
        {id: 19, name: "[G-타임리스] 시계, 42mm", desc:"쇼핑하기",  price: '￦2,838,000',src:"woman_watch_img019", type: false},
        {id: 20, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,278,000',src:"woman_watch_img020", type: false},
        {id: 21, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",price: '￦1,278,000', src:"woman_watch_img021",type: false},
        {id: 22, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",price: '￦1,278,000', src:"woman_watch_img022", type: false},
        {id: 23, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기", price: '￦1,458,000',src:"woman_watch_img023", type: false},
        {id: 24, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기", price: '￦1,458,000',src:"woman_watch_img024", type: false},
        {id: 25, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기", price: '￦1,458,000',src:"woman_watch_img025", type: false},
        {id: 26, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기", price: '￦1,458,000', src:"woman_watch_img026", type: false},
        {id: 27, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦2,368,000',src:"woman_watch_img027",type: false},
        {id: 28, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기", price: '￦2,168,000', src:"woman_watch_img028", type: false},
        {id: 29, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기", price: '￦2,368,000',src:"woman_watch_img029", type: false},
        {id: 30, name: "[G-타임리스] 40mm 시계", desc:"쇼핑하기",  price: '￦2,318,000',src:"woman_watch_img030", type: false},
        {id: 31, name: "[G-타임리스] 40mm 시계", desc:"쇼핑하기",  price: '￦2,318,000',src:"woman_watch_img031", type: false},
        {id: 32, name: "[G-타임리스] 시계, 42mm", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img032", type: false},
        {id: 33, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦1,458,000',src:"woman_watch_img033", type: false},
        {id: 34, name: "[G-타임리스] 38mm 시계", desc:"쇼핑하기",  price: '￦1,338,000',src:"woman_watch_img034", type: false},
        {id: 35, name: "[G-타임리스] 36mm 시계", desc:"쇼핑하기",  price: '￦2,058,000',src:"woman_watch_img035", type: false},
        {id: 36, name: "[G-타임리스] 36mm 시계", desc:"쇼핑하기",  price: '￦1,728,000',src:"woman_watch_img036", type: false},
        {id: 37, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,408,000',src:"woman_watch_img037", type: false},
        {id: 38, name: "[G-타임리스] 36mm 시계", desc:"쇼핑하기",  price: '￦2,058,000',src:"woman_watch_img038", type: false},
        {id: 39, name: "[G-타임리스] 29mm 시계", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img039", type: false},
        {id: 40, name: "[G-타임리스] 29mm 시계", desc:"쇼핑하기",  price: '￦1,548,000',src:"woman_watch_img040", type: false},
        {id: 41, name: "[G-타임리스] 27mm 시계", desc:"쇼핑하기",price: '￦1,338,000', src:"woman_watch_img041",type: false},
        {id: 42, name: "[G-타임리스] 시계, 27mm", desc:"쇼핑하기",price: '￦1,408,000', src:"woman_watch_img042", type: false},
        {id: 43, name: "[G-타임리스] 시계, 27mm", desc:"쇼핑하기", price: '￦1,338,000',src:"woman_watch_img043", type: false},
        {id: 44, name: "[G-타임리스] 27mm 시계", desc:"쇼핑하기", price: '￦1,278,000',src:"woman_watch_img044", type: false},
        {id: 45, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기", price: '￦1,208,000',src:"woman_watch_img045", type: false},
        {id: 46, name: "[르 마르셰 드 메르베이(Le Marché des Merveilles)], 38mm", desc:"쇼핑하기", price: '￦1,338,000', src:"woman_watch_img046", type: false},
        {id: 47, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기",  price: '￦1,508,000',src:"woman_watch_img047",type: false},
        {id: 48, name: "[르 마르셰 드 메르베이(Le Marché des Merveilles)] 38mm 시계", desc:"쇼핑하기", price: '￦1,208,000', src:"woman_watch_img048", type: false},
        {id: 49, name: "[G-타임리스] 시계, 38mm", desc:"쇼핑하기", price: '￦1,278,000',src:"woman_watch_img049", type: false},
        {id: 50, name: "[르 마르셰 드 메르베이 (Le Marché des Merveilles)] 22mm 시계", desc:"쇼핑하기",  price: '￦2,738,000',src:"woman_watch_img050", type: false},
        {id: 51, name: "[디아망티시마] 27mm 시계", desc:"쇼핑하기",  price: '￦1,278,000',src:"woman_watch_img051", type: false},
        {id: 52, name: "[디아망티시마] 27mm 시계", desc:"쇼핑하기",  price: '￦1,438,000',src:"woman_watch_img052", type: false},
        {id: 53, name: "[디아망티시마] 32mm 시계", desc:"쇼핑하기",  price: '￦1,438,000',src:"woman_watch_img053", type: false},
        {id: 54, name: "[디아망티시마] 32mm 시계", desc:"쇼핑하기",  price: '￦1,318,000',src:"woman_watch_img054", type: false},
        {id: 55, name: "[구찌 다이브] 40mm 시계", desc:"쇼핑하기",  price: '￦1,838,000',src:"woman_watch_img055", type: false}
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,type, price;
    var html = "";
    var txt= "";

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