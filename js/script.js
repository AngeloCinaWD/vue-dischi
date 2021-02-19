var app = new Vue ({ //instanzio vue
  el: "#app",
  data: {
    dischi: [] //creo una proprietà dischi che è un array vuoto in cui pusherò tutti i dischi, ogni disco è un oggetto contennete informazioni
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => { //con arrow function
      risposta.data.response.forEach((element) => {
        this.dischi.push({poster: element.poster, title: element.title, author: element.author, genre: element.genre, year: element.year})
      });
      // this.dischi = risposta.data.response;
    });
    console.log(this.dischi);
  }
});
