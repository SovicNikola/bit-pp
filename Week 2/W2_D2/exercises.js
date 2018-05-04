var x = 4;
var y = 10;
var tmp;

tmp = x;
x = y;
y = tmp;

console.log(x, y);

//_______________________

var a = [1, 2, 6, 5, 11];

var i;
var j;

for (i = 0, j = a.length - 1; i < j; i++ , j--) {
    // a[i], a[j]
    var tmp;
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}
console.log(a);

//_____________________

