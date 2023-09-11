// 슬라이드
const main_top_slide = new Swiper('#main_top_slide',{
    autoplay:{
        delay:0,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    },
    speed: 5000,
    loop:true, 
    slidesPerView:'5',
    spaceBetween:'20',
    loopAdditionalSlides: 1,
});
const menu_slide = new Swiper('#menu_slide',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    },
    loop:true, 
    slidesPerView:'4',
    spaceBetween:'20',
});
const header = document.querySelector('header')
window.addEventListener('scroll',function(){
    if(window.pageYOffset == 0){
        header.style.background = 'none'
    }else{
        header.style.background = '#fff'
    }
})

