"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PM = /*#__PURE__*/function () {
  function PM(src) {
    var _this = this;

    _classCallCheck(this, PM);

    this.frameSrc = src;
    this.setHeight();
    setInterval(function () {
      _this.setHeight();
    }, 5000);
    window.addEventListener('resize', function () {
      _this.setHeight();
    });
    window.addEventListener("message", function (event) {
      var message = JSON.parse(event.data);

      if (message.type === 'update_element_text') {
        var element = document.querySelector(message.selector);
        if (!element) return;
        element.innerHTML = message.text;
      }
    });
  }

  _createClass(PM, [{
    key: "pm",
    value: function pm(message) {
      window.parent.postMessage(JSON.stringify(message), '*');
    }
  }, {
    key: "scrollPageTo",
    value: function scrollPageTo(selector) {
      var offs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var to = document.querySelector(selector);

      if (to) {
        var offset = to.getBoundingClientRect().top + window.pageYOffset + offs;
        var message = {
          type: 'scroll_to',
          data: offset,
          frameSrc: this.frameSrc
        };
        this.pm(message);
      }
    }
  }, {
    key: "linkTo",
    value: function linkTo(link) {
      var blank = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var message = {
        type: 'link_to',
        data: {
          link: link,
          blank: blank
        },
        frameSrc: this.frameSrc
      };
      this.pm(message);
    }
  }, {
    key: "getMetrix",
    value: function getMetrix() {
      var message = {
        type: 'get_metrix',
        frameSrc: this.frameSrc
      };
      this.pm(message);
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var message = {
        type: 'get_cookie',
        name: name,
        frameSrc: this.frameSrc
      };
      this.pm(message);
    }
  }, {
    key: "showPopupImage",
    value: function showPopupImage(src) {
      var message = {
        type: 'show_popup_image',
        imageSrc: src,
        frameSrc: this.frameSrc
      };
      this.pm(message);
    } // Меняем текст елемента в переданном айфрейме

  }, {
    key: "changeElementTextInSiblingFrame",
    value: function changeElementTextInSiblingFrame(text, targetFrameUrl, selector) {
      var message = {
        type: 'change_element_text_in_sibling_frame',
        text: text,
        targetFrameUrl: targetFrameUrl,
        selector: selector,
        frameSrc: this.frameSrc
      };
      this.pm(message);
    }
  }, {
    key: "setHeight",
    value: function setHeight() {
      var message = {
        type: 'resize',
        data: document.body.offsetHeight,
        frameSrc: this.frameSrc
      };
      this.pm(message);
    }
  }, {
    key: "dataLayer",
    value: function dataLayer(data) {
      var message = {
        type: 'dataLayer',
        data: data,
        frameSrc: this.frameSrc
      };
      this.pm(message);
    }
  }]);

  return PM;
}();