'use strict'

var addSubtract = function (a, b) {
    var sum = 0;

    for (var i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            sum += i
        }

    }

    for (var j = 1; j <= b; j++) {
        if (j % 2 !== 0) {
            sum -= j
        }
    }

    sum *= 12.5;

    return sum;

}

var x = addSubtract(1000, 500);
console.log(x);