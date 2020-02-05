$(document).ready(function(){
    var index = 0;
    var html = "";

    var index_slide = 0;
    var timer = 2000;
    var length = $('.move_slide').length;
    var animation = false;
    var auto;

    autoplay();
    setPage(index);
    $(document).on('click', '.nav_li', function(){
        index = $(this).index();
        setPage(index);
    });
    
    var pageHTML = "";
    function setPage(idx){
        switch(idx){
            case 0 : {
                pageHTML = 
                `
                
                `;
                break;
            }
            case 1 : {
                pageHTML = 
                `
                `;
                break;
            }
            case 2 : {
                pageHTML = 
                `
                `;
                break;
            }
            case 3 : {
                pageHTML = 
                `
                `;
                break;
            }
            case 4 : {
                pageHTML = 
                `
                `;
                break;
            }
        }
        $('.main_container').html(pageHTML);
    }

    $('.move_slide').eq(0).css({
        left: 0
    });
    $(document).on('click', '.right_btn', function(){
        $('nav').addClass('block');
    });
    
    $(document).on('click', '#right_btn', function(){
        if(animation){
            return;
        }
        animation = true;

        $('.move_slide').eq(index_slide).animate({
            left: '-100%'
        }, timer);
        index_slide ++;
        index_slide = index_slide % length;

        $('.move_slide').eq(index_slide).css({
            left: '100%'
        }).animate({
            left: '0%'
        },{
            duration: timer,
            complete:function(){
                animation = false;
            }
        });
    });
    $(document).on('click', '#left_btn', function(){
        if(animation){
            return;
        }
        $('.move_slide').eq(index_slide).animate({
            left:'100%'
        }, timer);
        index_slide--;
        if (index_slide < 0) {
            index_slide = length - 1;
        }
        $('.move_slide').eq(index_slide).css({
            left:'-100%'
        }).animate({
            left: '0%'
        }, timer);
    });

    function next(){
        if(animation){
            return;
        }
        animation = true;

        $('.move_slide').eq(index_slide).animate({
            left: '-100%'
        }, timer);
        index_slide ++;
        index_slide = index_slide % length;

        $('.move_slide').eq(index_slide).css({
            left: '100%'
        }).animate({
            left: '0%'
        },{
            duration: timer,
            complete:function(){
                animation = false;
            }
        });
        action(index_slide);
    }
    function autoplay(){
        clearInterval(auto);
        auto = setInterval(function(){
            next();
        }, timer);
    }
    function action(_ind){
        $('.in_bull').removeClass('active').eq(_ind).addClass('active');
    }
});