


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
      
      this.current_complectation.uniq_exteriors =  _.uniqBy(vm.current_complectation.exteriors, "name")
      vm.current_exterior = vm.current_complectation.uniq_exteriors[0]

      vm.current_complectation.exteriors.forEach(exterior => {
        if(exterior.wheel)
          vm.wheels.push(exterior.wheel)
      })
      if(vm.wheels.length > 0){
        vm.wheels = _.uniqBy(vm.wheels, "id")
        vm.current_wheel = vm.current_exterior.wheel;
      }

      setTimeout(() => {
        window.CI360.init();	
        window.az = $('.responsive-tab-model').responsiveTabs({
          startCollapsed: 'accordion',
          click: function(event, tab){
            vm.tab_index = tab.id
            console.log(vm.tab_index, vm)
          }
        });
      }, 1);
    },
    methods: {
      changeExterior(exterior, parentClass){
        this.current_exterior = exterior;
        parentClass = parentClass || ".exterior";
        window.CI360.destroy();
        $(parentClass+" [data-folder]").attr('data-folder', this.current_exterior.folder+'/')
        $(parentClass+" [data-amount]").attr('data-amount', 24)
        window.CI360.init();
      },
      changeWheel(wheel, parentClass){
        this.current_wheel = wheel;
        this.current_complectation.exteriors.forEach(exterior => {
          if(exterior.wheel.id == wheel.id && this.current_exterior.name == exterior.name)
            this.current_exterior = exterior
        })
        parentClass = parentClass || ".exterior";
        window.CI360.destroy();
        $(parentClass+" [data-folder]").attr('data-folder', this.current_exterior.folder+'/')
        $(parentClass+" [data-amount]").attr('data-amount', 24)
        window.CI360.init();
      }
    }
  })
