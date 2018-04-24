var a = -8;
var b = 2;
var c = 16;
var d = 0;
var e = -1;

max = (a >= b && a >= c && a >= d && a >= e) ? a : ((b >= a && b >= c && b >= d && b >= e) ? b : ((c >= a && c >= b && c >= d && c >= e) ? c : ((d >= a && d >= b && d >= c && d >= e) ? d : e)));
console.log(max);
