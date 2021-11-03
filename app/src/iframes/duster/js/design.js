"use strict";

VueScrollTo.setDefaults({
  duration: 1000
});
Vue.use(window.vuelidate["default"]);
var _window$validators = window.validators,
    required = _window$validators.required,
    email = _window$validators.email;
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
  validations: {
    first_name: {
      required: required
    },
    last_name: {
      required: required
    },
    email: {
      required: required,
      email: email
    },
    politicsAgree: {
      checked: function checked(value) {
        return value;
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.loading) return;

      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      var fd = new FormData();
      fd.append('first_name', this.first_name);
      fd.append('last_name', this.last_name);
      fd.append('email', this.email);
      this.loading = true;
      fetch('https://production.renault.ru/duster2-new/backend/public/', {
        method: 'post',
        body: fd
      }).then(function (response) {
        if (response.status === 201) {
          _this.success = true;
          dataLayer.push({
            'event': 'newduster-subscribe-send',
            'eventCategory': 'newduster',
            'eventAction': 'subscribe-form-send'
          });
        }

        return response.json();
      }).then(function (data) {//console.log(data)
      })["finally"](function () {
        _this.loading = false;
      });
    },
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
      document.querySelector('#duster2').addEventListener(event, function () {
        items.forEach(function (item) {
          item.classList.add('animate');
        });
      });
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
    validateCyrillic: function validateCyrillic(value) {
      return value.replace(/[^\u0400-\u04ff\s-]/g, '');
    },
    validateNotCyrillic: function validateNotCyrillic(value) {
      return value.replace(/[\u0400-\u04ff!#$%&*()+,=><^~/|\\{}]/g, '');
    }
  },
  watch: {
    first_name: function first_name(value) {
      this.first_name = this.validateCyrillic(value);
    },
    last_name: function last_name(value) {
      this.last_name = this.validateCyrillic(value);
    },
    email: function email(value) {
      this.email = this.validateNotCyrillic(value);
    }
  },
  mounted: function mounted() {
    this.initVideo();
    this.initAnimations();
  }
});