function intiger(a) {
    var b = 0;
    for (i = 0; i < a.length; i++) {
        if (typeof a[i] == 'number' && !isNaN(a[i])) {
            // if (parseFloat(a[i]))
            if (parseFloat(a[i]) == parseInt(a[i])) {

            } else {
                b += 1
            }
        }
    }
    return b;
}

var d = intiger([NaN, 23.1, 15.1, false, -22.5, '', 4, 7, null]);
console.log(d);