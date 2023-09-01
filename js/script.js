const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB['count'] = +prompt('Сколько фильмов вы уже посмотрели?', '2').trim();

        while(personalMovieDB['count'] == '' || personalMovieDB['count'] == null || isNaN(personalMovieDB['count'])) {
            personalMovieDB['count'] = +prompt('Сколько фильмов вы уже посмотрели?', '2').trim();
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB['count'] < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if(personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
            console.log('Вы классический зритель');
        } else if(personalMovieDB['count'] > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function(object) {
        for(let i = 0; i < 3; i++) {
            object['genres'][i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
    
            if(object['genres'][i] === '' || object['genres'][i] == null) {
                i--;
            }
        }

        object['genres'].forEach(function(item, index) {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    writeYourGenresSecondWay: function(object) {
        for(let i = 0; i < 1; i++) {
            const genres = prompt('Введите ваши любимые жанры через запятую', '').toLowerCase();

            if(genres === '' || genres == null) {
                i--;
            } else {
                object['genres'] = genres.split(', ').sort();
            }
        }
    },
    showMyDB: function(object) {
        if(!object['privat']) {
            return object;
        }
    },
    toggleVisibleMyDB: function(object) {
        if(object['privat']) {
            object['privat'] = false;
        } else {
            object['privat'] = true;
        }
    }
};
