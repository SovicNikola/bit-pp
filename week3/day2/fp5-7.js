'use strict'

var stringFromArray = function (array) {

    var newString = '';

    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        if (typeof temp === 'string' && temp.length >= 2) {

            newString += temp[0] + temp[1];

        }
    }
    return newString;
}

var string = stringFromArray(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]);

console.log(string);