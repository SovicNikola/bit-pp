'use strict'

var divAddArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        a[i] = (a[i] / 2) + 5;
        if (a[i] === 0) {
            a[i] = 20;
        }
    }

    return array;
}

var a = [3, 500, -10, 149, 53, 414, 1, 19];
divAddArray(a);
console.log(a);
