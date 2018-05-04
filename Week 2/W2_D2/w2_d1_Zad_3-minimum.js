var a = [4, 2, 2, -1, 6];
var min = a[0];
var indexMin;


for (i = 1; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        indexMin = i;
    }
}
console.log(min, indexMin);
