function intiger(a) {
    var b = 0;
    for (i = 0; i < a.length; i++) {
        if (parseInt(a[i]) === a[i]) {
            b += 1
        }
    }
    return b;
}

var d = intiger([NaN, 23.1, "15", false, -22.5, '', 4, 7, null]);
console.log(d);