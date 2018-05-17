var array = [];
var array2 = [];
var array3 = [];

document.querySelector('#createMovie').addEventListener('click', function () {
    createMovie();
});

function createMovie() {
    var titleElement = document.querySelector('#title');
    var lengthElement = document.querySelector('#length');
    var genreElement = document.querySelector('#genre');
    var currentArrayElement = document.querySelector('#current-array');
    var errorElement = document.querySelector('#error');



    var title = titleElement.value;
    var length = parseInt(lengthElement.value);
    var genre = genreElement.value;
    if (!isNaN(length)) {
        errorElement.textContent = '' // da ocisti neku gresku ako je bila prethodno
        var movie = new Movie(title, length, genre);
        array.push(movie);
    } else {
        errorElement.textContent = 'Please, insert valid number!';
    }
    titleElement.value = '';  // sve tri linije koda ciste vrednost u datim poljima kada se unese filnm.
    lengthElement.value = '';
    genreElement.value = '-';

    // pravimo listu da svaki uneti film bude u listi
    var movieDropDown = document.querySelector('#movieDrop');
    var list = "<ul>";
    var DropOption = "<option> - </option>";
    for (var i = 0; i < array.length; i++) {
        list += "<li>" + array[i].getData() + "</li>";
        DropOption += "<option>" + array[i].getData() + "</option>";
    }

    list += "</ul>";

    currentArrayElement.innerHTML = list;
    movieDropDown.innerHTML = DropOption;
}




document.querySelector('#createProgram').addEventListener('click', function () {
    createProgram();

});

function createProgram() {

    var dateElement = document.querySelector('#date');
    var secondArrayElement = document.querySelector('#second-array');
    var error2Element = document.querySelector('#error2');

    var date = dateElement.value;
    var today = new Date();

    if (new Date(date) > today) {
        var program = new Program(date);
        array2.push(program);
    } else {
        error2Element.textContent = 'Please, insert valid date!';
    }
    dateElement.value = '';     // cisti datum kada unesemo neki... 

    // pravimo listu da svaki uneti film bude u listi
    var list2 = "<ul>";
    var ProgramDrop = document.querySelector('#programDrop');
    var ProgramDropAdd = "<option> - </option>";

    for (var i = 0; i < array2.length; i++) {
        list2 += "<li>" + array2[i].getData() + "</li>";

        ProgramDropAdd += "<option>" + array2[i].getData() + "</option>";

    }

    list2 += "</ul>";
    secondArrayElement.innerHTML = list2;
    ProgramDrop.innerHTML = ProgramDropAdd;

}

document.querySelector('#addMovieToProgram').addEventListener('click', function () {
    addMovieToProgram();
    Update();

});
function addMovieToProgram() {
    var ProgramDrop = document.querySelector('#programDrop');
    var movie;
    //var program;
    var ProgramFinal = document.querySelector('#second-array');
    var movieDropDown = document.querySelector('#movieDrop');

    for (i = 0; i < array.length; i++) {

        if (movieDropDown.value == array[i].getData()) {
            movie = array[i];
        }
    }
    for (var j = 0; j < array2.length; j++) {
        if (ProgramDrop.value == array2[j].getData()) {
            program = array2[j];
            break;
        }
    }

    array2[j].addMovie(movie);
    //console.log(program);
}

function Update() {

    console.log(array2);
    var list2 = "<ul><li>smrc</li>";
    var secondArrayElement = document.querySelector('#second-array');
    for (var i = 0; i < array2.length; i++) {
        list2 += "<li>" + array2[i].getData() + "</li>";

    }

    list2 += "</ul>";
    console.log(list2);

    secondArrayElement.innerHTML = list2;

    //TODO update za select listicu
}