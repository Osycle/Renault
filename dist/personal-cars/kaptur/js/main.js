"use strict";

new Vue({
  el: '#kaptur-newoptions',
  data: {
    metrix: {},

    /*  MULTIMEDIA  */
    multimediaActiveSlide: 0,
    multimediaShowText: false,

    /*  FOR RUSSIA  */
    forRussiaActiveSlide: 0,

    /*   newOptions  */
    activeNewOption: 0,
    // newOptions: [{
    //   icon: '/img/other/kaptur/icon_1.png',
    //   name: 'Комфорт<br> за рулем',
    //   text: 'Мягкие и&nbsp;качественные материалы отделки интерьера создают ощущение уюта, а&nbsp;новое расположение клавиш управления интуитивно понятно и&nbsp;делает исполь зование всех функций автомобиля в&nbsp;пути еще удобнее.',
    //   image:'/img/other/kaptur/interior.jpg'
    // }, {
    //   icon: '/img/other/kaptur/icon_2.png',
    //   name: 'Пространство для пассажиров и&nbsp;багажа',
    //   text: 'Выбирая Renault KAPTUR, вы&nbsp;выбираете комфорт. В&nbsp;удобном и&nbsp;практичном кроссовере могут разместиться до&nbsp;пяти человек.\n' + '<br><br>\n' + 'Объем багажного отделения составляет 387&nbsp;л с&nbsp;возможностью увеличения до&nbsp;1&nbsp;200&nbsp;л благодаря складывающимся сиденьям заднего ряда (в&nbsp;пропорции 1/3 и&nbsp;2/3). Широкий проем (1002&nbsp;мм), дополнительное освещение и&nbsp;возможность складывания задних сидений обеспечивают удобство загрузки в&nbsp;багажник. Дополнительные ниши для хранения, распределенные по&nbsp;всему салону, позволяют всегда иметь необходимые вещи под рукой.',
    //   image: '/img/other/kaptur/space.jpg'
    // }, {
    //   icon: '/img/other/kaptur/icon_3.png',
    //   name: 'Инновации<br> комфорта',
    //   text: 'Управлять Renault KAPTUR стало еще удобнее. Зеркало заднего вида справится с&nbsp;яркими огнями автомобилей позади благодаря электрохромному покрытию. Круиз-контроль с&nbsp;ограничителем скорости сделает дальнюю дорогу комфортнее. \n' + '<br><br>\n' + 'Внешнее освещение и&nbsp;стеклоочистители можно настроить на&nbsp;автоматическое включение и&nbsp;выключение. Благодаря электроусилителю и&nbsp;системе кругового обзора вы&nbsp;сможете легко маневрировать на&nbsp;парковке. И&nbsp;не&nbsp;беспокойтесь о&nbsp;сохранности боковых зеркал&nbsp;&mdash; они сложатся автоматически, как только вы&nbsp;припаркуете автомобиль и&nbsp;отойдете от&nbsp;него.',
    //   image: '/img/other/kaptur/tech.jpg'
    // }, {
    //   icon: '/img/other/kaptur/icon_4.png',
    //   name: 'Мультимедийная<br> система EASY LINK',
    //   text: 'Мультимедийная система EASY LINK оснащена сенсорным 8-дюймовым экраном с&nbsp;возможностью масштабирования. Вы&nbsp;можете управлять приложениями смартфона на&nbsp;экране мультимедийной системы при помощи Android Auto, Apple CarPlay и&nbsp;Яндекс.Авто. <br><br> Вы&nbsp;всегда сможете найти оптимальный маршрут благодаря встроенной навигации и&nbsp;различным приложениям на&nbsp;вашем телефоне, в&nbsp;том числе Яндекс.Навигатору. Для вашей безопасности воспользуйтесь возможностями голосовых помощников. Алиса, Siri и&nbsp;Google Assistant помогут проложить маршрут, ответить на&nbsp;звонок, написать и&nbsp;отправить сообщение так, чтобы вы&nbsp;не&nbsp;отвлекались от&nbsp;дороги.',
    //   image: '/img/other/kaptur/media.jpg'
    // }],

    /*   Comfort / interior   */
    activeGallery: 0,
    activeGallerySlide: 0,
    // gallery: [{
    //   h3: 'Обновленный интерьер',
    //   p: 'Мягкие и&nbsp;качественные материалы отделки интерьера создают ощущение уюта, а&nbsp;новое расположение клавиш управления интуитивно понятно и&nbsp;делает использование функций автомобиля в&nbsp;пути еще удобнее.',
    //   img: 'interior.jpg',
    //   galleryimage: '/img/other/kaptur/interior.jpg'
    // }, {
    //   h3: 'Комфорт за рулем',
    //   p: 'Почувствуйте новый уровень комфорта в&nbsp;салоне Renault KAPTUR! Современная центральная консоль делает салон эстетически сбалансированным и&nbsp;функциональным. С&nbsp;центральным подлокотником и&nbsp;двумя подстаканниками для напитков вы&nbsp;сможете еще удобнее разместиться в&nbsp;автомобиле. А&nbsp;для пассажиров второго ряда сидений предусмотрены отдельные USB-разъемы для зарядки личных устройств.',
    //   img: 'komfort.jpg',
    //   galleryimage: '/img/other/kaptur/komfort.jpg'
    // }, {
    //   h3: 'Пространство для пассажира и&nbsp;багажа',
    //   p: 'Выбирая Renault KAPTUR, вы&nbsp;выбираете комфорт. В&nbsp;удобном и&nbsp;практичном кроссовере могут разместиться до&nbsp;пяти человек. Объем багажного отделения составляет 387&nbsp;л с&nbsp;возможностью увеличения до&nbsp;1&nbsp;200&nbsp;л благодаря складывающимся сиденьям заднего ряда (в&nbsp;пропорции 1/3 и&nbsp;2/3). Широкий проем (1002&nbsp;мм), дополнительное освещение и&nbsp;возможность складывания задних сидений обеспечивают удобство загрузки в&nbsp;багажник. Дополнительные ниши для хранения, распределенные по&nbsp;всему салону, позволяют всегда иметь необходимые вещи под рукой.',
    //   img: 'space.jpg',
    //   galleryimage: '/img/other/kaptur/space.jpg'
    // }, {
    //   h3: 'Инновации комфорта',
    //   p: 'Управлять новым Renault KAPTUR стало еще удобнее. Зеркало заднего вида справится с&nbsp;яркими огнями автомобилей позади благодаря электрохромному покрытию. Круиз-контроль с&nbsp;ограничителем скорости сделает дальнюю дорогу комфортнее. <br><br> Внешнее освещение и&nbsp;стеклоочистители можно настроить на&nbsp;автоматическое включение и&nbsp;выключение. Благодаря электроусилителю и&nbsp;системе кругового обзора вы&nbsp;сможете легко маневрировать на&nbsp;парковке. И&nbsp;не&nbsp;беспокойтесь о&nbsp;сохранности боковых зеркал&nbsp;&mdash; они сложатся автоматически, как только вы&nbsp;припаркуете автомобиль и&nbsp;отойдете от&nbsp;него.',
    //   img: 'tech.jpg',
    //   galleryimage: '/img/other/kaptur/tech.jpg'
    // }],
    galleryThumbs: null,
    galleryTop: null,

    /**/

    /*   MOTOR   */
    motor: null,
    canvasWidth: null,
    canvasHeight: null,
    ctx: null,
    imgsCount: 135,
    currentImg: 0,
    currentPosition: 0,
    positions: [0, 63, 107],
    sprites: [],
    isClicked: false,
    // нажата ли мышь перед перемещением
    lastOffsetXPos: null,
    // позиция зажатой мыши до последнего перемещения
    moveDirection: null,
    // направление перетаскивания мыши
    motorItems: [{
      a: 'Инновационный&nbsp;двигатель<br> и&nbsp;трансмиссия',
      stats: [{
        img: 'ico_1.svg',
        text: 'мощность<br> 150&nbsp;л.с.'
      }, {
        img: 'ico_2.svg',
        text: 'крутящий&nbsp;момент<br> 250&nbsp;нм'
      }, {
        img: 'ico_3.svg',
        text: 'сниженная масса<br> двигателя'
      }],
      text: 'Беспрецедентные испытания на надежность и безупречная репутация'
    }, {
      a: 'Потрясающая<br> эффективность',
      stats: [{
        img: 'ico_8.svg',
        text: 'НИЗКИЙ РАСХОД<br> ТОПЛИВА'
      }, {
        img: 'ico_9.svg',
        text: 'ВЫСОКАЯ<br> ДИНАМИКА'
      }, {
        img: 'ico_10.svg',
        text: 'УДОВОЛЬСТВИЕ<br> ОТ&nbsp;ВОЖДЕНИЯ'
      }],
      text: 'Беспрецедентные испытания на надежность и безупречная репутация'
    }, {
      a: 'Впечатляющая<br> надежность',
      stats: [{
        img: 'ico_13.svg',
        text: 'БОЛЕЕ 300 000 КМ<br> ИСПЫТАНИЙ'
      }, {
        img: 'ico_12.svg',
        text: '40 000 ЧАСОВ<br> ТЕСТОВ НА СТЕНДЕ'
      }, {
        img: 'ico_11.svg',
        text: 'КЛИМАТИЧЕСКИЕ<br> ИСПЫТАНИЯ'
      }],
      text: 'Беспрецедентные испытания на надежность и безупречная репутация'
    }]
    /**/

  },
  methods: {
    // БОЙ
    parallax: function parallax(elem, koef) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (document.documentElement.offsetWidth < 900) {
        offset = offset / 8;
        koef = koef / 3;
      }

      var target = document.querySelector(elem);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect().top;
      var sectorOffset = null; // насколько от верха экрана верх элемента в области

      if (this.metrix.windowHeight + this.metrix.scrollTop > targetOffset + this.metrix.frameOffset && this.metrix.scrollTop < targetOffset + this.metrix.frameOffset + targetHeight) {
        sectorOffset = 1 - (targetOffset + this.metrix.frameOffset - this.metrix.scrollTop) / this.metrix.windowHeight;
        return sectorOffset * 10 * koef + offset + 'px';
      }
    },
    canShow: function canShow(elem) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var target = document.querySelector(elem);
      if (target.classList.contains('show')) return true;
      var targetOffset = target.getBoundingClientRect().top;
      var sectorOffset = null; // насколько от верха экрана верх элемента в области

      if (this.metrix.windowHeight + this.metrix.scrollTop > targetOffset + this.metrix.frameOffset) {
        sectorOffset = 1 - (targetOffset + this.metrix.frameOffset - this.metrix.scrollTop) / this.metrix.windowHeight;

        if (sectorOffset > offset) {
          return true;
        }

        return false;
      }
    },
    
    /*   comfort   */
    initComfortSliders: function initComfortSliders() {
      var that = this;
      this.galleryThumbs = new Swiper('.comfort .gallery-thumbs .swiper-container', {
        spaceBetween: 21,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centerInsufficientSlides: true,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.comfort .gallery-thumbs .swiper-button-next',
          prevEl: '.comfort .gallery-thumbs .swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 2.58
          }
        }
      });
      this.galleryTop = new Swiper('.comfort .gallery-top .swiper-container', {
        spaceBetween: 10,
        effect: 'fade',
        grabCursor: true,
        simulateTouch: false,
        allowTouchMove: false,
        thumbs: {
          swiper: this.galleryThumbs
        },
        on: {
          slideChange: function slideChange() {
            that.activeGallerySlide = this.activeIndex;
            setHeight();
          }
        }
      });
    },
    changeSlide: function changeSlide(n) {
      var _this = this;

      this.activeGallery = n;
      this.galleryTop.slideTo(0);
      setTimeout(function () {
        _this.galleryTop.updateSlides();

        _this.galleryThumbs.updateSlides();

        setTimeout(function () {
          _this.galleryThumbs.slideTo(0);
        });
      });
    },
    showPopupImage: function (_showPopupImage) {
      function showPopupImage(_x) {
        return _showPopupImage.apply(this, arguments);
      }

      showPopupImage.toString = function () {
        return _showPopupImage.toString();
      };

      return showPopupImage;
    }(function (src) {
      showPopupImage(src);
    }),

    /*   motor   */
    initMotorEvents: function initMotorEvents() {
      var _this2 = this;

      this.motor = document.getElementById('motor');
      if (!this.motor) return;
      this.ctx = this.motor.getContext('2d');
      this.canvasWidth = this.motor.width;
      this.canvasHeight = this.motor.height;
      this.currentImg = this.positions[this.currentPosition];
      var onloadCount = 0;

      for (var i = 0; i < this.imgsCount; i++) {
        var img = new Image();
        img.src = '/testkaptur' + '//img/other/kaptur/motor/' + (i + 1) + '.png';
        this.sprites.push(img);

        img.onload = function () {
          onloadCount++;

          if (onloadCount >= _this2.imgsCount) {
            _this2.render();
          }
        };
      }

      this.motor.addEventListener('mousedown', function (e) {
        _this2.touchStart(e);
      });
      this.motor.addEventListener('touchstart', function (e) {
        _this2.touchStart(e);
      });
      this.motor.addEventListener('mousemove', function (e) {
        _this2.touchMove(e);
      });
      this.motor.addEventListener('touchmove', function (e) {
        _this2.touchMove(e);
      });
      this.motor.addEventListener('mouseup', function () {
        _this2.touchEnd();
      });
      this.motor.addEventListener('touchend', function () {
        _this2.touchEnd();
      });
      this.motor.addEventListener('mouseleave', function () {
        if (_this2.isClicked) {
          _this2.isClicked = false;

          _this2.updatePosition(_this2.moveDirection);
        }
      });
    },
    render: function render() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.drawImage(this.sprites[this.currentImg], 0, 0, this.canvasWidth, this.canvasHeight);
    },
    updatePosition: function updatePosition(dir, position) {
      var _this3 = this;

      clearInterval(window.posTimer);

      if (position !== undefined) {
        if (this.currentPosition === position) return;

        if (this.currentPosition === this.positions.length - 1 && position === 0) {
          dir = "prev";
        } else if (this.currentPosition === 0 && position === this.positions.length - 1) {
          dir = "next";
        } else if (this.currentPosition > position) {
          dir = "prev";
        } else {
          dir = "next";
        }

        this.currentPosition = position;
      } else {
        this.currentPosition += dir == 'next' ? 1 : -1;
      }

      if (this.currentPosition > this.positions.length - 1) this.currentPosition = 0;
      if (this.currentPosition < 0) this.currentPosition = this.positions.length - 1;
      var neededPosition = this.positions[this.currentPosition];
      window.posTimer = setInterval(function () {
        _this3.currentImg += dir == 'next' ? 1 : -1;
        if (_this3.currentImg >= _this3.imgsCount) _this3.currentImg = 0;
        if (_this3.currentImg < 0) _this3.currentImg = _this3.imgsCount - 1;

        _this3.render();

        if (_this3.currentImg === neededPosition) {
          clearInterval(window.posTimer);
        }
      }, 15);
    },
    touchStart: function touchStart(e) {
      console.log('touchStart');

      if (typeof e.touches !== 'undefined') {
        this.lastOffsetXPos = e.touches[0].clientX;
      } else {
        this.lastOffsetXPos = e.offsetX;
      }

      this.isClicked = true;
    },
    touchEnd: function touchEnd() {
      console.log('touchEnd');
      this.isClicked = false;
      this.updatePosition(this.moveDirection);
    },
    touchMove: function touchMove(e) {
      if (!this.isClicked) return;
      var offsetX = typeof e.touches !== 'undefined' ? e.touches[0].clientX : e.offsetX;

      if (offsetX > this.lastOffsetXPos) {
        this.currentImg++;
        if (this.currentImg >= this.imgsCount) this.currentImg = 0;
        this.moveDirection = 'next';
      } else if (offsetX < this.lastOffsetXPos) {
        this.currentImg--;
        if (this.currentImg < 0) this.currentImg = this.imgsCount - 1;
        this.moveDirection = 'prev';
      }

      this.render();
      this.lastOffsetXPos = offsetX;
    },
    init_get_metrix: function init_get_metrix() {
      var _this4 = this;

      getMetrix();
      window.addEventListener("message", function () {
        if (event.data) {
          var message = JSON.parse(event.data);

          if (message.type === 'metrix') {
            _this4.metrix = message.data;
          }
        }
      });
      /*this.metrix = {
          frameOffset: 207,
          scrollTop: window.pageYOffset,
          windowHeight: 937,
      }
      window.addEventListener('scroll', ()=>{
          this.metrix = {
              frameOffset: 207,
              scrollTop: window.pageYOffset,
              windowHeight: 937,
          }
      })*/
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    window.addEventListener('load', function () {
      _this5.initComfortSliders();

      _this5.init_get_metrix();
    });
    this.initMotorEvents();
  }
});