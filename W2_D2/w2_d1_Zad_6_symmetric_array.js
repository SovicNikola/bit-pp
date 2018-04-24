var a = [3, 4, 12, 8];
var i;
var j;
var sym = 0;

for (i = 0, j = a.length - 1; i < j; i++ , j--) {
    if (a[i] != a[j]) {
        var sym = sym + 1;
    }
    else {

    }
}

if (sym == 0) {
    console.log("Array is symmetric.")
}
else {
    console.log("Array isn't symmetric.")

}