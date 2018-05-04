//2. zadatak

function stringNum(a) {

    var b = "";
    for (i = 0; i < a.length; i++) {
        // if (typeof a[i] == 'number' || typeof a[i] == 'string') {
        //     if (typeof a[i] == 'string') {
        //         b += a[i];
        //     } else if (isFinite(a[i])) {
        //         b += a[i];
        //     }
        // }

        if (typeof a[i] === 'number' && isFinite(a[i])) {
            b += a[i];
        }

        if (typeof a[i] === 'string') {
            b += a[i];
        }

    }

    return b;
}

var a = stringNum([NaN, 0, 15, true, -22, 'abc', undefined, 47, null, Infinity]);
console.log(a);