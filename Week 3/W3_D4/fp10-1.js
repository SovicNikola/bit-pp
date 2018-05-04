(function (array) {
    // var a = array[0];
    // var b = array[array.length - 1];

    // array[0] = b;
    // array[array.length - 1] = a;

    var tmp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = tmp;
    console.log(array);
}

)([4, 5, 11, 9, 12, 12, 51]); // pozivamo argumente koji nam trebaju