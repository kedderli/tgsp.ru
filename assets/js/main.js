// start header
$(".header-menu-open").click(function() {
	$("body").toggleClass("no-scroll");
	$(".header").toggleClass("active");
	$(".header-menu-drop").toggleClass("open");
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
				breakpoint: 768,
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
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
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
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
// end price

// start pricelist
if (document.querySelector('.pricelist-section')) {
	let pricelistOpenTab = false
	$(".pricelist-tabs-item").click(function() {
		if (this.querySelector('.pricelist-tab-content').classList.contains('active')) {
			this.querySelector('.pricelist-tab-content').classList.remove("active")
		} else {
			if (pricelistOpenTab) {
				if (pricelistOpenTab.querySelector('.pricelist-tab-content').classList.contains('active')) {
					pricelistOpenTab.querySelector('.pricelist-tab-content').classList.remove("active")
				}
			}
			this.querySelector('.pricelist-tab-content').classList.add("active")
		}
		pricelistOpenTab = this
	});
}
// end price

// start example
if (document.querySelector('.example-section')) {
	$('.example-list').slick({
		dots: false,
		infinite: false,
		// arrows: true,
		speed: 400,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '.example-prev',
		nextArrow: '.example-next',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// arrows: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// arrows: true,
				}
			},
		]
	});
}
// end example

// start certificate
if (document.querySelector('.certificate-section')) {
	$('.certificate-list').slick({
		dots: false,
		infinite: false,
		arrows: true,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: '.certificate-prev',
		nextArrow: '.certificate-next',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					// arrows: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					// arrows: true,
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// arrows: true,
				}
			},
		]
	});
}
// end certificate

// start faq
if (document.querySelector('.faq-section')) {
	let faqOpenTab = false
	$(".faq-tabs-item").click(function() {
		if (this.querySelector('.faq-tab-content').classList.contains('active')) {
			this.querySelector('.faq-tab-content').classList.remove("active")
		} else {
			if (faqOpenTab) {
				if (faqOpenTab.querySelector('.faq-tab-content').classList.contains('active')) {
					faqOpenTab.querySelector('.faq-tab-content').classList.remove("active")
				}
			}
			this.querySelector('.faq-tab-content').classList.add("active")
		}
		faqOpenTab = this
	});
}
// end faq
