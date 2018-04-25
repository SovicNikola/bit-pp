var a = [2, 4, 5, 2, 56, 34, 2, 22, 92];
var broj = 0;
var b = 2;
for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
        broj = broj + 1;
    }
}
console.log("zadati broj se pojavljuje " + broj + " puta")