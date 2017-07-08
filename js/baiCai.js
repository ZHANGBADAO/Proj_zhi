//轮播图------------------------------------
var mySwiper = new Swiper ('.swiper-container1', {
	slidesPerView : 2.7,
	slidesOffsetAfter : 40,
 });
var mySwiper2 = new Swiper ('.swiper-container2', {
	slidesPerView : 2.7,
	slidesOffsetAfter : 80,
//	slidesOffsetAfter : 480,
//	slidesOffsetBefore : 100,
 });
//向下滚动 固定导航----------------------------------
$(window).scroll(function(){
		let scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if (scrolltop>=250) {
			$("header").css({top:"-1.6rem",transition:"0.5s"});
			$("nav").css({top:"0",transition:"0.5s"});
		}else{
			$("header").css({top:"0"});
			$("nav").css({top:"1.6rem"});
		}
});	
		
