$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Disney x Gucci 실크 셔츠", desc:"쇼핑하기",price: '￦2,700,000', src:"woman_nav_img01.jpg", src2:"woman_nav_img01_hover.jpg",src3:"woman_nav_img01_hover02.jpg" ,src4:"woman_nav_img01_hover03.jpg",type: false},
        {id: 2, name: "Disney x Gucci 실크 파자마 팬츠", desc:"쇼핑하기",price: '￦2,150,000', src:"woman_nav_img02.jpg", src2:"woman_nav_img02_hover.jpg",src3:"woman_nav_img02_hover02.jpg",src4:"woman_nav_img02_hover03.jpg", type: false},
        {id: 3, name: "울 실크 팬츠", desc:"쇼핑하기", price: '￦1,600,000',src:"woman_nav_img03.jpg", src2:"woman_nav_img03_hover.jpg",src3:"woman_nav_img03_hover02.jpg",src4:"woman_nav_img03_hover03.jpg", type: false},
        {id: 4, name: "캐디 울 실크 숏 드레스", desc:"쇼핑하기", price: '￦2,700,000',src:"woman_nav_img04.jpg", src2:"woman_nav_img04_hover.jpg",src3:"woman_nav_img04_hover02.jpg",src4:"woman_nav_img01_hover03.jpg",src4:"woman_nav_img04_hover03.jpg", type: false},
        {id: 5,name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", src:"woman_nav_img05.jpg", src2:"woman_nav_img05.jpg", src3:"woman_nav_img05.jpg", src4:"woman_nav_img05.jpg", type: true},
        {id: 6, name: "Disney x Gucci 나일론 재킷", desc:"쇼핑하기", price: '￦3,300,000', src:"woman_nav_img06.jpg", src2:"woman_nav_img06_hover.jpg",src3:"woman_nav_img06_hover02.jpg",src4:"woman_nav_img06_hover03.jpg", type: false},
        {id: 7, name: "홀스슈 디테일의 트위드 스커트", desc:"쇼핑하기",  price: '￦2,700,000',src:"woman_nav_img07.jpg", src2:"woman_nav_img07_hover.jpg",src3:"woman_nav_img07_hover02.jpg",src4:"woman_nav_img07_hover03.jpg" ,type: false},
        {id: 8, name: "라이언 헤드 토글 디테일의 트위드 재킷", desc:"쇼핑하기", price: '￦4,000,000', src:"woman_nav_img08.jpg", src2:"woman_nav_img08_hover.jpg",src3:"woman_nav_img08_hover02.jpg",src4:"woman_nav_img08_hover03.jpg", type: false},
        {id: 9, name: "Disney x Gucci 저지 드레스", desc:"쇼핑하기", price: '￦2,000,000',src:"woman_nav_img09.jpg", src2:"woman_nav_img09_hover.jpg",src3:"woman_nav_img09_hover02.jpg",src4:"woman_nav_img09_hover03.jpg", type: false},
        {id: 10, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,000,000',src:"woman_nav_img010.jpg", src2:"woman_nav_img010.jpg",src3:"woman_nav_img010.jpg",src4:"woman_nav_img010.jpg", type: true},
        {id: 11, name: "Disney x Gucci 코튼 드릴 재킷", desc:"쇼핑하기",  price: '￦2,850,000',src:"woman_nav_img011.jpg", src2:"woman_nav_img011_hover.jpg",src3:"woman_nav_img011_hover02.jpg",src4:"woman_nav_img011_hover03.jpg", type: false},
        {id: 12, name: "Disney x Gucci 1980년대 데님 팬츠", desc:"쇼핑하기",  price: '￦1,350,000',src:"woman_nav_img012.jpg", src2:"woman_nav_img012_hover.jpg",src3:"woman_nav_img012_hover02.jpg",src4:"woman_nav_img012_hover03.jpg", type: false},
        {id: 13, name: "Disney x Gucci 오버사이즈 스웨트셔츠", desc:"쇼핑하기",  price: '￦1,550,000',src:"woman_nav_img013.jpg", src2:"woman_nav_img013_hover.jpg",src3:"woman_nav_img013_hover02.jpg",src4:"woman_nav_img013_hover03.jpg", type: false},
        {id: 14, name: "Disney x Gucci 코튼 드릴 스커트", desc:"쇼핑하기",  price: '￦1,250,000',src:"woman_nav_img014.jpg", src2:"woman_nav_img014_hover.jpg",src3:"woman_nav_img014_hover02.jpg",src4:"woman_nav_img014_hover03.jpg", type: false}
    ];
    var scrollTop, headerHeight;
    var html = "";
    var text = "";
    var id, name, src, src2, price;
    var index = 0;
    var item;
    var length = secBox.length;
    var timer;
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

    function getUrl(){
        var pageUrl = window.location.search.substring(1);
        var value = pageUrl.split('=')[1] * 1;
        item = secBox.filter(function(res, idx){
            if(res.id === value){
                index = idx;
                return res;
            }
        });

        $('.lookImg').eq(index).css('left', '0');
        $('#lable_name').html(item[0].name);
        $('#lable_price').html(item[0].price);
    };

    
    getImgs();
    $(document).on('click', '#left_btn', function(){
        prev();
    });
    $(document).on('click', '#right_btn', function(){
        next();
    });

    function getImgs(){
        html = "";
        for(var i in secBox){
            txt = `
                    <div class="lookImg lookWear_left">
                        <img class="lookImg_iner" src="img/${secBox[i].src}">
                    </div>
                    <div class="lookImg lookWear_right">
                        <img class="lookImg_iner" src="img/${secBox[i].src2}">
                    </div>
            `;
            html = html + txt;
        }
        $('.wear_look').html(html);
        getUrl();
    }
    function setLable(_idx){
        var lable = secBox[_idx].name;
        $('#lable_name').html(lable);
        $('#lable_price').html(lable);
    }
    function next(){
        $('.lookImg').eq(index).animate({
            left: "-100%"
        }, timer);
        index++;
        index = index%length;
        setLable(index);

        $('.lookImg').eq(index).css({
            left: "100%"
        }). animate({
            left: "0%"
        }, timer);
    }
    function prev(){
        $('.lookImg').eq(index).animate({
            left: '100%'
        }, timer);

        index--;
        if (index < 0) {
            index = length - 1;
        }
        setLable(index);

		$('.lookImg').eq(index).css({
			left: '-100%'
		}).animate({
			left: '0%'
		}, timer);
    };
}); 