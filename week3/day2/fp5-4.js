'use strict'
var min = function (a) {
    var i;
    var j;

    for (i = 0; i < a.length; i++) {

        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[i]) {
                var tmp = a[j];
                a[j] = a[i];
                a[i] = tmp
            }
        } a[i] *= 2;
    }

    return a;
}


var a = [13, 11, 15, 5, 6, 1, 8, 12];
min(a);
console.log(a);