function main(){
    var html = `
        <main>
            <input type="button" value="〈" class="btn" id="left_btn">
            <input type="button" value="〉" class="btn" id="right_btn">
            <div class="slide_img">
                <div class="move_slide">
                    <h1>Future Innovated,</h1>
                    <p>Innovation Realized</p>
                </div>
                <div class="move_slide">
                    <p>Future Innovated,</p>
                    <h1>Innovation Realized</h1>
                </div>
            </div>
            <div class="slide_bull"> 
                <div class="in_bull active"></div>
                <div class="in_bull"></div>   
            </div>
        </main>
        <section>
            <div class="sec01">
                <ul class="sec01_ul"> 
                    <li class="sec01_li">
                        우리는 혁신의 결과물이 아닌 <b>혁신을 실현하게 만드는 방법</b>에 대해 연구합니다.
                    </li>
                    <li class="sec01_li">
                        혁신을 발현하게 만드는 철학과 영감에서부터
                        <b>혁신가들의 생각과 협업하는 방식</b>에 대해 이야기하고자 합니다.
                    </li>
                    <li class="sec01_li">
                        더 많은 사람들이 <b>스스로 혁신을 실현</b>할 수 있도록 한 발 앞서 준비하겠습니다.
                    </li>
                </ul>
            </div>
            <div class="sec02">
                <div class="sec02_text">
                    <h1>커팅에지 실험실 
                        <br>
                        ‘한국테크노돔’</h1>
                    <p>과연 일하는 공간은 기업이 추구하는 가치를얼만큼 반영할 수 있을까?</p>
                </div>
            </div>
            <div class="sec03">
                <div class="sec03_text">
                    <h1>보이지 않는 시스템까지,
                        <br>
                        'McLaren' 제품 디자이너</h1>
                    <p>F1 레이싱카로 유명한 맥라렌의 제품 디자이너 최종우는눈에 보이지 않는 경험과 서비스를 디자인한다.</p>
                </div>
            </div>
            <div class="sec04">
                <div class="sec04_text">
                    <h1>타이어
                        <br>
                        패션을 입다</h1>
                    <p>한국타이어가 지금 가장 젊고 '핫한' 피치스와손을 잡은 이유는 무엇일까?</p>
                </div>
            </div>
            <div class="sec05">
                <div class="sec05_box">
                    <div class="sec05_left">
                        <h1>3D 프린팅,
                            <br>
                            소재의 무한한 가능성
                        </h1>
                        <p>
                            새로운 소재는 언제나 새로운 혁신을 일으켜 왔다.
                        </p>    
                    </div>
                    <div class="sec05_right">
                        <img src="img/sec_img04.jpg" alt="">
                    </div>
                </div>
                <div class="sec05_box">
                    <div class="sec05_left">
                        <img src="img/sec_img05.jpg" alt="">
                    </div>
                    <div class="sec05_right">
                        <h1>3D 프린팅,
                            <br>
                            소재의 무한한 가능성
                        </h1>
                        <p>
                            새로운 소재는 언제나 새로운 혁신을 일으켜 왔다.
                        </p> 
                    </div>
                </div>
                <div class="sec05_box">
                    <div class="sec05_left">
                        <h1>3D 프린팅,
                            <br>
                            소재의 무한한 가능성
                        </h1>
                        <p>
                            새로운 소재는 언제나 새로운 혁신을 일으켜 왔다.
                        </p>    
                    </div>
                    <div class="sec05_right">
                        <img src="img/sec_img06.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
    `;
    return html;
}

$(document).ready(function(){
    var index = 0;
    var html = "";

    var index_slide = 0;
    var timer = 2000;
    var length = $('.move_slide').length;
    var animation = false;
    var auto;

    autoplay();
    $(document).on('click', '.nav_li', function(){
        index = $(this).index();
        setPage(index);
    });

    $(document).on('click', '.right_btn', function(){
        $('nav').addClass('block');
    });

    $('.move_slide').eq(0).css({
        left: 0
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