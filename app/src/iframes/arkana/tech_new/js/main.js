"use strict";

// RenaultShowroom.push('token', '46d0eb24b3adeefd22ae3eee387de88c8ae92d883d3e26b4acdbb252c6f3ae28.vitrine'); // RenaultShowroom.push('token', '6a47b6ba14245049e5b1100271035ed716c11054e2db7adfd41aa6c9d030f332.vitrine');

var bodyH;

if (window.addEventListener) {
  addEventListener('message', listener, false);
} else {
  attachEvent('onmessage', listener);
}

function listener(event) {
  if (event && event.data === 'need_height' || !event) {
    var message = {
      type: 'resize',
      height: document.body.offsetHeight
    };
    window.parent.postMessage(JSON.stringify(message), '*');
  } else if (event && event.data) {
    var data = JSON.parse(event.data);

    if (data.type === 'need_anchortop') {
      var id = data.id;
      var anchorTo = document.querySelector(id);
      if (!anchorTo) return;
      var top = getCoords(anchorTo).top;
      var message = {
        type: 'anchor',
        top: top,
        behavior: 'smooth'
      };
      window.parent.postMessage(JSON.stringify(message), '*');
    }
  }
}
/*
 Для работы якорей отправляем
 var message = {
 type: 'anchor',
 top: top,
 behavior: behavior
 };
 window.parent.postMessage(JSON.stringify(message), '*');


 Для работы якоря в ссылке
 event && event.data === 'need_anchortop'
 var data = JSON.parse(event.data);
 var id = data.id;
 let anchorTo = document.querySelector(id);
 получаем его позицию от верха и отправляем что выше
 */


