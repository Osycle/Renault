"use strict";



(function() {
	$(function() {
		//$("img").attr("src", "img/other/short-news-5.jpg");
		//$("[style*='background-image']").attr("style", "background-image: url('img/other/short-news-5.jpg')");

		/*AOS*/
		if( "AOS" in window ){
			AOS.init({
				offset: 100,
				once: true,
				duration: 1100,
				delay: 150
			});
			setTimeout(function() { AOS.refresh(); }, 1);
		}

		/* bootstrap tooltip*/		
		$('[data-toggle="tooltip"]').tooltip({
			html: true
		})
		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				minimumResultsForSearch: Infinity,
				allowClear: false
			});
		

		const swiper = new Swiper('.swiper', {
		  // Optional parameters
		  direction: 'horizontal',
		  loop: false,

		  // If we need pagination
		  pagination: {
		    el: '.swiper-pagination',
		  },

		  // Navigation arrows
		  navigation: {
		    nextEl: '.swiper-btn-next',
		    prevEl: '.swiper-btn-prev',
		  },
		  // And if we need scrollbar
		  scrollbar: {
		    el: '.swiper-scrollbar',
		  },
		});


		$('[data-toggle="click"]').on("click", function(e){
			var that = $(this);
			e.preventDefault();
			var activeClass = that.attr("toggle-class") || "active";
			that.toggleClass(activeClass);
			$(that.attr("href")).toggleClass(activeClass);
		})

		$('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 30
    });

		$(".menu-items a").on("click", function(){
			location.href = $(this).attr("href");
			console.log(location.hash, $(this).attr("href"))
			if( location.pathname+location.hash == $(this).attr("href") )
				location.reload();
		})
    

		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				toolbar : true,
				keyboard : true,
				thumbs : {
					autoStart   : false
				},
				touch : false,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});



		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				//"theme-dark",
				"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: ""
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});


		// SMOTHSCROLL-LINK
		window.smoothScroll = new SmoothScroll('[scroll-link]', {
			speed: 500,
			speedAsDuration: true
		});



	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent),
		isEdge = /Edge/i.test(navigator.userAgent);


// COMMON FUNCTION




function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top + 100,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}


function spaceBetweenNum(str, char) {
	str = str+"";
	char = char || ","
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(str))
		str = str.replace(pattern, "$1"+char+"$2");
	return str;
}