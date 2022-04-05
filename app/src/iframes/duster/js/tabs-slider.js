"use strict";

new Vue({
  el: '#app',
  data: function data() {
    return {
      activeSlide: null
    };
  },
  watch: {
    activeSlide: function activeSlide() {
      /* if(!this.activeSlide){return};
       if(this.activeSlide===1){
           ga('send', 'event', 'click', 'duster-comfort','Функциональный руль');
           console.log('ga(\'send\', \'event\', \'click\', \'duster-comfort\',\'Функциональный руль\')')
       } else if(this.activeSlide===2){
           ga('send', 'event', 'click', 'duster-comfort','Климат-контроль');
           console.log('ga(\'send\', \'event\', \'click\', \'duster-comfort\',\'Климат-контроль\')')
       } else if(this.activeSlide===3){
           ga('send', 'event', 'click', 'duster-comfort','Водительское сиденье с поясничной поддержкой');
           console.log('ga(\'send\', \'event\', \'click\', \'duster-comfort\',\'Водительское сиденье с поясничной поддержкой\')')
       } else if(this.activeSlide===4){
           ga('send', 'event', 'click', 'duster-comfort','5 разъемов USB и 2 розетки 12В');
           console.log('ga(\'send\', \'event\', \'click\', \'duster-comfort\',\'5 разъемов USB и 2 розетки 12В\')')
       } else if(this.activeSlide===5){
           ga('send', 'event', 'click', 'duster-comfort','Выдвижной регулируемый подлокотник');
           console.log('ga(\'send\', \'event\', \'click\', \'duster-comfort\',\'Выдвижной регулируемый подлокотник\')')
       }*/
    }
  }
});