function sendAnchorRequest(top, behavior) {
  var message = {
    type: 'anchor',
    top: top,
    behavior: behavior
  };
  window.parent.postMessage(JSON.stringify(message), '*');
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

Vue.use(VueMask.VueMaskPlugin);
window.app = new Vue({
  el: ".wrapper",
  data: app_data,
  components: {
    'v-select': VueSelect.VueSelect
  },
  computed: {
    filterDealers: function filterDealers() {
      var _this = this;

      if (this.knowStartData.region.value == '') return this.dealersToSelect;
      var dealers = this.dealersToSelect.filter(function (el) {
        return el.properties.district_id == _this.knowStartData.region.value;
      });
      return dealers;
    },
    continueLink: function continueLink() {
      if (!this.selectData.mode || !this.currentRegion) return;
      var dealerId = this.selectData.dealer ? this.selectData.dealer.id : '';
      var host = 'https://www.renault.ru/vehicles/range/arkana/showroom.html';
      return host + '#/arkana/' + this.currentRegion.value + '/' + dealerId + '/' + this.selectData.mode.id + '/' + this.selectData.color + '/';
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var _this2 = this;

    this.initMotorEvents(); //this.getRegions();
    //this.getDealers();
    // if(!RenaultFrame)
    return;
    RenaultFrame.resize(); //this.updateFrame();

    window.onresize = function () {
      RenaultFrame.resize();
      _this2.isMobile = document.documentElement.offsetWidth < 768;
    };
  },
  watch: {
    'knowStartData.dealer': function knowStartDataDealer() {
      var _this3 = this;

      this.knowStartData.region = this.regions.find(function (el) {
        return el.value === _this3.knowStartData.dealer.properties.district_id;
      });
    },
    'selectData.dealer': function selectDataDealer() {
      if (this.selectData.dealer) {
        selectDealer(this.selectData.dealer.id);
      }
    },
    'selectData.mode': function selectDataMode() {
      var _this4 = this;

      if (this.selectData.mode) {
        if (this.selectData.mode.colors.findIndex(function (c) {
          return c.id === _this4.selectData.color;
        }) === -1) {
          this.selectData.color = this.selectData.mode.colors[0].id;
        }
      }
    },
    isInterior: function isInterior() {
      var _this5 = this;

      if (this.isInterior) {
        setTimeout(function () {
          document.querySelector('body').onclick = function (e) {
            if (!e.target.closest('.interior')) {
              _this5.isInterior = false;
              document.querySelector('body').onclick = '';
            }
          };
        }, 300);
      }
    },
    openPower: function openPower() {
      var _this6 = this;

      if (this.openPower !== null) {
        setTimeout(function () {
          document.querySelector('body').onclick = function (e) {
            if (!e.target.closest('.powersBlock')) {
              _this6.openPower = null;
              document.querySelector('body').onclick = '';
            }
          };
        }, 300);
      }
    }
  },
  methods: {
    sendKnowStart: function sendKnowStart() {
      var _this7 = this;

      this.knowStartErrors = [];

      if (this.knowStartData.region.value == '' || this.knowStartData.dealer.value == '') {
        this.knowStartErrors.push('Заполнены не все обязательные поля');
        return;
      }

      var data = new FormData();
      data.append('action', 'arkana_dealer_sos');
      data.append('key', 'ArkanaDealerSOS');
      data.append('name', this.knowStartData.first_name);
      data.append('last_name', this.knowStartData.last_name);
      data.append('email', this.knowStartData.email);
      data.append('phone', this.knowStartData.phone);
      data.append('region_id', this.knowStartData.region.value);
      data.append('dealer_id', this.knowStartData.dealer.value);
      fetch('https://list-arkana.ru/backend/api/user/dealersos/', {
        body: data,
        method: 'POST'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        if (!data.error) {
          _this7.knowStartComplete = true;
          dataLayer.push({
            'event': 'arkana-knowStartForm-send'
          });
        } else {
          _this7.knowStartErrors = data.errors_list;
          console.log(data);
        }
      });
    },
    sendDataLayer: function sendDataLayer() {
      if (this.selectData.mode === null || this.selectData.dealer === null) return;
      dataLayer.push({
        'event': 'arkana-preorder-continue'
      });
    },
    checkClosePopup: function checkClosePopup(e) {
      if (!e.target.closest('.interior')) {
        this.isInterior = false;
      }
    },
    validate: function validate(e, rule) {
      var val = e.target.value;

      switch (rule) {
        case 'ru':
          e.target.value = val.replace(/[^А-Яа-яЁё]/g.exec(val), '');
          break;

        case 'email':
          e.target.value = val.replace(/[А-Яа-яЁё]/g.exec(val), '');
          break;
      }
    },
    anchorTo: function anchorTo(to) {
      var anchorTo = document.querySelector('#' + to);
      var top = getCoords(anchorTo).top;
      var behavior = 'smooth';
      sendAnchorRequest(top, behavior);
    },
    loadMoreDealers: function loadMoreDealers() {
      // на мобиле подгружаем еще дилеров
      this.dealersToShow += 5;
      this.updateFrame();
    },
    updateFrame: function updateFrame() {
      setTimeout(function () {
        var message = {
          type: 'resize',
          height: document.body.offsetHeight
        };
        window.parent.postMessage(JSON.stringify(message), '*');
      }, 1000);
    },
    locateMe: function locateMe() {
      var latlon = this.currentRegion.latlon.split(', ');
      setMapCenter(Number(latlon[0]), Number(latlon[1]));
    },
    // Клик по кнопке Сохранить выбор
    saveChooseBtnClick: function saveChooseBtnClick() {
      this.dealersToShow = 5;
      this.updateFrame();
      this.popup = 'saveChoose';
      this.saveChooseComplete = false;
      if (this.isMobile) this.anchorTo('saveChoose');
    },
    saveChoose: function saveChoose() {
      var _this8 = this;

      var data = new FormData();
      var dealerId = this.selectData.dealer ? this.selectData.dealer.id : '';
      data.append('action', 'save_configuration');
      data.append('key', 'ArkanaEoSave');
      data.append('name', this.saveChooseData.first_name);
      data.append('last_name', this.saveChooseData.last_name);
      data.append('city', this.saveChooseData.city);
      data.append('email', this.saveChooseData.email);
      data.append('phone', this.saveChooseData.phone);
      data.append('model_id', 'ark'); // !!!!

      data.append('modif_id', this.selectData.mode.id);
      data.append('dealer_id', dealerId);
      data.append('district_id', this.currentRegion.value);
      data.append('color_id', this.selectData.color); // !!!!

      fetch('/backend/api/configuration/save/', {
        body: data,
        method: 'POST'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        if (!data.error) {
          _this8.saveChooseComplete = true;

          for (var field in _this8.saveChooseData) {
            _this8.saveChooseData[field] = '';
          }
        } else {
          _this8.chooseErrors = data.errors_list;
          console.log(data);
        }
      });
    },
    sendNotification: function sendNotification() {
      var _this9 = this;

      var data = new FormData();
      data.append('action', 'user_want_car');
      data.append('key', 'ArkanaEoNew');
      data.append('name', this.sendNotificationData.first_name);
      data.append('last_name', this.sendNotificationData.last_name);
      data.append('city', this.sendNotificationData.city);
      data.append('email', this.sendNotificationData.email);
      data.append('phone', this.sendNotificationData.phone);
      fetch('/backend/api/user/wantcars/', {
        body: data,
        method: 'POST'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        if (!data.error) {
          console.log(data);
          _this9.sendNotificationComplete = true;
        } else {
          console.log(data);
        }
      });
    },
    getDealers: function getDealers() {
      var _this10 = this;

      fetch('/v3/backend/data/dealers.geojson').then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        _this10.dealers = data.features;
        _this10.dealersToSelect = data.features.map(function (el) {
          return {
            label: el.properties.dealerName + ' ' + el.properties.address,
            value: el.id,
            properties: el.properties
          };
        });
      });
    },
    getRegions: function getRegions() {
      var _this11 = this;

      fetch('/v3/backend/data/regions.json').then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        var regions = data.map(function (el) {
          return {
            label: el.regionName,
            value: el.renaultRegionISO,
            locale: el.sxGeoRegionISO,
            latlon: el.latlon
          };
        });
        _this11.regions = regions.sort(function (reg1, reg2) {
          if (reg1.label > reg2.label) {
            return 1;
          } else if (reg1.label < reg2.label) {
            return -1;
          }

          return 0;
        });
      }).then(function () {//this.getUserRegion();
      });
    },
    getUserRegion: function getUserRegion() {
      var _this12 = this;

      fetch('/backend/api/geolocation/locate/').then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log(response);
        }
      }).then(function (data) {
        _this12.currentRegion = _this12.regions.find(function (reg) {
          return reg.locale === data.region_iso;
        }) || _this12.regions.find(function (reg) {
          return reg.locale === 'RU-MOW';
        });

        _this12.getModeByRegion();

        window.timerSetMap = setInterval(function () {
          if (map) {
            _this12.locateMe();

            clearInterval(window.timerSetMap);
          }
        }, 100);
      });
    },
    getModeByRegion: function getModeByRegion() {
      var _this13 = this;

      this.modes = [];
      this.someApiError = false; // Request

      this.dealersToShow = 5;
      this.updateFrame(); // this.modes = [];

      this.selectData.mode = null;
      RenaultShowroom.push('modifications', {
        vitrine: 'arkana',
        district: this.currentRegion.value
      }, function (err, data) {
        console.log(data);

        if (err) {
          console.log('Произошла ошибка: ');
          console.log(err);

          if (err.no_response === true) {
            _this13.someApiError = true;
          }

          return;
        }

        if (data.length === 0) {
          console.log('Был достигнут лимит заказов на Аркане.');

          _this13.modes.push('limit');

          return;
        }

        _this13.modes = data.modifications;
        _this13.selectData.mode = _this13.modes[0];

        _this13.modes.forEach(function (el) {
          _this13.getCountCars(el);
        });

        console.log(_this13.modes);
      });
    },
    getCountCars: function getCountCars(mode) {
      var _this14 = this;

      RenaultShowroom.push('summary', {
        vitrine: 'arkana',
        district: this.currentRegion.value,
        preset: {
          modifications: [mode.id],
          colors: {
            body: [mode.colors.map(function (el) {
              return el.id;
            })]
          }
        }
      }, function (err, data) {
        if (err) {
          console.warn(err);
        } else {
          _this14.$set(mode, 'count', data.counters.cars);

          _this14.$set(mode, 'minPrice', data.counters.min_price);
        }
      });
    },
    getSumCountCars: function getSumCountCars() {
      var _this15 = this;

      RenaultShowroom.push('summary', {
        vitrine: 'arkana'
      }, function (err, data) {
        if (err) {
          console.warn(err);
          setTimeout(function () {
            // this.sumCars = 0;
            _this15.someApiError = true;

            _this15.updateFrame();
          }, 1000);
        } else {
          console.log(data);
          _this15.sumCars = data.counters.cars;

          _this15.updateFrame(); // !!


          _this15.getRegions();
        }
      });
    },
    imgLoad: function imgLoad() {
      var imgs = ['powers/powers-character-eco.jpg', 'powers/powers-duh.jpg', 'powers/powers-intuition-krugObzor.jpg', 'powers/powers-intuition-multSystem.jpg', 'powers/powers-intuition-slepZon.jpg', 'powers/powers-think-light.jpg', 'powers/powers-think-theFirst.jpg', 'powers/powers-voly-dopZash.jpg', 'powers/powers-voly-geometry.jpg', 'powers/powers-voly-newBaza.jpg', 'selectCars/car-red.png', 'selectCars/car-black.png', 'selectCars/car-brown.png', 'selectCars/car-brownLight.png', 'selectCars/car-grey.png', 'selectCars/car-greyLight.png', 'selectCars/car-white.png'];
      imgs.forEach(function (el) {
        new Image().src = 'img/' + el;
      });
    },
    lightenText: function lightenText(id) {
      // подсвет текста при наведении на плюсики
      var text = document.querySelector('.equipment .item.open .content .text');
      var elems = text.querySelectorAll('p span[data-hover-id="' + id + '"]');
      text.classList.add('showLighten');
      Array.prototype.forEach.call(elems, function (el) {
        el.classList.add('lighten');
      });
    },
    hideLightenText: function hideLightenText(id) {
      // убираем подсвет текста при наведении на плюсики
      var text = document.querySelector('.equipment .item.open .content .text');
      var elems = text.querySelectorAll('p span[data-hover-id="' + id + '"]');
      text.classList.remove('showLighten');
      Array.prototype.forEach.call(elems, function (el) {
        el.classList.remove('lighten');
      });
    },
    initMotorEvents: function initMotorEvents() {
      var _this16 = this;

      this.motor = document.getElementById('motor');
      this.ctx = this.motor.getContext('2d');
      this.canvasWidth = this.motor.width;
      this.canvasHeight = this.motor.height;
      this.currentImg = this.positions[this.currentPosition];
      var onloadCount = 0;

      for (var i = 0; i < this.imgsCount; i++) {
        var img = new Image();
        img.src = 'img/motor/' + (i + 1) + '.png';
        this.sprites.push(img);

        img.onload = function () {
          onloadCount++;

          if (onloadCount >= _this16.imgsCount) {
            _this16.render();
          }
        };
      }

      this.motor.addEventListener('mousedown', function (e) {
        _this16.touchStart(e);
      });
      this.motor.addEventListener('touchstart', function (e) {
        _this16.touchStart(e);
      });
      this.motor.addEventListener('mousemove', function (e) {
        _this16.touchMove(e);
      });
      this.motor.addEventListener('touchmove', function (e) {
        _this16.touchMove(e);
      });
      this.motor.addEventListener('mouseup', function () {
        _this16.touchEnd();
      });
      this.motor.addEventListener('touchend', function () {
        _this16.touchEnd();
      });
      this.motor.addEventListener('mouseleave', function () {
        if (_this16.isClicked) {
          _this16.isClicked = false;

          _this16.updatePosition(_this16.moveDirection);
        }
      });
    },
    render: function render() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.drawImage(this.sprites[this.currentImg], 0, 0, this.canvasWidth, this.canvasHeight);
    },
    updatePosition: function updatePosition(dir, position) {
      var _this17 = this;

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
        _this17.currentImg += dir == 'next' ? 1 : -1;
        if (_this17.currentImg >= _this17.imgsCount) _this17.currentImg = 0;
        if (_this17.currentImg < 0) _this17.currentImg = _this17.imgsCount - 1;

        _this17.render();

        if (_this17.currentImg === neededPosition) {
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
    slideTo: function slideTo(i) {
      car_slider.slideTo(i);
    },
    slideAdvantTo: function slideAdvantTo(i) {
      if (i === 0) {
        advantagesSwiper.slideToLoop(0);
      } else if (i === 1) {
        advantagesSwiper.slideToLoop(4);
      } else if (i === 2) {
        advantagesSwiper.slideToLoop(6);
      } else if (i === 3) {
        advantagesSwiper.slideToLoop(11);
      }
    }
  },
  filters: {
    prettyPrice: function prettyPrice(price) {
      if (!price) return '—';
      price = String(price);
      return price.slice(0, -6) + ' ' + price.slice(-6, -3) + ' ' + price.slice(-3);
    }
  }
});
/* слайдер фич автомобиля НАЧАЛО */

