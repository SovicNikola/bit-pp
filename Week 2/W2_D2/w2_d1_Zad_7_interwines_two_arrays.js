var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (k = 0, i = 0, j = 0; k < (a.length + b.length); k++) {
    if (k % 2 == 0) {
        c[k] = a[i];
        i++;
    }
    else {
        c[k] = b[j];
        j++;
    }
}

console.log(c);