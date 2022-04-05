"use strict";

new Vue({
  el: '#app',
  watch: {
    /*activeLeft(){
        if(this.activeLeft){
            ga('send', 'event', 'view', 'duster-more-seats','Максимальный объем багажника 1720 л')
            console.log('ga(\'send\', \'event\', \'view\', \'duster-more-seats\',\'Максимальный объем багажника 1720 л\')')
        } else {
            ga('send', 'event', 'view', 'duster-more-seats','Объем багажника 428 л до шторки и 662 л до потолка')
            console.log('ga(\'send\', \'event\', \'view\', \'duster-more-seats\',\'Объем багажника 428 л до шторки и 662 л до потолка\')')
        }
    }*/
  },
  data: function data() {
    return {
      activeLeft: true
    };
  }
});