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
        {id: 1, name: "Look17", desc:"룩 확인하기", src:"what_fallWinter_look01.jpg", src2:"what_fallWinter_look01_hover01.jpg"},
        {id: 2, name: "Look19", desc:"룩 확인하기", src:"what_fallWinter_look02.jpg", src2:"what_fallWinter_look02_hover02.jpg"},
        {id: 3, name: "Look21", desc:"룩 확인하기", src:"what_fallWinter_look03.jpg", src2:"what_fallWinter_look03_hover03.jpg"},
        {id: 4, name: "Look22", desc:"룩 확인하기", src:"what_fallWinter_look04.jpg", src2:"what_fallWinter_look04_hover04.jpg"},
        {id: 5, name: "Look27", desc:"룩 확인하기", src:"what_fallWinter_look05.jpg", src2:"what_fallWinter_look05_hover05.jpg"},
        {id: 6, name: "Look50", desc:"룩 확인하기", src:"what_fallWinter_look06.jpg", src2:"what_fallWinter_look06_hover06.jpg"},
        {id: 7, name: "Look62", desc:"룩 확인하기", src:"what_fallWinter_look07.jpg", src2:"what_fallWinter_look07_hover07.jpg"},
        {id: 8, name: "Look66", desc:"룩 확인하기", src:"what_fallWinter_look08.jpg", src2:"what_fallWinter_look08_hover08.jpg"},
        {id: 9, name: "Look75", desc:"룩 확인하기", src:"what_fallWinter_look09.jpg", src2:"what_fallWinter_look09_hover09.jpg"},
    ];

    getUrl();
    function getUrl(){
        var pageUrl = window.location.search.substring(1);
        var value = pageUrl.split('=')[1] * 1;
        console.log(value);
        var item = secBox.filter(function(res){
            return res.id === value;
        });

        $('#lookImg').attr('src', 'img/'+item[0].src);
        $('#lable_name').html(item[0].name);

        $(document).on('click','#front', function(){
            $('#lookImg').attr('src', 'img/'+item[0].src);
        });
        $(document).on('click','#back', function(){
            $('#lookImg').attr('src', 'img/'+item[0].src2);
        });
    };

    // var html = "";
    // var txt = "";
    // var id, name, src;
    var index = 0;
    var length = secBox.length;
    var timer;
    // getImgs();
    // setLable(index);
    $('.itemImg').eq(0).css('left', '0%');
    $(document).on('click', '#left_btn', function(){
        prev();
    });
    $(document).on('click', '#right_btn', function(){
        next();
    });
    // function getImgs(){
    //     html = "";
    //     for(var i in secBox){
    //         txt = `
    //             <div class= "itemImg">
    //                 <img src="img/"${secBox[i].src}">
    //             </div>
    //         `;
    //         html = html + txt;
    //     }
    //     $('.wear_look_left').html(html);
    // }
    // function setLable(_idx){
    //     var lable = secBox[_idx].name;
    //     $('#lable_name').html(lable);
    // }
    function next(){
        $('.itemImg').eq(index).animate({
            left: "-100%"
        }, timer);
        index++;
        index = index%length;
        setLable(index);

        $('.itemImg').eq(index).css({
            left: "100%"
        }). animate({
            left: "0%"
        }, timer);
    }
    function prev(){
        $('.itemImg').eq(index).animate({
            left: '100%'
        }, timer);

        index--;
        if (index < 0) {
            index = length - 1;
        }
        setLable(index);

		$('.itemImg').eq(index).css({
			left: '-100%'
		}).animate({
			left: '0%'
		}, timer);
    }
    
});