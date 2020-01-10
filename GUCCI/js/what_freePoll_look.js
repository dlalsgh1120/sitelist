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
    document.getElementById('spring_summer_look').onclick = function(){
        window.location.href = "what_springSum_look.html";
    };
    document.getElementById('spring_summer_look02').onclick = function(){
        window.location.href = "what_springSum_look.html";
    };

    var secBox = [
        {id: 1, name: "Look3", desc:"룩 확인하기", src:"what_freePoll_look01.jpg", src2:"what_freePoll_look01_hover.jpg"},
        {id: 2, name: "Look4", desc:"룩 확인하기", src:"what_freePoll_look02.jpg", src2:"what_freePoll_look02_hover.jpg"},
        {id: 3, name: "Look10", desc:"룩 확인하기", src:"what_freePoll_look03.jpg", src2:"what_freePoll_look03_hover.jpg"},
        {id: 4, name: "Look21", desc:"룩 확인하기", src:"what_freePoll_look04.jpg", src2:"what_freePoll_look04_hover.jpg"},
        {id: 5, name: "Look24", desc:"룩 확인하기", src:"what_freePoll_look05.jpg", src2:"what_freePoll_look05_hover.jpg"},
        {id: 6, name: "Look28", desc:"룩 확인하기", src:"what_freePoll_look06.jpg", src2:"what_freePoll_look06_hover.jpg"},
        {id: 7, name: "Look39", desc:"룩 확인하기", src:"what_freePoll_look07.jpg", src2:"what_freePoll_look07_hover.jpg"},
        {id: 8, name: "Look43", desc:"룩 확인하기", src:"what_freePoll_look08.jpg", src2:"what_freePoll_look08_hover.jpg"},
        {id: 9, name: "Look53", desc:"룩 확인하기", src:"what_freePoll_look09.jpg", src2:"what_freePoll_look09_hover.jpg"},
        {id: 10, name: "Look73", desc:"룩 확인하기", src:"what_freePoll_look010.jpg", src2:"what_freePoll_look010_hover.jpg"},
        {id: 11, name: "Look85", desc:"룩 확인하기", src:"what_freePoll_look011.jpg", src2:"what_freePoll_look011_hover.jpg"}
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

    $(document).on('click', '.sec_iner', function(){
        var itemId = $(this).children('.itemId')[0].value;
        window.location = "what_freePoll_wear.html?itemId=" + itemId;
    });
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