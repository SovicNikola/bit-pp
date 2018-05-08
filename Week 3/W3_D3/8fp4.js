var a = [4, 5, 6, 2];
var b = [3, 8, 11, 12, 43];
var c = [];

for (i = 0, k = 0; i < a.length; i++ , k++) {
    c[k] = a[i];
}

for (j = 0, k = a.length; j < b.length; j++ , k++) {
    c[k] = b[j];
}

console.log(c);

