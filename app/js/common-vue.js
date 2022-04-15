


// exterior-model
if($("[vue-area='exterior-model']").length)
  new Vue({
    el: "[vue-area='exterior-model']",
    data: {
      hash: "",
      statusHash: false,
      tab_index: 0,
      current_complectation: {},
      current_exterior: {},
      wheels: [],
      current_wheel: {}
    },
    async mounted(){
      var vm = this
      const api_url = $(vm.$el).attr("api-url");
      var response = await axios.get(api_url)
      vm.current_complectation = response.data.complectations[0]
      
      vm.current_exterior = vm.current_complectation.exteriors[0]
      vm.current_wheel = vm.current_exterior.wheels[0];

      setTimeout(() => {
        window.CI360.init();	
        $('.responsive-tab-model').responsiveTabs({
          active: 0, 
          startCollapsed: 'accordion',
          click: function(event, tab){
            vm.tab_index = tab.id
            window.CI360.init();
          }
        });
      }, 1);
    },
    methods: {
      changeExterior(exterior, parentClass){
        this.current_exterior = exterior;
        parentClass = parentClass || ".exterior";
        window.CI360.destroy();
        $(parentClass+" [data-folder]").attr('data-folder', this.current_exterior.wheels[0].folder+'/')
        $(parentClass+" [data-amount]").attr('data-amount', 24)
        window.CI360.init();
      },
      changeWheel(wheel, parentClass){
        var vm = this;
        this.current_wheel = wheel;

        parentClass = parentClass || ".exterior";
        window.CI360.destroy();
        $(parentClass+" [data-folder]").attr('data-folder', vm.current_wheel.folder+'/')
        $(parentClass+" [data-amount]").attr('data-amount', 24)
        window.CI360.init();
      }
    }
  })
