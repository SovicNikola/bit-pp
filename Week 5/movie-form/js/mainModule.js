var mainModule = (function (UIModule, dataModule) {
  /**************************************************
   * ** add event listener for create movie button
   * **********************************************************/

  function addcreateMovieButtonListener() {
    var createMovieButton = document.querySelector(
      UIModule.UISelectors.createMovieButton
    );
    createMovieButton.addEventListener("click", function () {

      var movieNew = UIModule.getMovieData();

      var validationResult = UIModule.validationMovie(movieNew);
      if (validationResult == true) {
        var newCreatedMovie = dataModule.createMovie(
          movieNew.title,
          movieNew.length,
          movieNew.genre
        );
        dataModule.addToMoviesArray(newCreatedMovie);
        var list = dataModule.createMovieList();
        var option = dataModule.createMovieDropdownList();
        var showMovieDrop = document.querySelector(UIModule.UISelectors.selectMovieList);
        var showMovieList = document.querySelector(
          UIModule.UISelectors.showMoviesList
        );
        showMovieList.innerHTML = list;
        showMovieDrop.innerHTML = option; // ToDo clear field when input is done
        UIModule.clearError();
      }
    });
  }

  /****************************************************
   * add event listener for crate program button
  ********************************************************/
  function createEventListenerForCreateProgramButton() {
    var createProgramButton = document.querySelector(UIModule.UISelectors.createProgramButton);

    createProgramButton.addEventListener('click', function () {
      var progrmaNew = UIModule.getProgramData();
      var programDateValidation = UIModule.validateProgramDate(progrmaNew)

      if (programDateValidation) {
        var newCreatedProgram = dataModule.createProgram(progrmaNew.date, progrmaNew.name);
        dataModule.addProgramToArray(newCreatedProgram);
        dataModule.addProgramStringToArray(newCreatedProgram);
        dataModule.addProgramDropdown(newCreatedProgram);
        UIModule.createProgramList()
        UIModule.createProgramDropDownList()
        UIModule.clearProgramError();
      }
    })

  }

  /**************************************************************************
   * add listener for add movie button
   ************************************************************************/


  function addMovieAddListener() {
    var addMovieButton = document.querySelector(UIModule.UISelectors.addMovieButton);

    addMovieButton.addEventListener('click', function () {
      var program;
      var movie;
      var check;

      movie = dataModule.findMovieInArray();
      program = dataModule.findProgramInArray();
      check = dataModule.validationMoviesNumberAndLength();
      // do validation if the movie is created alredy
      if (check) {
        dataModule.addMovie(program, movie);
        var newList = dataModule.updateListProgram();
        var newDrop = dataModule.updateDropListProgram();

      }

    })
  }


  return {
    init: function () {
      console.log("Init...");
      addcreateMovieButtonListener();
      createEventListenerForCreateProgramButton();
      addMovieAddListener();
    }
  };
})(UIModule, dataModule);

mainModule.init();
