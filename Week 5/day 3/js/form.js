var array = [];
var array2 = [];


document.querySelector('#createMovie').addEventListener('click', function () {

    createMovie();

});

function createMovie() {
    var errorElement = document.querySelector('#error');
    var currentArrayElement = document.querySelector('#current-array');
    var titleElement = document.querySelector('#title');
    var lengthElement = document.querySelector('#length');
    var genreElement = document.querySelector('#genre');


    var title = titleElement.value;
    var length = parseInt(lengthElement.value);
    var genre = genreElement.value;
    if (!isNaN(length)) {
        errorElement.textContent = ''
        var movie = new Movie(title, length, genre);
        array.push(movie);
    } else {
        errorElement.textContent = 'Please, insert valid number!';
    }
    titleElement.value = '';
    lengthElement.value = '';
    genreElement.value = '-';


    var list = "<ul>";

    for (var i = 0; i < array.length; i++) {
        list += "<li>" + array[i].getData() + "</li>";
    }

    list += "</ul>";

    currentArrayElement.innerHTML = list;
}
document.querySelector('#createProgram').addEventListener('click', function () {
    createProgram();

});
function createProgram() {

    var error2Element = document.querySelector('#error2');
    var secondArrayElement = document.querySelector('#second-array');
    var dateElement = document.querySelector('#date');

    var date = dateElement.value;
    var today = new Date();

    if (new Date(date) > today) {
        var program = new Program(date);
        array2.push(program);
    } else {
        error2Element.textContent = 'Please, insert valid date!';
    }
    dateElement.value = '';


    var list2 = "<ul>";

    for (var i = 0; i < array2.length; i++) {
        list2 += "<li>" + array2[i].getData() + "</li>";
    }

    list2 += "</ul>";
    secondArrayElement.innerHTML = list2;
}
document.querySelector('#addMovie').addEventListener('click', function () {



});