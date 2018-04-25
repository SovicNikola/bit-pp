var a = [2, 9, 78, 65, 13];
var sum = 0;
var i = 0;
while (i < a.length) {
    if (a[i] % 2 != 0) {
        sum = sum + a[i];

    }
    i++
}

console.log(sum);