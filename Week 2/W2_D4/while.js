//do while
//TODO;
//sabrati sve brojeve
//koji su prani a nalaze se na neparnim pozicijama

var a = [2, 4, 12, 22, 55, 6, 8, 7];
var i = 0;
var sum = 0;
do {
    if (a[i] % 2 == 0 && i % 2 != 0) {
        sum += a[i];
    } i++;
} while (i < a.length);
console.log(sum);