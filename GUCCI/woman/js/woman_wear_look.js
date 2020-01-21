$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 실크 셔츠", desc:"쇼핑하기",price: '￦2,700,000', src:"woman_nav_img01",src2:"woman_wear_img01",type: false},
        {id: 2, name: "Disney x Gucci 실크 파자마 팬츠", desc:"쇼핑하기",price: '￦2,150,000', src:"woman_nav_img02",src2:"woman_wear_img02", type: false},
        {id: 3, name: "울 실크 팬츠", desc:"쇼핑하기", price: '￦1,600,000',src:"woman_nav_img03", src2:"woman_wear_img03",type: false},
        {id: 4, name: "캐디 울 실크 숏 드레스", desc:"쇼핑하기", price: '￦2,700,000',src:"woman_nav_img04",src2:"woman_wear_img04", type: false},
        {id: 5,name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000',src:"woman_nav_img05",src2:"woman_wear_img05", type: true},
        {id: 6, name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000', src:"woman_nav_img06",src2:"woman_wear_img06", type: false},
        {id: 7, name: "홀스슈 디테일의 트위드 스커트", desc:"쇼핑하기",  price: '￦2,700,000',src:"woman_nav_img07",src2:"woman_wear_img07",type: false},
        {id: 8, name: "라이언 헤드 토글 디테일의 트위드 재킷", desc:"쇼핑하기", price: '￦4,000,000', src:"woman_nav_img08",src2:"woman_wear_img08", type: false},
        {id: 9, name: "Disney x Gucci 저지 드레스", desc:"쇼핑하기", price: '￦2,000,000',src:"woman_nav_img09", src2:"woman_wear_img09",type: false},
        {id: 10, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000',src:"woman_nav_img010",src2:"woman_wear_img010", type: true},
        {id: 11, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000',src:"woman_nav_img011",src2:"woman_wear_img011", type: false},
        {id: 12, name: "Disney x Gucci 1980년대 데님 팬츠", desc:"쇼핑하기",  price: '￦1,350,000',src:"woman_nav_img012",src2:"woman_wear_img012", type: false},
        {id: 13, name: "Disney x Gucci 오버사이즈 스웨트셔츠", desc:"쇼핑하기",  price: '￦1,550,000',src:"woman_nav_img013",src2:"woman_img013", type: false},
        {id: 14, name: "Disney x Gucci 코튼 드릴 스커트", desc:"쇼핑하기",  price: '￦1,250,000',src:"woman_nav_img014",src2:"woman_wear_img014", type: false}
    ];
    var scrollTop, headerHeight;
    var animation = false;
    var timer = 500;
    var itemIndex;
    var viewIndex;
    var length = 3;
    
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
        window.location.href = "../gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "../watch_acc/acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "../perfume/perfume_nav.html";
    };


    getUrl();
    function getUrl(){
        var pageUrl = window.location.search.substring(1);
        var value = pageUrl.split('=')[1] * 1;
        var item = secBox.filter(function(res){
            return res.id === value;
            
        });


        // $('#slide_img01').attr('src', 'img/'+item[0].src+'.jpg');
        // $('#slide_img02').attr('src2', 'img/'+item[0].src2 +'.jpg');
        // $('#slide_img03').attr('src4', 'img/'+item[0].src4);
        // $('#slide_img04').attr('src5', 'img/'+item[0].src5);
        // $('#slide_img05').attr('src6', 'img/'+item[0].src6);
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

        itemIndex = $(this).parent().parent().index();
        $('.main_box').eq(itemIndex).find('.slide').eq(viewIndex).animate({
            left: '-100%'
        }, timer);
        viewIndex++;
        viewIndex = viewIndex % length;
        $('.main_box').eq(itemIndex).find('.slide').eq(viewIndex).css({
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