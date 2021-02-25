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