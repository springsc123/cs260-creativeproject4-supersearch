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

          try {
            for (let i = 0; i < response.results.length; i++) {
              console.log("IMAGE URL: " + response.results[i].image.url);
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
          }
          catch (error) {

            if (response.response == "error") {
              let ali = ["Sorry, there are no supers with that key word", "Spring", "Tess"]
              var person = {
                name: "Tess & Spring",
                img: "./images/us.png",

                //Appearance Information
                aliases: ali,

                //Stats
                combat: "We're super powerful",
                intelligence: "5 million",
                power: "eh, we don't really gym",
                speed: "like the wind",

                //Biography Information
                fullName: "We'd rather not say",
                alterEgos: "CS260 students",
                publisher: "Primbu & Co.",
              };
              this.supers.push(person);
            }
          }

        });
    },
  },
});
