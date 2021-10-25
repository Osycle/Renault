"use strict";



(function() {
	$(function() {

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


		new Swiper('.swiper', {
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

		var swiper_def = new Swiper('.swiper-def', {
		  // Optional parameters
		  direction: 'horizontal',
		  loop: false,
			slidesPerView: 1,
			spaceBetween: 25,
			//autoHeight: true,
			breakpoints: {
				991: {
					slidesPerView: 3
				}
			},
			
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





		//theiaStickySidebar
		$('.sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 30
    });

		//responsiveTabs
    $('#responsiveTabsDemo').responsiveTabs({
    	startCollapsed: 'accordion'
		});



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
			//"counters": true, Считает кол-во элементов
			//extensions: [
				//"wrapper-bg",
				//"theme-black",
				//"theme-white",
				//"fullscreen",
				//"listview-50",
				//"fx-panels-slide-up",
				//"fx-listitems-drop",
				//"border-offset",
				//"position-front",
				//"position-right",
			//],
			extensions 	: [ 
				"position-right", 
				"fullscreen", 
				"multiline",
				"listview-50",
				"theme-white",
				//"border-full" 
			],
			
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 2,
					content: [
						'<div class="close-btn">' +
						'<a href="#page">'+
							'<svg viewBox="0 0 30 30"><path d="M29.999 2.512L27.5.012 14.999 12.504 2.498.012l-2.497 2.5L12.5 15.001.001 27.488l2.497 2.5 12.501-12.49L27.5 29.988l2.497-2.5-12.499-12.487z"></path></svg>'+
						'</a>' +
						'</div>'
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

   $(document).on("click", ".header a:not([subdown-click]), [subdown-click-close]", function(){
      if($("[subdown-click].subdown-active").length)
        $("[subdown-click].subdown-active").trigger("click");
    })
		$(document).on("click", "[subdown-click]", function(){
			var that = $(this)
			var num = that.attr("subdown-click");
      ($("[subdown]")).removeClass("subdown-active");
			if(that.hasClass("bg-shadow")){
				$("a[subdown-click='"+num+"']").trigger("click");
				return;
			}
			if(!that.hasClass("subdown-active")){
				$("a[subdown-click]").removeClass("subdown-active");
				that.add($("[subdown="+num+"]")).addClass("subdown-active");
				$("body").addClass("subdown-active");
			}else{
				that.add($("[subdown="+num+"]")).removeClass("subdown-active");
				$("body").removeClass("subdown-active");
			}
		})
		$(document).on("click", ".subdown-wrapper", function(e){
			if($(e.target).hasClass("subdown-wrapper"))
				$("[subdown-click].subdown-active").trigger("click");
    })






  // Pass single element
  const multiDefault = function(){
    const elements = document.querySelectorAll('.js-choice');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ''
      });
    })
  }
  multiDefault();





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