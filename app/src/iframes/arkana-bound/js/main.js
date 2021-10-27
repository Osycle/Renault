"use strict";

var bodyH;

if (window.addEventListener) {
  addEventListener('message', listener, false);
} else {
  attachEvent('onmessage', listener);
}

function listener(event) {
  console.log(event)
  console.log(event.data)
  if (event && event.data === 'need_height' || !event) {
    var message = {
      type: 'resize',
      height: document.body.offsetHeight
    };
    console.log(message)
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

var app = new Vue({
  el: ".wrapper",
  data: {
    isMobile: document.documentElement.offsetWidth < 768,

    /*   ROADCAR   */
    openedOn: 50,
    offsetY: 30,
    sectionWidth: 0,
    loaded: false,
    carVideoWidth: 0,
    carVideoHeight: 0
  },
  computed: {
    currentOpenedOn: function currentOpenedOn() {
      return this.openedOn > 90 ? 90 : this.openedOn < 10 ? 10 : this.openedOn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.initRoadCarEvents();
    //RenaultFrame.resize();
    this.sectionWidth = this.$refs.carVideo.offsetWidth;

    var fOnResize = function fOnResize() {
      _this.isMobile = document.documentElement.offsetWidth < 768;
      _this.sectionWidth = _this.$refs.carVideo.offsetWidth;
      var carVideo = _this.$refs.carVideo;
      _this.carVideoWidth = carVideo.offsetWidth;
      _this.carVideoHeight = carVideo.offsetHeight;
      //RenaultFrame.resize();

      _this.loadImages();
    };

    window.onresize = fOnResize;
    window.addEventListener('orientationchange', fOnResize);
    this.loadImages();
  },
  methods: {
    loadImages: function loadImages() {
      var _this2 = this;

      var imgsLoaded = 0;
      var imgs = document.querySelectorAll('[data-image]');
      Array.prototype.forEach.call(imgs, function (el) {
        var img = new Image();
        img.src = el.getAttribute('data-image');

        img.onload = function () {
          el.style.backgroundImage = 'url(' + img.src + ')';
          imgsLoaded++;

          if (imgsLoaded >= imgs.length) {
            _this2.loaded = true;
          }
        };
      });
    },
    initRoadCarEvents: function initRoadCarEvents() {
      var carVideo = this.$refs.carVideo;
      this.carVideoWidth = carVideo.offsetWidth;
      this.carVideoHeight = carVideo.offsetHeight;
      carVideo.addEventListener('mousemove', mouseMove.bind(this));
      carVideo.addEventListener('touchmove', mouseMove.bind(this));

      function mouseMove(e) {
        var offsetX = typeof e.touches !== 'undefined' ? e.touches[0].clientX : e.offsetX;
        this.openedOn = offsetX / this.carVideoWidth * 100;
        var offsetY = typeof e.touches !== 'undefined' ? e.touches[0].clientY : e.offsetY;
        var cursorError = this.carVideoHeight * 0.036;
        if (offsetY > this.carVideoHeight - cursorError) offsetY = this.carVideoHeight - cursorError;
        if (offsetY < cursorError) offsetY = cursorError;
        this.offsetY = offsetY / this.carVideoHeight * 100;
      }
    }
  }
});