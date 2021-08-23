let numberOfFilms;
let i;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {

    }
  },
  writeYourGenres: function () {
    for (i = 0; i <= 2; i++) {
      let genr = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genr) {
        personalMovieDB.genres[i] = genr;
      }
    }
  },

  rememberMyFilms: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман ");
    } else {
      console.log("Произошла ошибка");
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    }
  }
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a && b && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
let geners = personalMovieDB.genres;
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
console.log(personalMovieDB.genres.forEach((item, i, genres) => {
  console.log(`Любимый жанр ${i + 1} - это ${item}`);
}));