"use strict";

new Vue({
  el: '#duster2',
  data: {
    slider: null,
    activeSlide: 0,
    first_name: '',
    last_name: '',
    email: '',
    politicsAgree: false,
    loading: false,
    success: false
  },
  methods: {
    initVideo: function initVideo() {
      var video = this.$refs.video;
      if (!video) return;

      var setVideo = function setVideo() {
        if (document.documentElement.offsetWidth > 768) {
          video.src = 'https://production.renault.ru/duster2-new/videos/intro_desktop.mp4?v=1';
        } else {
          video.src = 'https://production.renault.ru/duster2-new/videos/intro_mobile.mp4?v=1';
        }
      };

      setVideo();
      window.addEventListener('resize', function () {
        setTimeout(function () {
          setVideo();
        }, 100);
      });
    },
    initAnimations: function initAnimations() {
      var event = 'mouseenter';

      if (window.innerWidth <= 1024) {
        event = 'touchstart';
      }

      var items = document.querySelectorAll('.duster2-crop');
      $('.duster2').on(event, function(e){
        $(this).find(".duster2-crop").addClass("animate");
        console.log(this);
      })
      // document.querySelector('#duster2').addEventListener(event, function (e) {
      //   items.forEach(function (item) {
      //     console.log(this, e.target);
      //     item.classList.add('animate');
      //   });
      // });
      var magicLetters = document.querySelectorAll('.magic-letters');
      magicLetters.forEach(function (word) {
        var divider = '';

        if (word.innerHTML.split(' ').length > 1) {
          divider = ' ';
        }

        word.innerHTML = word.innerHTML.split(divider).map(function (l, ind) {
          return "<span>".concat(l, "</span>");
        }).join(divider);
      });
    },
  },
  watch: {
    // first_name: function first_name(value) {
    //   this.first_name = this.validateCyrillic(value);
    // },
  },
  mounted: function mounted() {
    this.initVideo();
    this.initAnimations();
  }
});