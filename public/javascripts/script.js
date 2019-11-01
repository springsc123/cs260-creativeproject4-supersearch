var app = new Vue({
  el: '#app',
  data: {
    supers: [],
    supername: '',
  },
  methods: {
    async superREST() {
      console.log("SUPER: ");
      var url = "/searchsuper?q=" + this.supername;
      console.log("URL", url);
      
      // /*global fetch*/
      // fetch(url)
      //   .then((data) => {
      //     return (data.json());
      //   })
      //   .then((citylist) => {
      //     this.cities = [];
      //     console.log("city returned: ");
      //     console.log(citylist);
      //     console.log("length: " + citylist.length);
          
      //     for(var i = 0; i < citylist.length; i++){
      //       this.cities.push({ name: citylist[i].city });
      //     }
      //   });
    },
  },
});