function isIE() {
  return window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}

function clearAllTimeouts(allcBoxTimeouts) {
  allcBoxTimeouts.forEach(function (array) {
    array.forEach(function (item) {
      clearTimeout(item);
    });
  });
}

var cBox = $(".chrtc__box"),
    allcBoxTimeouts = [];
cBox.click(function () {
  var cBoxTimeouts = [],
      elem = $(this),
      elemData = elem.data("image");

  if ($(".chrtc__image").css("opacity", "0"), $(".chrtc__image").removeClass("active"), $('.chrtc__image[data-image="' + elemData + '"]').css("opacity", "1").addClass("active"), 1 === parseInt(elemData) ? setTimeout(function () {
    var interval = 0,
        intervalStep = 100;
    $(".chrtc__spotlight .layer__stars .item").each(function (i, item) {
      setTimeout(function () {
        $(item).addClass("active");
      }, interval), intervalStep /= 2, interval += intervalStep;
    }), $(".chrtc__spotlight .layers").addClass("active");
  }, 1e3) : ($(".chrtc__spotlight .layer__stars .item").removeClass("active"), $(".chrtc__spotlight .layers").removeClass("active")), elem.hasClass("chrtc__box--normal")) {
    clearAllTimeouts(allcBoxTimeouts), $(".chrtc__descr__head").css("opacity", "0"), $(".chrtc__descr__title").css("opacity", "0"), $(".chrtc__descr__othertext").css("opacity", "0"),
    /*$(".chrtc__descr__text").css("opacity", "0"),*/
    cBox.removeClass("chrtc__box--normal"), cBox.addClass("chrtc__box--little"), elem.removeClass("chrtc__box--little"), elem.addClass("chrtc__box--active");
    elem.find(".chrtc__descr__othertext").css("display", "block"), cBoxTimeouts.push(setTimeout(function () {
      $(".chrtc__descr__head").css("opacity", "1"), isIE() || ($(".chrtc__descr__head").addClass("animated fadeInRight"), $(".chrtc__descr__head").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(".chrtc__descr__head").removeClass("animated fadeInRight");
      }));
    }, 1400)), cBoxTimeouts.push(setTimeout(function () {
      $(".chrtc__descr__title").css("opacity", "1"), isIE() || ($(".chrtc__descr__title").addClass("animated fadeInRight"), $(".chrtc__descr__title").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(".chrtc__descr__title").removeClass("animated fadeInRight");
      }));
    }, 1600)), cBoxTimeouts.push(setTimeout(function () {
      $(".chrtc__descr__othertext").css("opacity", "1"), isIE() || ($(".chrtc__descr__othertext").addClass("animated fadeInRight"), $(".chrtc__descr__othertext").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        $(".chrtc__descr__othertext").removeClass("animated fadeInRight");
      }));
    }, 1800));
  } else if (elem.hasClass("chrtc__box--active")) {
    clearAllTimeouts(allcBoxTimeouts), $(".chrtc__descr__othertext").css({
      display: "none",
      opacity: 0
    }), $(".chrtc__descr__text").css("opacity", "0");

    var _elemOthertext = elem.find(".chrtc__descr__text");

    _elemOthertext.css("display", "block"), cBox.removeClass("chrtc__box--little"), cBox.removeClass("chrtc__box--active"), cBox.addClass("chrtc__box--normal"), $(".chrtc__image").css("opacity", "0"), $(".chrtc__image").removeClass("active"), $(".main-img").css("opacity", "1");
  } else if (elem.hasClass("chrtc__box--little")) {
    clearAllTimeouts(allcBoxTimeouts);

    var aHead = $(".chrtc__box--active").find(".chrtc__descr__head"),
        aTitle = $(".chrtc__box--active").find(".chrtc__descr__title"),
        aOthertext = $(".chrtc__box--active").find(".chrtc__descr__othertext"),
        elemHead = elem.find(".chrtc__descr__head"),
        elemTitle = elem.find(".chrtc__descr__title"),
        _elemOthertext2 = elem.find(".chrtc__descr__othertext");

    aHead.css("opacity", "0"), aTitle.css("opacity", "0"), aOthertext.css("opacity", "0"), aOthertext.hide(), elemHead.css("opacity", "0"), elemTitle.css("opacity", "0"), _elemOthertext2.css("opacity", "0");
    var timeout = setTimeout(function () {
      elemHead.css("opacity", "1"), isIE() || (elemHead.addClass("animated fadeInRight"), elemHead.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        elemHead.removeClass("animated fadeInRight");
      }));
    }, 1400);
    cBoxTimeouts.push(timeout), timeout = cBoxTimeouts.push(setTimeout(function () {
      elemTitle.css("opacity", "1"), isIE() || (elemTitle.addClass("animated fadeInRight"), elemTitle.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        elemTitle.removeClass("animated fadeInRight");
      }));
    }, 300)), cBoxTimeouts.push(timeout), timeout = setTimeout(function () {
      _elemOthertext2.css("display", "block"), _elemOthertext2.css("opacity", "1"), isIE() || (_elemOthertext2.addClass("animated fadeInRight"), _elemOthertext2.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        _elemOthertext2.removeClass("animated fadeInRight");
      }));
    }, 300), cBoxTimeouts.push(timeout), timeout = setTimeout(function () {
      aHead.css("opacity", "1"), isIE() || (aHead.addClass("animated fadeInRight"), aHead.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        aHead.removeClass("animated fadeInRight");
      }));
    }, 1400), cBoxTimeouts.push(timeout), cBox.removeClass("chrtc__box--normal"), cBox.removeClass("chrtc__box--active"), cBox.removeClass("chrtc__box--little"), cBox.addClass("chrtc__box--little"), elem.removeClass("chrtc__box--little"), elem.addClass("chrtc__box--active");
  }

  allcBoxTimeouts.push(cBoxTimeouts);
});
/* слайдер фич автомобиля КОНЕЦ */
