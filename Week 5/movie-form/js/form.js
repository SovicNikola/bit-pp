var btn = document.querySelector("#create-movie-btn");
btn.addEventListener("click", function () {
  createMovie();
});
var arrayMovie = [];
var selectDrop = document.querySelector("#movie-list");

function createMovie() {
  // var movieValue = "m"
  var titleElement = document.querySelector("#title");
  var movLength = document.querySelector("#minutes");
  var genre = document.querySelector("#zanr");
  var errorElement = document.querySelector("#error-show");
  var display = document.querySelector("#show-movies");

  if (
    parseInt(movLength.value) == movLength.value &&
    titleElement.value != "" &&
    genre.value != "-"
  ) {
    var newMovie = new Movie(titleElement.value, movLength.value, genre.value);
    arrayMovie.push(newMovie);
    console.log(arrayMovie);
    errorElement.textContent = "";
  } else if (titleElement.value == "") {
    errorElement.textContent = "Insert the number for movie length!";
  } else {
    errorElement.textContent = "Insert correct genre!";
  }
  var drop = "<option>" + "-" + "</option>";
  var list = "<ul>";
  for (var i = 0; i < arrayMovie.length; i++) {
    list += "<li>" + arrayMovie[i].getData() + "</li>";
    drop += "<option> " + arrayMovie[i].getData() + "</option>";
  }

  list += "</ul>";

  selectDrop.innerHTML = drop;
  display.innerHTML = list;
  titleElement.value = "";
  movLength.value = "";
  genre.value = "-";
}

var btnCreateProgram = document.querySelector("#btn-create-program");
btnCreateProgram.addEventListener("click", function () {
  createProgram();
});

var programArray = [];
var dropProgram = document.querySelector("#dropProgram");
var show = document.querySelector("#show-program");

function createProgram() {
  var today = new Date();
  var datum = document.querySelector("#date");
  var programName = document.querySelector("#programName");
  var error = document.querySelector("#error-date");
  var date = datum.value;

  error.textContent = "";

  if (new Date(date) > today) {
    // moramo da poredimo kao dva objekta,a .value vraca string
    var newProgram = new Program(date, programName.value);
    programArray.push(newProgram);
    console.log(programName.value);
  } else {
    error.textContent = "Please insert valid date";
  }

  var dropListProgram = "<option>" + "-" + "</option>";
  var listProgram = "<ul>";
  for (var i = 0; i < programArray.length; i++) {
    listProgram += "<li>" + programArray[i].getData() + "</li>";
    dropListProgram +=
      "<option> " + programArray[i].getDataName() + "</option>";
  }
  listProgram += "</ul>";

  show.innerHTML = listProgram;
  dropProgram.innerHTML = dropListProgram;
  programName.value = "-";
}
var ButtonAdMovie = document.querySelector("#btn-add-movie-to-program");
ButtonAdMovie.addEventListener("click", function () {
  movieAdd();
  update();
});
var selektovanFilm;
var selektovaniProgram;

function movieAdd() {
  var movieSelect = selectDrop.value;
  var programSelect = dropProgram.value;
  var error = document.querySelector("#error");

  error.textContent = "";

  // for (var i = 0; i < arrayMovie.length; i++) {
  //   if (arrayMovie[i].getData() == movieSelect) {
  //     selektovanFilm = arrayMovie[i];
  //   }
  // }

  // for (var i = 0; i < programArray.length; i++) {
  //   if (programArray[i].getData() == programSelect) {
  //     selektovaniProgram = programArray[i];
  //   }
  // }
  var lengthM = selektovanFilm.length;
  var counterM = 0;
  var genreM = selektovanFilm.genre;

  for (i = 0; i < selektovaniProgram.listOfMovies.length; i++) {
    lengthM += selektovaniProgram.listOfMovies[i].length;
    if (genreM == selektovaniProgram.listOfMovies[i].genre) {
      counterM += 1;
    }
  }
  selectDrop.value = "-";

  if (counterM < 4 && lengthM < 480) {
    selektovaniProgram.addMovie(selektovanFilm);
  } else if (counterM >= 4) {
    error.textContent = "There are more than 4 movies of " + genreM + " genre!";
  } else {
    error.textContent =
      "Total length of all movies in this program will be more than 8h!";
  }
}

function update() {
  var dropListProgram = "<option>" + "-" + "</option>";
  var listProgram = "<ul>";
  for (var i = 0; i < programArray.length; i++) {
    listProgram += "<li>" + programArray[i].getData() + "</li>";
    dropListProgram +=
      "<option> " + programArray[i].getDataName() + "</option>";
  }
  listProgram += "</ul>";

  show.innerHTML = listProgram;
  dropProgram.innerHTML = dropListProgram;
}
