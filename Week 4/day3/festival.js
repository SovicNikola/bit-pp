'use strict';
(
    function () {

        function Genre(name) {
            this.name = name;

            // this.getDataGenre = function () {
            //     var firstLetter = this.name.charAt(0).toUpperCase();
            //     var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
            //     return firstLetter.concat(lastLetter);
            // }
        }
        Genre.prototype.getDataGenre = function () {

            var firstLetter = this.name.charAt(0).toUpperCase();
            var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
            return firstLetter.concat(lastLetter);
        }

        function Movie(title, genre, movieLength) {
            this.title = title;
            this.genre = genre;
            this.movieLength = parseInt(movieLength);

            // this.getDataMovie = function () {
            //     return this.title + ', ' + this.movieLength + ', ' + this.genre.getDataGenre();
            // }
        }

        Movie.prototype.getDataMovie = function () {
            return this.title + ', ' + this.movieLength + ', ' + this.genre.getDataGenre();
        }
        Program.prototype.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.numOfMovies++;
        }
        function Program(date) {
            this.date = new Date(date).toDateString();
            this.listOfMovies = [];
            this.numOfMovies = 0;


            // this.addMovie = function (movie) {
            //     // this.listOfMovies.push(movie);
            //     // this.numOfMovies++;


            // this.getDataProgram = function () {
            //     var moviesLength = 0;
            //     var movieList = '';
            //     for (var i = 0; i < this.listOfMovies.length; i++) {
            //         var a = this.listOfMovies[i];
            //         moviesLength += a.movieLength;
            //         movieList += a.getDataMovie() + '\n\t';
            //     }
            //     return this.date + ', program length is ' + moviesLength + 'min \n\t' + movieList;
            // }
        }
        Program.prototype.getDataProgram = function () {
            var moviesLength = 0;
            var movieList = '';
            for (var i = 0; i < this.listOfMovies.length; i++) {
                var a = this.listOfMovies[i];
                moviesLength += a.movieLength;
                movieList += a.getDataMovie() + '\n\t\t';
            }
            return this.date + ', program length is ' + moviesLength + 'min \n\t\t' + movieList;
        }


        function Festival(name) {
            this.name = name;
            this.listOfProgram = [];
            this.numOfAllMovies = 0;

            // this.addProgram = function (program) {
            //     this.listOfProgram.push(program);
            //     this.numOfAllMovies += program.numOfMovies;
            // }

            // this.getDataFestival = function () {
            //     var result = this.name + ' has ' + this.numOfAllMovies + ' movie titles\n';
            //     for (var i = 0; i < this.listOfProgram.length; i++) {
            //         var programInfo = this.listOfProgram[i].getDataProgram() + '\n';
            //         result += programInfo;
            //     }
            //     return result;
            // }
        }
        Festival.prototype.addProgram = function (program) {

            this.listOfProgram.push(program);
            this.numOfAllMovies += program.numOfMovies;
        }

        Festival.prototype.getDataFestival = function () {

            var result = this.name + ' has ' + this.numOfAllMovies + ' movie titles\n\t';
            for (var i = 0; i < this.listOfProgram.length; i++) {
                var programInfo = this.listOfProgram[i].getDataProgram() + '\n\t';
                result += programInfo;
            }
            return result;
        }
        function createMovie(title, genre, movieLength) {
            //genre kao string 
            var genre = new Genre(genre);
            return new Movie(title, genre, movieLength);
        }

        function createProgram(date) {
            return new Program(date);
        }

        var bekstvo = createMovie.call(new Movie, 'The Shawshank Redemption', 'drama', '130min');
        var taxi = createMovie.call(new Movie, 'Taxi', 'comedy', '150min');
        var gospodar = createMovie.apply(new Movie, ['Gospodar prstenova', 'drama', '200min'])
        var UmriMuski = createMovie.apply(new Movie, ['Umri muski', 'action', '115min']);
        var smrtonosnoOruzije = createMovie.call(new Movie, 'Smrtonosno oruzije', 'comedy', '121min');
        var rambo = createMovie.apply(new Movie, ['rambo', 'comedy', '85min']);


        var program = createProgram.call(new Program, '6/5/2018');
        var program2 = createProgram.apply(new Program, ['6/6/2018']);

        var festival = new Festival('Deca srece festival');

        program.addMovie(bekstvo);
        program.addMovie(taxi);
        program.addMovie(gospodar);
        program.addMovie(UmriMuski);
        program2.addMovie(smrtonosnoOruzije);
        program2.addMovie(rambo);
        festival.addProgram(program);
        festival.addProgram(program2);

        console.log(festival.getDataFestival());

    }
)()
