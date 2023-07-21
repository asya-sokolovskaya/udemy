const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2'),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let firstLastMovieName = prompt('Один из последних просмотренных фильмов?', 'Выкрутасы'),
    firstLastMovieEstimate = prompt('На сколько оцените его?', '8.1'),
    secondLastMovieName = prompt('Один из последних просмотренных фильмов?', 'По соображениям совести'),
    secondLastMovieEstimate = prompt('На сколько оцените его?', '10'); 

personalMovieDB['movies'][firstLastMovieName] = firstLastMovieEstimate;
personalMovieDB['movies'][secondLastMovieName] = secondLastMovieEstimate;

console.log(personalMovieDB);