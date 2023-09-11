// 슬라이드
const main_top_slide = new Swiper('#main_top_slide',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,//버튼 클릭 후 자동재생유지
    },
    loop:true, 
    slidesPerView:'5',
    spaceBetween:'20',
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