
function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;

}
Movie.prototype.getData = function () {
    var result = "";
    result += this.title + ", " + this.length + " min, " + this.genre[0] + this.genre[genre.length - 1].toUpperCase();
    return result;
};

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
    for (var i = 0; i < this.listOfMovies.length; i++) {
        this.listOfMovies.push(movie);
        this.numberOfMovies++;
        return this.listOfMovies;
    }
}
Program.prototype.totalLengthOfProgram = function () {
    var result = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        result += parseFloat(this.listOfMovies[i].movieLength);
    }
    return result;
}
Program.prototype.getData = function () {
    if (this.numberOfMovies == 0) {
        return this.date + ", program duration: TBA"
    } else {
        return this.date + ", " + this.numberOfMovies + " movies, duration:" + this.totalLengthOfProgram() + "min"
    }
}