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
      this.columns = ['', 'NAMES', 'BIO', 'STATS'];
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
            
            alises = []
            // Get aliases
            for (var j = 0; j < response.results[i].biography.aliases.length; j++) {
              alises.push(response.results[i].biography.aliases[j])
            }

            var person = {
              name: response.results[i].name,
              img: response.results[i].image.url,

              //Appearance Information
              aliases: alises,

              //Stats
              combat: response.results[i].powerstats.combat,
              intelligence: response.results[i].powerstats.intelligence,
              power: response.results[i].powerstats.power,
              speed: response.results[i].powerstats.speed,

              //Biography Information
              fullName: response.results[i].biography["full-name"],
              alterEgos: response.results[i].biography["alter-egos"],
              publisher: response.results[i].biography.publisher,
            };
            this.supers.push(person);
          }
        });
    },
  },
});
