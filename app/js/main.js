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
		/*SmoothScroll*/
		var scroll = new SmoothScroll('smooth-scroll');

		/* bootstrap tooltip*/		
		$('[data-toggle="tooltip"]').tooltip({
			html: true
		})


		Swiper.extendDefaults(
			{
				direction: 'horizontal',
				loop: false,
				slidesPerView: 1,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				scrollbar: {
					el: '.swiper-scrollbar',
				},
			}
		)
		new Swiper('.swiper', {
		  navigation: {
		    nextEl: '.swiper-btn-next',
		    prevEl: '.swiper-btn-prev',
		  },
		});

		window.swiperInit = function(d){
			$("[swiper-init]").map(function(i, el){
				var options = $(el).attr("swiper-init")
				.replace(/(['" \n\t])/gim, '')
				.replace(/({[0-9]+|[a-zA-Z-_\.]+)/gim, t=>{
						if(/{/.test(t))
							return `{"${t.substring(1, t.length)}"`;
						else
							return `"${t}"`;
					}
				)
				console.log(options)
				options = JSON.parse(options);
				window.s = new Swiper($(el), options);
				if(d)
					s.destroy($(el));
			})
		}
		swiperInit();

		new Swiper('.swiper-compl', {
			slidesPerView: 1,
			spaceBetween: 25,
			//autoHeight: true,
			breakpoints: {
				991: {
					slidesPerView: 3
				}
			},
		});

		new Swiper('.swiper-alone', {
		  // Optional parameters
		  direction: 'horizontal',
		  loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			breakpoints: {
				991: {
					slidesPerView: 1
				}
			},
		  // Navigation arrows
		  navigation: {
		    nextEl: '.swiper-btn-next',
		    prevEl: '.swiper-btn-prev',
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
    $('.responsive-tab').responsiveTabs({
    	startCollapsed: 'accordion'
		});
    $('.responsive-tab-leftbar').responsiveTabs({
    	startCollapsed: 'accordion',
			active: 0
		});


		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {
					// // After the show-slide-animation has ended - play the vide in the current slide
					// this.content.find('video').trigger('play')
					// // Attach the ended callback to trigger the fancybox.next() once the video has ended.
					// this.content.find('video').on('ended', function() {
					// 	$.fancybox.next();
					// });
				},
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

		//Лимит текста
		$("[data-text-limit]").map(function( i, el ){
			el = $(el);
			var text = el.text();
			var textLimit = el.attr("data-text-limit");

			if( text.length > textLimit*1 ){
				text = text.substring(0, textLimit )
				el.text( text+ " ..." );
			}
		})
		// Отправка формы с помощью Ajax
		$(document).on("submit.uniq", "[formaj]", function(e){
			e.preventDefault();
			var that = $(this);
			console.log(this)
			var successEl = $(".form-success-block");
			var url = that.attr("action");
			var form_data = $(this).serialize(); // Собираем все данные из формы
			that.find('[type="submit"]').addClass("pe-none")
			$.ajax({
        type: "POST", // Метод отправки
        url: url, // Путь до php файла отправителя
        data: form_data,
        success: function(res) {
					that.find('[type="submit"]').removeClass("pe-none");
          // Код в этом блоке выполняется при успешной отправке сообщения
					res = JSON.parse(res);
					if (res.status == 200){
						that.addClass("hide");
						successEl.addClass("active");
					}
					console.log(res.status);
          //alert("Ваше сообщение отправлено!");
        }
      });
		})

	window.getUrlParameter = function (name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

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

	$("form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			iagree:{
				required: "Поставьте галочку",
			},
			phone: {
				required: "Введите номер телефона",
				minlength: "Не менее 12-ти цифр"
			},
			name: {
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email"
			},
		}
	})


	$(".iframe-el").map(function(i, el){
		$(el).on("load", function(){
			var h = this.contentDocument.body.offsetHeight;
			$(this).css("min-height", h+1)
			//console.log(this.contentDocument.body.offsetHeight);
		})
		//console.log(el.contentDocument);
	})
	$(window).resize(function(){
		$(".iframe-el").map(function(i, el){
			$(el).trigger("load");
		})
	})

	/* SELECT2 */
	if ( $(".js-select").length )
		$(".js-select").select2({
			placeholder: true,
			minimumResultsForSearch: Infinity,
			allowClear: false
		});

		$("[hidden-sm]").map(function(i, el){
			console.log(el.remove())
		})

	var dayMilliseconds = 24*60*60*1000;
	var currentDate = new Date();
	var OldDate = currentDate.setTime(currentDate.getTime() - 0);
	$( function() {
		window.a = 	$( "#datepicker" ).datepicker({
			monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesSpecial : ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'],
			dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			minDate: new Date(OldDate),
			onUpdateDatepicker: function (d) {
				var currentDateSelected = 
					d.currentDay+" "+
					d.settings.monthNamesSpecial[d.currentMonth]+" "+
					d.currentYear;
				$(".datepicker-date-selected").text(currentDateSelected);
				d.currentDay = d.currentDay<10 ? "0"+d.currentDay : d.currentDay;
				d.currentMonth = d.currentMonth<10 ? "0"+d.currentMonth : d.currentMonth;
				console.log(d.currentYear+"-0"+d.currentMonth+"-"+d.currentDay);
				$(d.input[0]).find(".datepicker-input")
					.val(d.currentYear+"-"+d.currentMonth+"-"+d.currentDay);
				//console.log(d);
			}
		});
	});

});})(jQuery);

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







			
// new Vue({
// 	el: '.swiper',
// 	data: {
// 		desktop: false,
// 	},
// 	mounted(){
// 		var v = this
// 		v.desktop = window.innerWidth > 992
// 		$(window).resize(function(){
// 			v.desktop = window.innerWidth > 992
// 		})
// 	}
// })