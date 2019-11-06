/*global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    columns: [],
    supers: [],
    supername: '',
  },
  methods: {
    async superREST() {
      this.columns = ['','FACTS','BIO', 'STATS'];
      this.supers = [];
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

          for (let i = 0; i < response.results.length; i++) {
            var person = {
              name: response.results[i].name,
              img: response.results[i].image.url,
              appearance: response.results[i].appearance,
              biography: response.results[i].biography
            };
          }
          this.supers.push(person);
        });
    },
  },
});
