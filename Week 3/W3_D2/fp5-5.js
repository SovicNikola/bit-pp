'use strict'
var max = function (a) {
    var i;
    var j;

    for (i = 0; i < a.length; i++) {

        for (j = i + 1; j < a.length; j++) {
            if (a[j] > a[i]) {
                var tmp = a[j];
                a[j] = a[i];
                a[i] = tmp
            }
        }
    }

    return a;
}


var a = [13, 11, 15, 5, 6, 1, 8, 12];
max(a);
console.log(a);