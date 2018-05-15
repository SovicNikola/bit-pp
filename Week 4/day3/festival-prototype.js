'use strict';

(function () {

    function Genre(name) {
        this.genre = name;

        this.getDataGenre = function () {
            var firstLetter = this.genre.charAt(0).toUpperCase();
            var lastLetter = this.genre.charAt(this.genre.length - 1).toUpperCase();

            return firstLetter.concat(lastLetter);
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.movieLength = parseInt(length);

        this.getDataMovie = function () {
            return this.title.concat(', ', this.movieLength, 'min, ', this.genre.getDataGenre());
        }

    }

    function Program(date) {
        this.date = new Date(date).toDateString();
        this.listOfMovie = [];
        this.totalNumberOfMovies = 0;

        this.addMovie = function (movie) {
            this.listOfMovie.push(movie);
            this.totalNumberOfMovies++;
        }

        this.getDataProgram = function () {
            var totalMin = 0;
            var dataMovies = '';
            var result;

            for (var i = 0; i < this.listOfMovie.length; i++) {
                var a = this.listOfMovie[i];
                totalMin += a.movieLength;
                dataMovies += a.getDataMovie() + '\n\t';

                result = this.date + ', program duration ' + totalMin + 'min, \n\t' + dataMovies + '\n';
            } return result
        }
    }

    function Festival(name) {
        this.festivalName = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = 0;

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);

        }

    }


    var comedy = new Genre('comedy');
    var action = new Genre('action');
    var drama = new Genre('drama');
    var smrtonosnoOruzije = new Movie('Leathle Wapon', action, '96min');
    var piratiSaKariba = new Movie('PiratesOfCaribian', action, '116min');
    var gospodar = new Movie('Lord of the rings', action, '196min');
    var taxi = new Movie('Taxi', comedy, '103min');
    var vrabac = ('Red Sparow', drama, '117min');
    var roki = ('Roki', action, '95min');
    var subota = new Program('6/5/2018');
    var nedelja = new Program('6/6/2018');
    var festivalIgranogFilma = new Festival('6/5/2018');
    subota.addMovie(smrtonosnoOruzije);
    subota.addMovie(piratiSaKariba);
    subota.addMovie(gospodar);
    subota.addMovie(taxi);
    nedelja.addMovie(vrabac);
    nedelja.addMovie(roki);
    festivalIgranogFilma.addProgram(subota);
    festivalIgranogFilma.addProgram(nedelja);
    console.log(subota.getDataProgram());
    // console.log(subota);













    // console.log(smrtonosnoOruzije.getDataMovie());


})();