var app = new Vue ({ //instanzio vue
  el: "#app",
  data: {
    selected: "",
    dischi: [] //creo una proprietà email che è un array vuoto in cui pusherò tutti i dischi, ogni disco è un oggetto contennete informazioni
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => { //con arrow function
      risposta.data.response.forEach((element) => {
        this.dischi.push({poster: element.poster, title: element.title, author: element.author, genre: element.genre, year: element.year})
      });
    });
    console.log(this.dischi);
  }
});
