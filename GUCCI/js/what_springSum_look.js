$(document).ready(function(){
    var scrollTop, headerHeight;
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
        window.location.href = "index.html";
    }; 
    document.getElementById('n_span01').onclick = function(){
        window.location.href = "what_nav.html";
    };
    document.getElementById('n_span02').onclick = function(){
        window.location.href = "woman_nav.html";
    }; 
    document.getElementById('n_span03').onclick = function(){
        window.location.href = "man_nav.html";
    }; 
    document.getElementById('n_span04').onclick = function(){
        window.location.href = "gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "perfume_nav.html";
    };

    var secBox = [
        {id: 1, name: "2019 프리폴", desc:"룩 확인하기", src:"what_springSum_look01.jpg", src2:"what_springSum_look01_hover.jpg"},
        {id: 2, name: "2019 봄/여름 패션쇼", desc:"룩 확인하기", src:"what_springSum_look02.jpg", src2:"what_springSum_look02_hover.jpg"},
        {id: 3, name: "2019 크루즈", desc:"룩 확인하기", src:"what_springSum_look03.jpg", src2:"what_springSum_look03_hover.jpg"}
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
            <div class="sec_iner">
                <input type="hidden" class="itemId" value="${id}">
                <div class="front">
                    <img src="img/${src}">
                </div>
                <div class="back">
                    <img src="img/${src2}">
                    <div class="like_icon">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="sec_iner_name">
                    ${name}
                    </div> 
                    <div class="sec_iner_desc">
                        ${desc} 
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
        `; 
        html = html + txt;
    }
    $('.sec_box').html(html);
    
    $(document).on('click', '.like_icon',function(){
        var itemId = $(this).siblings('.itemId')[0].value; 
        setHeart(itemId);
    });
    $(document).on('click', '#heart_iner', function(){
        window.location = "heart_bag.html?like_icon=" + like_icon.join();
    });

    var like_icon = [];
    var heart_iner = 0;

    function setHeart(id){

        var heartBox = like_icon.indexOf(id);
        if(heartBox === -1){
            like_icon.push(id);
            heart_iner = like_icon.length;
            $('#count').html(heart_iner);
        }
        else {
            alert('이미 있습니다.');
        } 
                
    }
});