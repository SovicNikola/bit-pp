var array1 = ['1.jpg', '2.jpg', '3.jpg'];
var array2 = ['4.jpg', '5.jpg', '6.jpg'];

function picturesIn(array, x) {
    var div = $('<div>'); // napravili div u jq
    $('body').append(div); // lepim div iza bodija !!! 
    div.addClass(x + 'Div') // Div je da bi posle lepo pisalo prviDiv ili drugiDiv
    $.each(array, function (index, element) {
        var img = $('<img>');
        img.attr('src', this); // odnosi se na i-ti(svaki) element niza. mogao sam da stavim i element, kao u funckiji/// 
        img.attr('width', '33%');
        $('div.' + x + 'Div').append(img); // na div dodajem x+Div i tu lepim sliku
    })
}

$(document).ready(function () {

    picturesIn(array1, 'prvi');
    $($('img')[2]).addClass('selected');
    picturesIn(array2, 'drugi');
    var newSelElement = $('.selected').parent().next().children();

    function remove() {

        $('.selected').removeClass('selected'); // elementu klase selekted skidam klasu selected.
        $(newSelElement[0]).addClass('selected');
    }
    setTimeout(remove, 1000);

});

// ovde je bitno i vazno znati da je HTML potpuno prazan, nema nikakvog sadrzaja, sve sto mi treba u jquerry... dakle ili HTML ili jqurry, nema potrebe oba.
