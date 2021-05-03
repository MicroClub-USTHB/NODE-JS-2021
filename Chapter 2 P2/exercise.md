```javascript
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
```

1. Write a function **recieveMovie** that takes a title as an argument and return a promise of getting a data from **MoviesDataBase**.

```javascript
function recieveMovie(title) {
  return; //promise of getting
}
```

2. Write a function **RateMovie** that takes a rate as an argument and return a function that takes a movie as an argument this last one update the rating of the movie.

```javascript
function RateMovie(rate) {
  return (movie) => {
    return; // updated copie of the movie
  };
}
```

3. Write a function **UpdateMovie** that takes a movie as an argument and return a promise to update the movie in the **MoviesDataBase** if possible.

```javascript
function UpdateMovie(movie) {
  return; //promise of updating
}
```

4. Run this code as a test

```javascript
recieveMovie("Pulp Fiction")
  .then(RateMovie(10))
  .then(UpdateMovie)
  .catch(console.error);

recieveMovie("Green Mile")
  .then(RateMovie(9))
  .then(UpdateMovie)
  .catch(console.error);

recieveMovie("Avengers: Endgame")
  .then(RateMovie(5))
  .then(UpdateMovie)
  .catch(console.error);
```

5. try to Sync all the promises.

```javascript
async AllRates(){
    // code
}
AllRates().then(()=>{
    console.log(MoviesDataBase);
})
```
