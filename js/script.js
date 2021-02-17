/*=============================================
=            BANNER           =
=============================================*/

$(".fade-slider").jdSlider({

	isSliding: false,
	isAuto: true,
	isLoop: true,
	isDrag: false,
	interval: 5000,
	isCursor: false,
	speed: 3000
});


var alturaBanner = $(".fade-slider").height();
// console.log("alturaBanner", alturaBanner);

$(".bannerEstatico").css({"height":alturaBanner+"px"});

$(window).scroll(function(){
	var posY = window.pageYOffset;
	console.log("posY", posY);

	if(posY > alturaBanner){
		$("header").css({"background":"white"});
		$("header .logotipo").css({"filter":"invert(100%)"});
		$(".fa-search, .fa-bars").css({"color":"black"});
	}
	else{
		$("header").css({"background":"rgba(0,0,0,.5)"});
		$("header .logotipo").css({"filter":"invert(0%)"});
		$(".fa-search, .fa-bars").css({"color":"white"});
	}
});