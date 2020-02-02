$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 실크 셔츠", desc:"쇼핑하기",price: '￦2,700,000',type: false},
        {id: 2, name: "Disney x Gucci 실크 파자마 팬츠", desc:"쇼핑하기",price: '￦2,150,000', type: false},
        {id: 3, name: "울 실크 팬츠", desc:"쇼핑하기", price: '￦1,600,000',type: false},
        {id: 4, name: "캐디 울 실크 숏 드레스", desc:"쇼핑하기", price: '￦2,700,000',type: false},
        {id: 5,name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000', type: true},
        {id: 6, name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000', type: false},
        {id: 7, name: "홀스슈 디테일의 트위드 스커트", desc:"쇼핑하기",  price: '￦2,700,000',type: false},
        {id: 8, name: "라이언 헤드 토글 디테일의 트위드 재킷", desc:"쇼핑하기", price: '￦4,000,000', type: false},
        {id: 9, name: "Disney x Gucci 저지 드레스", desc:"쇼핑하기", price: '￦2,000,000',type: false},
        {id: 10, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000', type: true},
        {id: 11, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000', type: false},
        {id: 12, name: "Disney x Gucci 1980년대 데님 팬츠", desc:"쇼핑하기",  price: '￦1,350,000', type: false},
        {id: 13, name: "Disney x Gucci 오버사이즈 스웨트셔츠", desc:"쇼핑하기",  price: '￦1,550,000', type: false},
        {id: 14, name: "Disney x Gucci 코튼 드릴 스커트", desc:"쇼핑하기",  price: '￦1,250,000',type: false }
    ];

    var detailItem = [
        { id: 1, item_id: 1, src: 'woman_wear_img01.jpg'},
        { id: 2, item_id: 1, src: 'woman_wear_img01_hover.jpg'},
        { id: 3, item_id: 1, src: 'woman_wear_img01_hover02.jpg'},
        { id: 4, item_id: 1, src: 'woman_wear_img01_hover03.jpg'},
        { id: 5, item_id: 1, src: 'woman_wear_img01_hover04.jpg'},
        { id: 6, item_id: 2, src: 'woman_wear_img02.jpg'},
        { id: 7, item_id: 2, src: 'woman_wear_img02_hover.jpg'},
        { id: 8, item_id: 2, src: 'woman_wear_img02_hover02.jpg'},
        { id: 9, item_id: 2, src: 'woman_wear_img02_hover03.jpg'},
        { id: 10, item_id: 2, src: 'woman_wear_img02_hover04.jpg'},
        { id: 11, item_id: 3, src: 'woman_wear_img03.jpg'},
        { id: 12, item_id: 3, src: 'woman_wear_img03_hover.jpg'},
        { id: 13, item_id: 3, src: 'woman_wear_img03_hover02.jpg'},
        { id: 14, item_id: 3, src: 'woman_wear_img03_hover03.jpg'},
        { id: 15, item_id: 4, src: 'woman_wear_img04.jpg'},
        { id: 16, item_id: 4, src: 'woman_wear_img04_hover.jpg'},
        { id: 17, item_id: 4, src: 'woman_wear_img04_hover02.jpg'},
        { id: 18, item_id: 4, src: 'woman_wear_img04_hover03.jpg'},
        { id: 19, item_id: 5, src: 'woman_wear_img05.jpg'},
        { id: 20, item_id: 5, src: 'woman_wear_img05_hover.jpg'},
        { id: 21, item_id: 5, src: 'woman_wear_img05_hover02.jpg'},
        { id: 22, item_id: 5, src: 'woman_wear_img05_hover03.jpg'},
        { id: 23, item_id: 5, src: 'woman_wear_img05_hover04.jpg'},
        { id: 24, item_id: 6, src: 'woman_wear_img06.jpg'},
        { id: 25, item_id: 6, src: 'woman_wear_img06_hover.jpg'},
        { id: 26, item_id: 6, src: 'woman_wear_img06_hover02.jpg'},
        { id: 27, item_id: 6, src: 'woman_wear_img06_hover03.jpg'},
        { id: 28, item_id: 6, src: 'woman_wear_img06_hover04.jpg'},
        { id: 29, item_id: 7, src: 'woman_wear_img07.jpg'},
        { id: 30, item_id: 7, src: 'woman_wear_img07_hover.jpg'},
        { id: 31, item_id: 7, src: 'woman_wear_img07_hover02.jpg'},
        { id: 32, item_id: 7, src: 'woman_wear_img07_hover03.jpg'},
        { id: 33, item_id: 8, src: 'woman_wear_img08.jpg'},
        { id: 34, item_id: 8, src: 'woman_wear_img08_hover.jpg'},
        { id: 35, item_id: 8, src: 'woman_wear_img08_hover02.jpg'},
        { id: 36, item_id: 8, src: 'woman_wear_img08_hover03.jpg'},
        { id: 37, item_id: 9, src: 'woman_wear_img09.jpg'},
        { id: 38, item_id: 9, src: 'woman_wear_img09_hover.jpg'},
        { id: 39, item_id: 9, src: 'woman_wear_img09_hover02.jpg'},
        { id: 40, item_id: 9, src: 'woman_wear_img09_hover03.jpg'},
        { id: 41, item_id: 9, src: 'woman_wear_img09_hover04.jpg'},
        { id: 42, item_id: 9, src: 'woman_wear_img09_hover05.jpg'},
        { id: 43, item_id: 9, src: 'woman_wear_img09_hover06.jpg'},
        { id: 44, item_id: 10, src: 'woman_wear_img010.jpg'},
        { id: 45, item_id: 10, src: 'woman_wear_img010_hover.jpg'},
        { id: 46, item_id: 10, src: 'woman_wear_img010_hover02.jpg'},
        { id: 47, item_id: 10, src: 'woman_wear_img010_hover03.jpg'},
        { id: 48, item_id: 10, src: 'woman_wear_img010_hover04.jpg'},
        { id: 49, item_id: 11, src: 'woman_wear_img011.jpg'},
        { id: 50, item_id: 11, src: 'woman_wear_img011_hover.jpg'},
        { id: 51, item_id: 11, src: 'woman_wear_img011_hover02.jpg'},
        { id: 52, item_id: 11, src: 'woman_wear_img011_hover03.jpg'},
        { id: 53, item_id: 11, src: 'woman_wear_img011_hover04.jpg'},
        { id: 49, item_id: 12, src: 'woman_wear_img012.jpg'},
        { id: 50, item_id: 12, src: 'woman_wear_img012_hover.jpg'},
        { id: 51, item_id: 12, src: 'woman_wear_img012_hover02.jpg'},
        { id: 52, item_id: 12, src: 'woman_wear_img012_hover03.jpg'},
        { id: 53, item_id: 12, src: 'woman_wear_img012_hover04.jpg'},
        { id: 54, item_id: 12, src: 'woman_wear_img012_hover05.jpg'},
        { id: 55, item_id: 13, src: 'woman_wear_img013.jpg'},
        { id: 56, item_id: 13, src: 'woman_wear_img013_hover.jpg'},
        { id: 57, item_id: 13, src: 'woman_wear_img013_hover02.jpg'},
        { id: 58, item_id: 13, src: 'woman_wear_img013_hover03.jpg'},
        { id: 59, item_id: 13, src: 'woman_wear_img013_hover04.jpg'},
        { id: 60, item_id: 14, src: 'woman_wear_img014.jpg'},
        { id: 61, item_id: 14, src: 'woman_wear_img014_hover.jpg'},
        { id: 62, item_id: 14, src: 'woman_wear_img014_hover02.jpg'},
        { id: 63, item_id: 14, src: 'woman_wear_img014_hover03.jpg'},
        { id: 64, item_id: 14, src: 'woman_wear_img014_hover04.jpg'},

    ];

    var scrollTop, headerHeight;
    var animation = false;
    var timer = 500;
    var itemIndex;
    var viewIndex;
    var length = 0;
    
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
    document.getElementById('n_span07').onclick = function(){
        window.location.href = "../decoration/deco_nav.html";
    };

    var html = '';
    var txt = '';
    var txt2 = '';
    var item;
    var itemIdx = 0;
    var slideLength = 0;
    
    getUrl();

    function getUrl(){
        var pageUrl = window.location.search.substring(1);
        if(!pageUrl){
            window.location.href = "woman_wear.html";
        }
        var value = pageUrl.split('=')[1] * 1;
        item = secBox.filter(function(res){
            return res.id === value;
        });

        // 1. 일단 해당 아이디에 매칭되는 디테일 상품들을 별도로 추려내고(filter)
        var  filterDetail = detailItem.filter(function(res){
            return res.item_id === value;
        });

        // 2. 필터링된 상품의 갯수를 구합니다.
        var filterDetailLength = filterDetail.length;

        // 3.슬라이드의 갯수도 구합니다. 슬라이드 갯수는 디테일 상품이 최대 2개씩 들어가고 추가로 1개가 더 있을 땐 슬라이드 하나가 더 추가되므로
        // 디테일갯수 나누기 2를 올림(반올림 아님)한 값임.
        slideLength = Math.ceil(filterDetailLength/2);

        //////////////////////////////////////////
        // 4. 먼저 슬라이드 껍데기를 만들어줍니다.
        var slide =  `<div class="slide"></div>`;
        html = '';
        txt = '';

        for(var i = 0; i< slideLength; i++){
            html += slide;
        }

        $('.wrapper').html(html);

        //////////////////////////////////////////

        itemIdx = 0; 

        // 5. 껍데기에 들어갈 내용을 만듭니다.
        // 설명이 필요하면 별도로 물어보세요. 말로 설명하기 힘들어요.
        for(var i = 0; i<slideLength; i++){
            var front = itemIdx;
            var back = itemIdx+1;
            if( i === slideLength - 1 && slideLength%2 === 1 ){
                txt = `
                    <div class="iner_slide full_img">
                        <img src='img/${filterDetail[front].src}'>
                    </div>
                `;
                $('.wrapper .slide').eq(i).append(txt);
            } else {
                txt = `
                    <div class="iner_slide slide_left01">
                        <img src='img/${filterDetail[front].src}'>
                    </div>`;
                txt2 = `
                    <div class="iner_slide slide_right01">
                        <img src='img/${filterDetail[back].src}'>
                    </div>`;
                
                $('.wrapper .slide').eq(i).append(txt);
                $('.wrapper .slide').eq(i).append(txt2);
            }
            itemIdx = itemIdx + 2;
        }

        $('.sec_name').html(item[0].name);
        $('.sec_price').html(item[0].price);
    };


    viewIndex = 0;
    $(this).find('.slide').eq(0).css({
        left: 0
    });
    $(document).on('click', '#btn_right', function(){
        if(animation){
            return;
        }
        animation = true;

        $('.slide').eq(viewIndex).animate({
            left: '-100%'
        }, timer);

        viewIndex++;
        //length를 slideLength로 대체했어요. 3이라고 딱 정해놓으면 안 되고, 슬라이드 갯수가 매번 바뀌므로
        // 이 부분은 직접 슬라이드 갯수를 구해서 처리해야 돼요.
        viewIndex = viewIndex % slideLength;

        //$('main_box')부터 들어가지 말고 바로 slide부터 찾아도 돼요. 아래처럼.
        // 즉 itemIndex는 필요없으니까 안 써도 돼요. 위 #btn_left는 직접 바꿔보세요.
        $('.slide').eq(viewIndex).css({
            left: '100%'
        }).animate({
            left: '0'
        }, {
            duration: timer,
            complete:function(){
                animation = false;
            }
        });
    });
    $(document).on('click', '#btn_left', function(){
        if(animation){
            return;
        }
        animation = true;

        itemIndex = $(this).parent().parent().index();
        $('.main_box').eq(itemIndex).find('.slide').eq(viewIndex).animate({
            left:'100%'
        }, timer);
        viewIndex--;
        if (viewIndex < 0) {
            viewIndex = length - 1;
        }
        $('.main_box').eq(itemIndex).find('.slide').eq(viewIndex).css({
            left:'-100%'
        }).animate({
            left: '0%'
        },{
            duration: timer,
            complete:function(){
                animation = false;
            }
        });
    });

}); 