var a = 34;
var b = -21;
var c = 102;

max = (a >= b && a >= c) ? a : ((b >= a && b >= c) ? b : c);
min = (a <= b && a <= c) ? a : ((b <= a && b <= c) ? b : c);
mid = (a != max && a != min) ? a : ((b != max && b != min) ? b : c);

console.log(max, mid, min)
