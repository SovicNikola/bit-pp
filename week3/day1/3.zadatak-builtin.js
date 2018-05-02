function falsy(a) {

    var b = [];
    for (i = 0, j = 0; i < a.length; i++) {
        if (!!a[i]) {
            b[j] = a[i];
            j++;
        }
    } return b;
}

var c = falsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(c);