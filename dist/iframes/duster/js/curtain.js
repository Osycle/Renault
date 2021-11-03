"use strict";

var _splitpanes = splitpanes,
    Splitpanes = _splitpanes.Splitpanes,
    Pane = _splitpanes.Pane;
new Vue({
  el: '#app',
  components: {
    Splitpanes: Splitpanes,
    Pane: Pane
  },
  data: function data() {
    return {
      animated: false,
      activeTab: 1,
      paneSize: 80,
      activeDot: null
    };
  },
  methods: {
    activate: function activate(num) {
      var _this = this;

      this.activeTab = num;
      setTimeout(function () {
        if (num === 1) {
          _this.paneSize = 80;
        } else if (num === 2) {
          _this.paneSize = 20;
        }
      });
      this.animated = true;
      setTimeout(function () {
        _this.animated = false;
      }, 1500);
    },
    resize: function resize(e) {
      this.paneSize = e[0].size;

      if (e[0].size < 50) {
        this.activeTab = 2;
      } else {
        this.activeTab = 1;
      }
    },
    activateDot: function activateDot(num) {
      var _this2 = this;

      this.activeDot = num;
      setTimeout(function () {
        window.onclick = function (e) {
          console.log(e.target.classList.contains('dot'));

          if (e.target.classList.contains('dot')) {
            return;
          }

          _this2.activeDot = null;
          window.onclick = null;
        };
      });
    },
    toggleActiveTab: function toggleActiveTab() {
      var _this3 = this;

      this.animated = true;
      setTimeout(function () {
        _this3.animated = false;
      }, 1500);

      if (this.activeTab === 1) {
        this.activeTab = 2;
        this.paneSize = 20;
      } else {
        this.activeTab = 1;
        this.paneSize = 80;
      }
    }
  }
});