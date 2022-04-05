"use strict";

new Vue({
  el: '#app',
  watch: {
    /*active(){
        if(this.active===1){
            ga('send', 'event', 'click', 'duster-wheel-drive-mode', 'Постоянный полный привод LOCK')
            console.log('ga(\'send\', \'event\', \'click\', \'duster-wheel-drive-mode\', \'Постоянный полный привод LOCK\')')
        } else if(this.active===2){
            ga('send', 'event', 'click', 'duster-wheel-drive-mode', 'Подключаемый полный привод AUTO')
            console.log('ga(\'send\', \'event\', \'click\', \'duster-wheel-drive-mode\', \'Подключаемый полный привод AUTO\')')
        } else if(this.active===3){
            ga('send', 'event', 'click', 'duster-wheel-drive-mode', 'Режим переднего привода\n' +
                '2WD')
            console.log('ga(\'send\', \'event\', \'click\', \'duster-wheel-drive-mode\', \'Режим переднего привода\n' +
                '2WD\')')
        }
    }*/
  },
  data: function data() {
    return {
      active: 1
    };
  }
});