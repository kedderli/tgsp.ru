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