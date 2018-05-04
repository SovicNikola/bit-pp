//1. zadatak

function arrayOfNumbers(b) {
    var newb = [];
    var i;
    var j;
    for (i = 0, j = 0; i < b.length; i++) {
        if (isFinite(b[i])) {
            newb[j] = b[i] * 1;
            j++
        }
    } return newb;
}

var a = arrayOfNumbers([0xA, "1", "21", undefined, "42", "1e+3", Infinity]);
console.log(a);

