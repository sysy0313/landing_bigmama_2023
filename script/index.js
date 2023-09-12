// 모바일 메뉴
const mobile_btn = document.querySelector('.mobile_btn')
const mobile_nav = document.querySelector('.mobile_nav')
mobile_btn.addEventListener('click', function(e){
    e.preventDefault();
    mobile_btn.classList.toggle('active')
    mobile_nav.classList.toggle('active')
})

// 슬라이드
const main_top_slide = new Swiper('#main_top_slide',{
    autoplay:{
        delay:0,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    },
    speed: 5000,
    loop:true, 
    slidesPerView:'auto',
    spaceBetween:'20',
    loopAdditionalSlides: 1,
    breakpoints:{
        //해상도:{옵션:값} 작은값->큰값
        320:{slidesPerView:1}, //320
        430:{slidesPerView:2}, //430이상일 때
        680:{slidesPerView:3}, //680이상일 때
        1050:{slidesPerView:4}, //1050이상일 때
        1150:{slidesPerView:5},//1150이상일 경우 슬라이드 5개 표시
    },
});
const menu_slide = new Swiper('#menu_slide',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    },
    loop:true, 
    slidesPerView:'4',
    spaceBetween:'20',
    breakpoints:{
        //해상도:{옵션:값} 작은값->큰값
        320:{slidesPerView:1}, //320
        400:{slidesPerView:2}, //430이상일 때
        750:{slidesPerView:3}, //1050이상일 때
        1000:{slidesPerView:4},//1150이상일 경우 슬라이드 5개 표시
    },
});
// header scroll
const header = document.querySelector('header')
window.addEventListener('scroll',function(){
    if(window.pageYOffset == 0){
        header.style.background = 'none'
    }else{
        header.style.background = '#fff'
    }
})
// 
//why
const why = document.querySelector('#why')
const why_contents = document.querySelectorAll('#why .contents')
const why_title = document.querySelector('#why .title')
// menu
const menu = document.querySelector('#menu')
const menu_title = document.querySelector('#menu .title')
// process
const process = document.querySelector('#process')
const process_title = document.querySelector('#process .title')
const process_checkpoint = document.querySelectorAll('#process .checkpoint ul li')
const step_bg = document.querySelector('#process .btm')
const process_step = document.querySelectorAll('#process .process_step')
// qna
const qna = document.querySelector('#qna')
const qna_title = document.querySelector('#qna .title')
const qna_dl = document.querySelectorAll('#qna dl')
// ask
const ask = document.querySelector('#ask')
const ask_title = document.querySelector('#ask .title')
// 스크롤이벤트
window.addEventListener('scroll', function(){
    // #why
    if(window.pageYOffset >= why.offsetTop-700){
        why_title.classList.add('active')
        for(let i of why_contents){i.classList.add('active')}
    }
    // #menu
    if(window.pageYOffset >= menu.offsetTop-700){
        menu_title.classList.add('active')
    }
    // #process
    if(window.pageYOffset >= process.offsetTop-700){
        process_title.classList.add('active')
        for(let i of process_checkpoint){i.classList.add('active')}
    }
    if(window.pageYOffset >= step_bg.offsetTop){
        for(let i of process_step){i.classList.add('active')}
    }
    // qna
    if(window.pageYOffset >= qna.offsetTop-700){
        qna_title.classList.add('active')
        for(let i of qna_dl){i.classList.add('active')}
    }
    // ask
    if(window.pageYOffset >= ask.offsetTop-700){
        ask_title.classList.add('active')
    }
})

