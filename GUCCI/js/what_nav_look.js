$(document).ready(function(){
    var scrollTop, headerHeight;
    $(document).scroll(function(){
        scrollTop = $(window).scrollTop();
        
        headerHeight = $('header').height();
        if(scrollTop > headerHeight){
            $('nav').addClass('fixed');
            $('.left_icon_ul').addClass('block');
            $('.right_icon_ul').addClass('block');
        }
        else{
            $('nav').removeClass('fixed');
            $('.left_icon_ul').removeClass('block');
            $('.right_icon_ul').removeClass('block');
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
        {id: 1, name: "Look11", desc:"룩 확인하기", src:"what_nav_look01.jpg"},
        {id: 2, name: "Look18", desc:"룩 확인하기", src:"what_nav_look02.jpg"},
        {id: 3, name: "Look23", desc:"룩 확인하기", src:"what_nav_look03.jpg"},
        {id: 4, name: "Look24", desc:"룩 확인하기", src:"what_nav_look04.jpg"},
        {id: 5, name: "Look25", desc:"룩 확인하기", src:"what_nav_look05.jpg"},
        {id: 6, name: "Look46", desc:"룩 확인하기", src:"what_nav_look06.jpg"},
        {id: 7, name: "Look67", desc:"룩 확인하기", src:"what_nav_look07.jpg"},
        {id: 8, name: "Look78", desc:"룩 확인하기", src:"what_nav_look08.jpg"},
        {id: 9, name: "Look105", desc:"룩 확인하기", src:"what_nav_look09.jpg"},
        {id: 10, name: "Look106", desc:"룩 확인하기", src:"what_nav_look010.jpg"}
    ];

    var id, name, desc, src;
    var html = "";
    var text = "";
    for(var i in secBox){
        id = secBox[i].id;
        name = secBox[i].name;
        desc = secBox[i].desc;
        src = secBox[i].src;

        txt = `
            <div class="sec_iner">
                <input type="hidden" class="itemId" value="${id}">
                <div class="like_icon">
                    <i class="far fa-heart"></i>
                </div>
                <div class="sec_iner_img">
                    <img src="img/${src}">
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
    $('.sec_box').html(html);
;
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
            $('#heart_iner').html(heart_iner);
        }
        else {
            alert('이미 있습니다.');
        }   
                
    }
});