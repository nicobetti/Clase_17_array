/**
 * Array de peliculas
 */
const pelis = [
    {
      id: 1,
      titulo: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      genero: "Aventura",
      anio: 2003,
      duracionEnMinutos: 401,
      ganoOscar: true,
      calificacionIMDB: 8.9,
    },
    {
      id: 2,
      titulo: "Doctor Strange",
      director: "Scott Derrickson",
      genero: "Accion",
      anio: 2016,
      duracionEnMinutos: 115,
      ganoOscar: true,
      calificacionIMDB: 7.5,
    },
    {
      id: 3,
      titulo: "The Last Lovecraft: Relic of Cthulhu",
      director: "Henry Saine",
      genero: "Horror",
      anio: 2009,
      duracionEnMinutos: 78,
      ganoOscar: false,
      calificacionIMDB: 5.6,
    },
    {
      id: 4,
      titulo: "The Avengers: Age of Ultron",
      director: "Joss Whedon",
      genero: "Accion",
      anio: 2015,
      duracionEnMinutos: 141,
      ganoOscar: false,
      calificacionIMDB: 7.3,
    },
   ];
   

   /**
    * Objeto que representa el sistema de peliculas
    */
   const sistemaDePeliculas = {
    peliculas: pelis,
    buscarPorId: function (id) {
      for (let i = 0; i < this.peliculas.length; i++) {
        const peli = this.peliculas[i];
        if (peli.id === id) {
          return peli;
        }
      }
    },
    filtrarPorRating: function (ratingMinimo) {
      const arrResultado = [];
      for (let i = 0; i < this.peliculas.length; i++) {
        const pelicula = this.peliculas[i];
        if (pelicula.calificacionIMDB >= ratingMinimo) {
          arrResultado.push(pelicula);
        }
      }
      return arrResultado;
    },
   
    agregarGenero: function (generoBuscado, generoAAgregar) {
      for (let i = 0; i < this.peliculas.length; i++) {
        const pelicula = this.peliculas[i];
        if (pelicula.genero === generoBuscado) {
          pelicula.genero += ", " + generoAAgregar;
        }
      }
      return this.peliculas;
    },
     promedioDeDuracion: function () {
      let sumatoria = 0;
      let resultado = 0;
      for (let i = 0; i < this.peliculas.length; i++) {
        sumatoria += this.peliculas[i].duracionEnMinutos;
      }
      resultado = sumatoria / this.peliculas.length;
      return resultado;
    },
   };

   /**
    * Objeto mejorado utilizando filter, reduce y map
    */
   const sistemaDePeliculasConMetodosDeArrays = {
    peliculas: pelis,
   };


   console.log(sistemaDePeliculas.buscarPorId(2));
//    console.log(sistemaDePeliculasConMetodosDeArrays.buscarPorId(2));
   
   console.log(sistemaDePeliculas.filtrarPorRating(7));
//    console.log(sistemaDePeliculasConMetodosDeArrays.filtrarPorRating(7));
   
//    console.log(
//     sistemaDePeliculasConMetodosDeArrays.agregarGenero("Accion", "Aventura")
//    );
   console.log(sistemaDePeliculas.agregarGenero("Accion", "Aventura"));

   console.log(
    `EL promedio de duracion en minutos de las peliculas en sistema es de: ${sistemaDePeliculas.promedioDeDuracion()}`
  );
//   console.log(
//     `EL promedio de duracion en minutos de las peliculas en sistema es de: ${sistemaDePeliculasConMetodosDeArrays.promedioDeDuracion()}`
//   );