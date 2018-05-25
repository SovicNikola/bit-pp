function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre.charAt(0).toUpperCase() + genre.charAt(genre.length - 1).toUpperCase()
}

Movie.prototype.getData = function() {
    return this.title + ', ' + this.length + ', ' + this.genre
}

function Program(date, name) {
    this.listOfMovies = [];
    this.numOfMovies = 0;
    this.date = (function() {
        var newDate = new Date(date);
        var dd = newDate.getDate();
        var mm = newDate.getMonth() + 1;
        var yyyy = parseInt(newDate.getFullYear());
        if (dd < 10) { dd = '0' + dd };
        if (mm < 10) { mm = '0' + mm };
        newDate = dd + '.' + mm + '.' + yyyy
            ////u funkciju
        return newDate;
    })();
    this.name = name;

}

Program.prototype.addMovie = function(movie) {
    this.listOfMovies.push(movie);
    this.numOfMovies++

}
Program.prototype.getData = function() {
    var moviesLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var a = this.listOfMovies[i];
        moviesLength += a.length;

    }
    if (moviesLength == 0) {
        return this.date + ', ' + 'Program:' + this.name + ' TBA!'
    }
    return this.date + ',program : ' + this.name + ', ' + this.numOfMovies + ' movies,duration: ' + moviesLength + ' min';

}
Program.prototype.getDataName = function() {

    var moviesLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var a = this.listOfMovies[i];
        moviesLength += a.length;

    }
    if (moviesLength == 0) {
        return this.date + ', ' + 'Program:' + this.name + ' TBA!'
    } else {
        return this.date + ',' + this.numOfMovies + ' movies,name: ' + this.name;
    }
}