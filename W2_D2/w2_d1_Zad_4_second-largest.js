var a = [4, 2, 2, -1, 6];
var max = a[0];
var max2 = -Infinity;
var indexMax;

for (i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
        indexMax = i;
    }
}
console.log(max, indexMax);

for (i = 0; i < a.length; i++) {
    if (i != indexMax) {
        if (a[i] > max2) {
            max2 = a[i];
        }
    }
}

console.log(max2);