let numberOfFilms;
      
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2').trim();

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2').trim();
    }
}  

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let lastMovieName = prompt('Один из последних просмотренных фильмов?', 'Выкрутасы').trim()
            lastMovieEstimate = prompt('На сколько оцените его?', '8.1').trim();
    
        if(lastMovieName != '' && lastMovieEstimate != '' && lastMovieName != null && lastMovieEstimate != null && lastMovieName.length < 50) {
            personalMovieDB['movies'][lastMovieName] = lastMovieEstimate;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }    
}

rememberMyFilms();

function showMyDB(object) {
    if(!object['privat']) {
        return object;
    }
}

console.log(showMyDB(personalMovieDB));

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

function detectPersonalLevel() {
    if(personalMovieDB['count'] < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if(personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB['count'] > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}


detectPersonalLevel();

function writeYourGenres(object) {
    for(let i = 0; i < 3; i++) {
        object['genres'][i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();

        if(object['genres'][i] === '' || object['genres'][i] == null) {
            i--;
        }
    }
}

writeYourGenres(personalMovieDB);


// console.log(personalMovieDB);