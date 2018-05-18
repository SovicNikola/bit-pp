
function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;

}

// var m = new Movie('Test title', 120, 'drama');

Movie.prototype.getData = function () {
    var result = "";
    result += this.title + ", " + this.length + " min, " + this.genre[0] + this.genre[genre.length - 1];
    return result;
};

// var result; 
// result = m.getData(); 

function Program(date) {
    this.date = (
        function () {
            var today = new Date(date);
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();

            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }
            var newDate = day + '.' + month + "." + year;
            return newDate;
        })();
    this.listOfMovies = [];
    this.numberOfMovies = 0;
}
Program.prototype.addMovie = function (movie) {

    this.listOfMovies.push(movie);
    this.numberOfMovies++;

}
Program.prototype.totalLengthOfProgram = function () {
    // this.listOfMovies = [];
    var result = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        result += this.listOfMovies[i].length;
    }
    return result;
}
Program.prototype.getData = function () {
    // this.listOfMovies = [];
    // var result = 0;
    // for (var i = 0; i < this.listOfMovies.length; i++) {
    //     result += this.listOfMovies[i].length;
    // }
    console.log(this.listOfMovies.length)


    if (this.numberOfMovies == 0) {
        return this.date + ", program duration: TBA"
    } else {
        return this.date + ", " + this.numberOfMovies + " movies, duration:" + this.totalLengthOfProgram() + "min"
    }
}

// var p = new Program(new Date());

// var m1 = new Movie("test1", 123, 'drama');
// var m2 = new Movie("test2", 143, 'drama');

// p.addMovie(m1);
// p.addMovie(m2);

// console.log(p);
// console.log(p.getData());
