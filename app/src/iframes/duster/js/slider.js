"use strict";

new Vue({
  el: '#app',
  data: function data() {
    return {
      activeSlide: 0,
      slidesCount: 4,
      swiper: null
    };
  },
  methods: {},
  mounted: function mounted() {
    var that = this;
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.btn.next',
        prevEl: '.btn.pre'
      },
      loopedSlides: 5,
      on: {
        slideChange: function slideChange() {
          that.activeSlide = this.realIndex;
          /* if(that.activeSlide===0){
               ga('send', 'event', 'click', 'duster-suv-platform','Турбированный Tce 150');
               console.log('ga(\'send\', \'event\', \'click\', \'duster-engine\',\'Турбированный Tce 150\')')
           } else if(that.activeSlide===1){
               ga('send', 'event', 'click', 'duster-suv-platform',' Дизельный Dci');
               console.log('ga(\'send\', \'event\', \'click\', \'duster-engine\',\' Дизельный Dci\')')
           } else if(that.activeSlide===2){
               ga('send', 'event', 'click', 'duster-suv-platform',' Бензиновый 1.6');
               console.log('ga(\'send\', \'event\', \'click\', \'duster-engine\',\' Бензиновый 1.6\')')
           } else if(that.activeSlide===3){
               ga('send', 'event', 'click', 'duster-suv-platform',' Бензиновый 2.0');
               console.log('ga(\'send\', \'event\', \'click\', \'duster-engine\',\'  Бензиновый 2.0\')')
           }*/
        }
      }
    });
  }
});