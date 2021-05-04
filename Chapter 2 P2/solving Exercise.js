var MoviesDataBase = {
  "Avengers: Endgame": {
    Title: "Avengers: Endgame",
    Year: 2019,
    Rate: 8.4,
    Raters: 2675,
  },
  "Pirates of the Caribbean: The Curse of the Black Pearl": {
    Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    Year: 2003,
    Rate: 7.7,
    Raters: 4856,
  },
  "Pulp Fiction": { Title: "Pulp Fiction", Year: 1994, Rate: 8.9, Raters: 10 },
};

function recieveMovie(title) {
  return new Promise((res, rej) => {
    var movie = MoviesDataBase[title];
    if (movie) res(movie);
    else rej("Movie not found !!");
  });
}
function UpdateMovie(Movie) {
  return new Promise((resolve, reject) => {
    var movie = MoviesDataBase[Movie.Title];
    if (movie) {
      MoviesDataBase[Movie.Title] = Movie;
      resolve("Movie is up to date");
    } else reject("Couldn't find movie to update");
  });
}
function RateMovie(rate) {
  return (movie) => {
    return {
      ...movie,
      Rate:
        rate < 10 && rate > 0
          ? (movie.Rate * movie.Raters + rate) / (movie.Raters + 1)
          : movie.Rate,
      Raters: movie.Raters + 1,
    }; // updated copie of the movie
  };
}
/*
var listOfChanges = [];
listOfChanges.push(
  recieveMovie("Pulp Fiction")
    .then(RateMovie(10))
    .then(UpdateMovie)
    .catch(console.error)
);
listOfChanges.push(
  recieveMovie("Green Mile")
    .then(RateMovie(9))
    .then(UpdateMovie)
    .catch(console.error)
);
listOfChanges.push(
  recieveMovie("Avengers: Endgame")
    .then(RateMovie(5))
    .then(UpdateMovie)
    .catch(console.error)
);
Promise.all(listOfChanges)
  .then(console.log)
  .then(() => {
    console.log(MoviesDataBase);
  });
*/
async function AllRates() {
  var changedMovies = [],
    temp;

  try {
    temp = await recieveMovie("Pulp Fiction")
      .then(RateMovie(10))
      .then(UpdateMovie);

    changedMovies.push(temp);
  } catch (e) {
    console.error(e);
  }

  try {
    temp = await recieveMovie("Green Mile")
      .then(RateMovie(9))
      .then(UpdateMovie);

    changedMovies.push(temp);
  } catch (e) {
    console.error(e);
  }
  try {
    temp = await recieveMovie("Avengers: Endgame")
      .then(RateMovie(5))
      .then(UpdateMovie);

    changedMovies.push(temp);
  } catch (e) {
    console.error(e);
  }

  return changedMovies;
}
AllRates().then((movies) => {
  console.log(movies);
});
