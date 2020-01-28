$(document).ready(function(){
    var secBox = [
        {id: 1, name: "[구찌 블룸] 암브로시아 디 피오리, 오 드 퍼퓸 50ml", desc:"쇼핑하기",price: '￦145,000', src:"W_perfume_img01",type: false},
        {id: 2, name: "[구찌 블룸] 암브로시아 디 피오리, 오 드 퍼퓸 100ml", desc:"쇼핑하기",price: '￦201,000', src:"W_perfume_img02", type: false},
        {id: 3, name: "[구찌 블룸] 아쿠아 디 피오리 50ml 오 드 뚜왈렛", desc:"쇼핑하기", price: '￦119,000',src:"W_perfume_img03", type: false},
        {id: 4, name: "[구찌 블룸] 아쿠아 디 피오리100ml 오 드 뚜왈렛", desc:"쇼핑하기", price: '￦165,000',src:"W_perfume_img04", type: false},
        {id: 5, name: "[구찌 블룸] 150ml 오 드 퍼퓸", desc:"쇼핑하기", price: '￦228,000',src:"W_perfume_img05", type: true},
        {id: 6, name: "[구찌 블룸] 50ml 오 드 퍼퓸", desc:"쇼핑하기", price: '￦132,000', src:"W_perfume_img06", type: false},
        {id: 7, name: "[구찌 블룸] 100ml 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦183,000',src:"W_perfume_img07",type: false},
        {id: 8, name: "[구찌 블룸] 네타레 디 피오리, 50ml 오 드 퍼퓸", desc:"쇼핑하기", price: '￦145,000', src:"W_perfume_img08", type: false},
        {id: 9, name: "[구찌 블룸] 네타레 디 피오리, 100ml 오 드 퍼퓸", desc:"쇼핑하기", price: '￦201,000',src:"W_perfume_img09", type: false},
        {id: 10, name: "[구찌 블룸] 고체 디 피오리 100ml 오 드 뚜왈렛", desc:"쇼핑하기",  price: '￦165,000',src:"W_perfume_img010", type: true},
        {id: 11, name: "[구찌 블룸] 30ml 헤어 미스트", desc:"쇼핑하기",  price: '￦59,000',src:"W_perfume_img011", type: false},
        {id: 12, name: "[알케미스트 가든] A Song for the Rose, 로즈, 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img012", type: false},
        {id: 13, name: "[알케미스트 가든] The Voice of the Snake, 우드(Oud), 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img013", type: false},
        {id: 14, name: "[알케미스트 가든] Tears of Iris, 아이리스, 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img014", type: false},
        {id: 15, name: "[알케미스트 가든] The Last Day of Summer, 우즈(Woods), 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img015", type: false},
        {id: 16, name: "[알케미스트 가든] Winter's Spring, 미모사, 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img016", type: false},
        {id: 17, name: "[알케미스트 가든] The Virgin Violet, 바이올렛, 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img017", type: false},
        {id: 18, name: "[알케미스트 가든] The Eyes of the Tiger, 앰버, 100ml, 오 드 퍼퓸", desc:"쇼핑하기",  price: '￦440,000',src:"W_perfume_img018", type: false},
        {id: 19, name: "[알케미스트 가든] A Kiss from Violet, 바이올렛, 20ml, 퍼퓸드 오일", desc:"쇼핑하기",  price: '￦550,000',src:"W_perfume_img019", type: false},
        {id: 20, name: "[알케미스트 가든] Ode on Melancholy, 우즈(Woods), 20ml, 퍼퓸드 오일", desc:"쇼핑하기",  price: '￦550,000',src:"W_perfume_img020", type: false},
    ];
    var scrollTop, headerHeight;
    var id, name, desc, src, src2,type, price;
    var html = "";
    var text= "";

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
    for(var i in secBox){
        id = secBox[i].id;
        name = secBox[i].name;
        desc = secBox[i].desc;
        src = secBox[i].src;
        src2 = src + "_hover";
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
    
});