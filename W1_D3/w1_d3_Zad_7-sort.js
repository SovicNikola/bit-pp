var a = -6;
var b = -2;
var c = -6;

if (a >= b && a >= c) {
    if (b >= c) {
        console.log(a, b, c);
    }
    else {
        console.log(a, c, b);
    }

}
else if (b >= a && b >= c) {
    if (a >= c) {
        console.log(b, a, c);
    }
    else {
        console.log(b, c, a)
    }
}
else if (b >= a) {
    console.log(c, b, a);
}
else { console.log(c, a, b) }

