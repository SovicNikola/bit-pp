'use strict'

var reverse = function (string) {

    var reverseString = '';

    for (var i = string.length - 1; i >= 0; i--) {

        reverseString += string[i];
    } return reverseString;
}

var inString = reverse('Belgrade Institute of Technology');
console.log(inString);