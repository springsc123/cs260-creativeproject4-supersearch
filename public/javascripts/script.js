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
      
      /*global fetch*/
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((response) => {
          console.log("super search by name returned: ");
          console.log(response);
        });
    },
  },
});
