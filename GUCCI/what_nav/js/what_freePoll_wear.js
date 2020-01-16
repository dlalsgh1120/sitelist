$(document).ready(function(){
    var secBox = [
        {id: 1, name: "Look3", desc:"룩 확인하기", src:"what_freePoll_look01.jpg", src2:"what_freePoll_look01_hover01.jpg"},
        {id: 2, name: "Look4", desc:"룩 확인하기", src:"what_freePoll_look02.jpg", src2:"what_freePoll_look02_hover02.jpg"},
        {id: 3, name: "Look10", desc:"룩 확인하기", src:"what_freePoll_look03.jpg", src2:"what_freePoll_look03_hover03.jpg"},
        {id: 4, name: "Look21", desc:"룩 확인하기", src:"what_freePoll_look04.jpg", src2:"what_freePoll_look04_hover04.jpg"},
        {id: 5, name: "Look24", desc:"룩 확인하기", src:"what_freePoll_look05.jpg", src2:"what_freePoll_look05_hover05.jpg"},
        {id: 6, name: "Look28", desc:"룩 확인하기", src:"what_freePoll_look06.jpg", src2:"what_freePoll_look06_hover06.jpg"},
        {id: 7, name: "Look39", desc:"룩 확인하기", src:"what_freePoll_look07.jpg", src2:"what_freePoll_look07_hover07.jpg"},
        {id: 8, name: "Look43", desc:"룩 확인하기", src:"what_freePoll_look08.jpg", src2:"what_freePoll_look08_hover08.jpg"},
        {id: 9, name: "Look53", desc:"룩 확인하기", src:"what_freePoll_look09.jpg", src2:"what_freePoll_look09_hover09.jpg"},
        {id: 10, name: "Look73", desc:"룩 확인하기", src:"what_freePoll_look010.jpg", src2:"what_freePoll_look010_hover010.jpg"},
        {id: 11, name: "Look85", desc:"룩 확인하기", src:"what_freePoll_look011.jpg", src2:"what_freePoll_look011_hover011.jpg"}
    ];
    var scrollTop, headerHeight;
    var html = "";
    var txt = "";
    var id, name, src;
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
        window.location.href = "../gift_nav.html";
    };
    document.getElementById('n_span05').onclick = function(){
        window.location.href = "../acc_wacth.html";
    };
    document.getElementById('n_span06').onclick = function(){
        window.location.href = "../perfume_nav.html";
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

        $('.itemImg').eq(index).css('left', '0%');
        $('#lable_name').html(item[0].name);
    };

    $(document).on('click','#front', function(){
        $('.lookImg').eq(index).attr('src', 'img/'+secBox[index].src);
    });
    $(document).on('click','#back', function(){
        $('.lookImg').eq(index).attr('src', 'img/'+secBox[index].src2);
    });

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
                <div class= "itemImg">
                    <img class="lookImg" src="img/${secBox[i].src}">
                </div>
            `;
            html = html + txt;
        }
        $('.wear_look_left').html(html);
        getUrl();
    }
    function setLable(_idx){
        var lable = secBox[_idx].name;
        $('#lable_name').html(lable);
        $('#front').trigger('click');
    }
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
    };
    
});