$(document).ready(function(){
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
        window.location.href = "../man_nav.html";
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

    var secBox = [
        {id: 1, name: "구찌 1955 홀스빗 숄더백", desc:"상품보기", src:"hollbit_bag01.png", src2:"hollbit_bag01_hover.jpg"},
        {id: 2, name: "구찌 1955 홀스빗 숄더백", desc:"상품보기", src:"hollbit_bag02.png", src2:"hollbit_bag02_hover.jpg"},
        {id: 3, name: "구찌 1955 홀스빗 숄더백", desc:"상품보기", src:"hollbit_bag03.png", src2:"hollbit_bag03_hover.jpg"},
        {id: 4, name: "구찌 1955 홀스빗 숄더백", desc:"상품보기", src:"hollbit_bag04.png", src2:"hollbit_bag04_hover.jpg"},
        {id: 5, name: "구찌 1955 홀스빗 숄더백", desc:"상품보기", src:"hollbit_bag05.png", src2:"hollbit_bag05_hover.jpg"},
        {id: 6, name: "구찌 1955 홀스빗 버킷백", desc:"상품보기", src:"hollbit_bag06.png", src2:"hollbit_bag06_hover.jpg"},
        {id: 7, name: "구찌 1955 홀스빗 버킷백", desc:"상품보기", src:"hollbit_bag07.png", src2:"hollbit_bag07_hover.jpg"}
    ];
    var id, name, desc, src, src2;
    var html = "";
    var text = "";

    for(var i in secBox){
        id = secBox[i].id;
        name = secBox[i].name;
        desc = secBox[i].desc;
        src = secBox[i].src;
        src2 = secBox[i].src2;

        txt = `
            <div class= "sec_iner">
                <div class="front">
                    <img src="img/${src}">
                </div>
                <div class="back">
                    <img src="img/${src2}">
                </div>
                <div class="sec_iner_name">
                    ${name}
                </div> 
                <div class="sec_iner_desc">
                    ${desc} 
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        `;
        html = html + txt;
    }
    $('.sec02').html(html);

    var index = 0;
    var length = $('.slide').length;
    var auto;
    var on = false;
    var timer = 5000;

    $('.slide').eq(0).css({
        left: 0
    });
    autopaly();
    $(document).on('click', '.line_stick', function(){
        index = $(this).index();
        action(index);
    });

    function next(){
        index++;
        index = index % length;
        action(index);
    }
    function autopaly(){
        autopaly_stop()
        if(on){
            return;
        }
        on = true;
        auto = setInterval(function(){
            next();
        }, timer);

    }
    function autopaly_stop(){
        clearInterval(auto);
        on = false;
    }
    function action(_idx){
        $('.slide').removeClass('active').eq(_idx).addClass('active');
        $('.line_stick').removeClass('liActive').eq(_idx).addClass('liActive');
    }

});