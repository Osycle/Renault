

// exterior-model
new Vue({
  el: "[vue-area='exterior-model']",
  data: {
    hash: "",
    statusHash: false,
    current_complectation: {},
    current_exterior: {},
  },
  async mounted(){
    var response = await axios.get("https://renault.uz/models.php")
    this.current_complectation = response.data.models[0].complectations[0]
    this.current_exterior = this.current_complectation.exteriors[0]
    this.current_complectation.wheels = [
      {
        name: "17-дюймовые двухцветные легкосплавные диски MONTIS с эффектом алмазной шлифовки",
        price: 0,
      }
    ]
    setTimeout(() => {
      window.CI360.init();	
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
    }
  }
})
