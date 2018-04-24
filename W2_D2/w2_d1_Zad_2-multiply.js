var a = [-3, 11, 5, 3.4, -8];
var b = [];

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        b[i] = a[i] * 2;
    }
    else {
        b[i] = a[i];
    }

}
console.log(b);
