const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2'),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

for(let i = 0; i < 2; i++) {
    let lastMovieName = prompt('Один из последних просмотренных фильмов?', 'Выкрутасы')
        lastMovieEstimate = prompt('На сколько оцените его?', '8.1');

    if(lastMovieName != '' && lastMovieEstimate != '' && lastMovieName != null && lastMovieEstimate != null && lastMovieName.length < 50) {
        personalMovieDB['movies'][lastMovieName] = lastMovieEstimate;
    } else {
        i--;
    }
}    

/* let i = 0
while(i < 2) {
    let lastMovieName = prompt('Один из последних просмотренных фильмов?', 'Выкрутасы')
        lastMovieEstimate = prompt('На сколько оцените его?', '8.1');

    if(lastMovieName != '' && lastMovieEstimate != '' && lastMovieName != null && lastMovieEstimate != null && lastMovieName.length < 50) {
        personalMovieDB['movies'][lastMovieName] = lastMovieEstimate;
        i++;
    } else {
        i--;
    }  
} */

if(personalMovieDB['count'] < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if(personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
    console.log('Вы классический зритель');
} else if(personalMovieDB['count'] > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);