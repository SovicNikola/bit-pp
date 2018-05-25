var UIModule = (function () {
  var UISelectors = {
    titleField: "#title",
    lengthField: "#minutes",
    genreField: "#zanr",
    createMovieButton: "#create-movie-btn",
    showMoviesList: "#show-movies",
    showErrorInput: "#error-show",
    dateField: "#dateInput",
    programNameField: "#programName",
    createProgramButton: "#btn-create-program",
    showErrorProgramDate: '#error-date',
    showProgramList: '#show-program',
    selectMovieList: "#movie-list",
    selectProgramList: "#dropProgram",
    addMovieButton: "#btn-add-movie-to-program",
    addMovieError: "#error"
  };

  var titleInput = document.querySelector(UISelectors.titleField);
  var lengthInput = document.querySelector(UISelectors.lengthField);
  var genreInput = document.querySelector(UISelectors.genreField);
  var showErrorInput = document.querySelector(UISelectors.showErrorInput);
  var programDateInput = document.querySelector(UISelectors.dateField);
  var programNameInput = document.querySelector(UISelectors.programNameField);
  var showErrorProgramDate = document.querySelector(UISelectors.showErrorProgramDate);



  /******************************************************************** 
  //COLECT MOVIE DATA
  /********************************************************************************* */


  function getMovieData() {
    var movie = {};
    movie.title = titleInput.value;
    movie.length = lengthInput.value;
    movie.genre = genreInput.value;

    return movie;
  }

  function validationMovie(movie) {
    if (
      parseInt(movie.length) == movie.length &&
      movie.title != "" &&
      movie.genre != "-") {
      //   showErrorInput.textContent = "Input is ok";
      return true;
    } else if (movie.title == "") {
      showErrorInput.textContent = "Insert title!";
    } else if (movie.genre == "-") {
      showErrorInput.textContent = "Select genre!";
    } else {
      showErrorInput.textContent = "Insert the number for movie length!";
    }
    return false;
  }
  function clearError() {
    showErrorInput.textContent = "";
  }


  /**************************************************************************** 
  // COLECT PROGRAM DATA
  /***************************************************************************** */

  function getProgramData() {
    var program = {};

    program.name = programNameInput.value;
    program.date = programDateInput.value

    return program;
  }

  function validateProgramDate(program) {
    console.log(program.date)
    if (new Date(program.date) > new Date) {
      return true
    } else {
      showErrorProgramDate.textContent = "Insert valid date!";
      return false
    }

  }

  function clearProgramError() {
    var errorAddMovie = document.querySelector(UISelectors.addMovieError)
    showErrorProgramDate.textContent = '';
  }

  function createProgramList(array) {
    var listProgram = "<ul>";

    dataModule.arrayProgramGetData.forEach(function (element) {
      listProgram += "<li>" + element + "</li>";
    })
    listProgram += "</ul>";
    var showProgramList = document.querySelector(UISelectors.showProgramList);
    showProgramList.innerHTML = listProgram;

  }

  function createProgramDropDownList() {
    var dropListProgram;
    var programDropdownList = document.querySelector(UISelectors.selectProgramList);

    dataModule.arrayProgramDropdown.forEach(function (element) { //ovo ne treba verovatno ovde jer uvezuje data modul i UI modul??
      dropListProgram += "<option> " + element + "</option>";
    })
    programDropdownList.innerHTML = dropListProgram;


  }


  /************************************************************
   * colect data for add movie
   *************************************************************/
  var selektovaniProgram;
  var selektovaniFilm;
  function getAddMovieData() {
    var movieToAddToProgram = {};
    var selectedMovie = showMovieDrop.value;
    var selectedProgram = programDropdownList.value;
    return movieToAddToProgram;

  }
  //ToDo clear dropdown lists both
  function clearDropDownValues() { }

  function clearAddMovieError() {
    errorAddMovie.textContent = '';
  }


  return {
    UISelectors: UISelectors,
    /************************************************** 
    //for create movie
    /****************************************************/

    clearError: clearError,
    getMovieData: getMovieData,
    validationMovie: validationMovie,

    /*************************************************************
     * *** for crate program
     * ***********************************************************/
    createProgramList: createProgramList,
    createProgramDropDownList: createProgramDropDownList,
    getProgramData: getProgramData,
    validateProgramDate: validateProgramDate,
    clearProgramError: clearProgramError,
    clearAddMovieError: clearAddMovieError,
    // clearDropDownValues:clearDropDownValues  not done jet!!
  };
})();
