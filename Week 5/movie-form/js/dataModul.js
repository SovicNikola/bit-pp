var dataModule = (function (UIModule) {
  //**************************************************************************** 
  // CREATE MOVIE
  /***************************************************************************** */
  var arrayMovie = [];
  function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre =
      genre.charAt(0).toUpperCase() +
      genre.charAt(genre.length - 1).toUpperCase();
  }
  Movie.prototype.getData = function () {
    return this.title + ", " + this.length + ", " + this.genre;
  };

  function addToMoviesArray(movie) {
    arrayMovie.push(movie);
  }
  function createMovieList() {
    var list = "<ul>";

    arrayMovie.forEach(function (element) {
      list += "<li>" + element.getData() + "</li>";
    });

    list += "</ul>";
    return list;
  }

  function createMovieDropdownList() {
    var drop;
    arrayMovie.forEach(function (element) {
      drop += "<option> " + element.getData() + "</option>";

    });

    return drop;
  }
  // ToDo database and name validation before crate movie!!!!

  /*************************************************************************** 
  // CREATE PROGRAM
  /**************************************************************************** */

  var arrayProgram = [];
  var arrayProgramGetData = [];
  var arrayProgramDropdown = [];
  function Program(date, name) {
    this.listOfMovies = [];
    this.numOfMovies = 0;
    this.date = (function () {
      var newDate = new Date(date);
      var dd = newDate.getDate();
      var mm = newDate.getMonth() + 1;
      var yyyy = parseInt(newDate.getFullYear());
      if (dd < 10) { dd = '0' + dd };
      if (mm < 10) { mm = '0' + mm };
      newDate = dd + '.' + mm + '.' + yyyy
      return newDate;
    })();
    this.name = name;
  }

  Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.numOfMovies++

  }
  Program.prototype.getData = function () {
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

  // for program dropdown list
  Program.prototype.getDataName = function () {

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
  function addProgramToArray(program) {
    arrayProgram.push(program);
  }
  function addProgramStringToArray(program) {
    arrayProgramGetData.push(program.getData())
  }
  function addProgramDropdown(program) {
    arrayProgramDropdown.push(program.getDataName());
  }





  /****************************************************************************
   *  ADD MOVIE TO THE PROGRAM
   ****************************************************************************/
  var showMovieDrop = document.querySelector(UIModule.UISelectors.selectMovieList);
  var programDropdownList = document.querySelector(UIModule.UISelectors.selectProgramList);
  var selectedMovie = showMovieDrop.value;
  var selectedProgram = programDropdownList.value;
  var movieToBePush;
  var programToBePush;
  function addMovie(movie, program) {
    program.addMovie(movie);
  }
  function findMovieInArray() {
    arrayMovie.forEach(function (element) {
      if (element.getDAta() == selectedMovie) {
        movieToBePush = element;
      }
    })
    return movieToBePush;
  }

  function findProgramInArray() {
    programArray.forEach(function (element) {
      if (element.getDAta() == selectedProgram) {
        programToBePush = element;
        break;
      }
    })
    return programToBePush;
  }
  function validationMoviesNumberAndLength() {
    var lengthM = movieToBePush.length;
    var counterM = 0;
    var genreM = movieToBePush.genre;

    for (var i = 0; i < programToBePush.listOfMovies.length; i++) {
      lengthM += programToBePush.listOfMovies[i].length;
      if (genreM == programToBePush.listOfMovies[i].genre) {
        counterM += 1;
      }
    }
    var errorAddMovie = document.querySelector(UIModule.UISelectors.addMovieError)
    if (counterM < 4 && lengthM < 480) {

      return true
    } else if (counterM >= 4) {
      errorAddMovie.textContent = "There are more than 4 movies of " + genreM + " genre!";
      return false
    } else {
      errorAddMovie.textContent =
        "Total length of all movies in this program will be more than 8h!";
      return false
    }
  }

  /*******************************************************************
   *  UPDATE LIST AFTER ADDING THE MOVIE 
   **********************************************************************/
  function updateListProgram() {
    var dropListProgram = "<option>" + "-" + "</option>";
    var listProgram = "<ul>";
    for (var i = 0; i < programArray.length; i++) {
      listProgram += "<li>" + programArray[i].getData() + "</li>";
    }
    listProgram += "</ul>";

    return listProgram;
  }

  function updateDropListProgram() {
    var dropListProgram = "<option>" + "-" + "</option>";

    for (var i = 0; i < programArray.length; i++) {
      dropListProgram += "<option> " + programArray[i].getDataName() + "</option>";
    }
    return dropListProgram;
  }

  /***************************************************************************
  // RETURN
  /**************************************************************************** */
  return {
    /*************************** */
    // propreties for movie
    /**************************** */

    createMovie: function (title, length, genre) {
      //...
      return new Movie(title, length, genre);
    },
    addToMoviesArray: addToMoviesArray,
    createMovieList: createMovieList,
    createMovieDropdownList: createMovieDropdownList,

    /******************* */
    // propreties for program
    /******************** */

    createProgram: function (date, name) {

      return new Program(date, name)
    },

    addProgramToArray: addProgramToArray,
    addProgramStringToArray: addProgramStringToArray,
    addProgramDropdown: addProgramDropdown,
    arrayProgram: arrayProgram,
    arrayProgramDropdown: arrayProgramDropdown,
    arrayProgramGetData: arrayProgramGetData,


    /*****************************************
     ** propreties for adding movie
     *****************************************/
    findMovieInArray: findMovieInArray,
    findProgramInArray: findProgramInArray,
    validationMoviesNumberAndLength: validationMoviesNumberAndLength,
    updateListProgram: updateListProgram,
    updateDropListProgram: updateDropListProgram,
    addMovie: addMovie
  };
})(UIModule);
