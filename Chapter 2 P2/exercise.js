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
  "Pulp Fiction": {
    Title: "Pulp Fiction",
    Year: 1994,
    Rate: 8.9,
    Raters: 10,
  },
};
function recieveMovie(title) {
  return new Promise((resolve, reject) => {
    var movie = Object.keys(MoviesDataBase).find(
      (elm) => elm.search(RegExp(title)) > -1
    );
    if (movie) resolve(MoviesDataBase[movie]);
    else reject("Movie not found!!");
  });
}

function RateMovie(rate) {
  return (movie) => {
    return {
      ...movie,
      Rate: (movie.Raters * movie.Rate + rate) / (movie.Raters + 1),
      Raters: movie.Raters + 1,
    };
  };
}
function UpdateMovie(movie) {
  return new Promise((resolve, reject) => {
    var Movie = Object.keys(MoviesDataBase).find(
      (elm) => elm.search(RegExp(movie.Title)) > -1
    );
    if (Movie) {
      MoviesDataBase[Movie] = movie;
      resolve(MoviesDataBase[Movie]);
    } else reject("Movie not found to update!!");
  });
}
var reqs = [];
reqs.push(
  recieveMovie("Pulp Fiction")
    .then(RateMovie(10))
    .then(UpdateMovie)
    .catch(console.error)
);
reqs.push(
  recieveMovie("Green Mile")
    .then(RateMovie(9))
    .then(UpdateMovie)
    .catch(console.error)
);
reqs.push(
  recieveMovie("Avengers: Endgame")
    .then(RateMovie(5))
    .then(UpdateMovie)
    .catch(console.error)
);
Promise.all(reqs).then((all) => {
  for (const elm of all) {
    if (elm) console.log(elm);
    else console.log("couldn't change");
  }
});
