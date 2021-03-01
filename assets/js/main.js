// start header
$(".header-menu-open").click(function() {
	$("body").toggleClass("no-scroll");
	$(".header").toggleClass("active");
	$(".header-menu-drop").toggleClass("open");
});

$(window).scroll(function() {
	if($(window).outerWidth() > 992) {
		if($(window).scrollTop() >= 100) {
			$(".header-copyright").addClass("d-none");
			$(".header-menu").addClass("show");
		} else {
			$(".header-copyright").removeClass("d-none");
			$(".header-menu").removeClass("show");
		}
	}
});
// end header

// start main homepage slider
if (document.querySelector('.main-hp-slider-list')) {
	$('.main-hp-slider-list').slick({
		dots: true,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: 'main-hp-slider-nav',
		prevArrow: '.main-hp-slider-prev',
		nextArrow: '.main-hp-slider-next',
	});
}
// end main homepage slider

// start homepage description
if (document.querySelector('.description-cards-list')) {
	$('.description-cards-list').slick({
		dots: true,
		infinite: false,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: 'description-slider-nav',
		prevArrow: '.description-slider-prev',
		nextArrow: '.description-slider-next',
		responsive: [
			{
				breakpoint: 9999,
				settings: "unslick"
			},
			{
				breakpoint: 769,
				settings: {
					dots: true,
					infinite: false,
					speed: 400,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
// end homepage description

// start brands list
if (document.querySelector('.brand-list')) {
	$('.brand-list').slick({
		dots: false,
		infinite: false,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 6,
		rows: 4,
		dotsClass: 'brands-slider-nav',
		prevArrow: '.brands-slider-prev',
		nextArrow: '.brands-slider-next',
		arrows: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					rows: 5,
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					rows: 2,
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					rows: 4,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					rows: 4,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
// end brands list

// start advantage
if (document.querySelector('.advantage-section-list')) {
	$('.advantage-section-list').slick({
		dots: false,
		infinite: false,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '.advantage-prev',
		nextArrow: '.advantage-next',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
// end advantage

// start price
if (document.querySelector('.price-section-list')) {
	$('.price-section-list').slick({
		dots: false,
		infinite: false,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: '.price-prev',
		nextArrow: '.price-next',
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
// end price