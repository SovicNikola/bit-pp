var a = 43;
var b = -1;
var c = 237;
var result;
var max;
var mid;
var min;

max = (a > b && a > c) ? a : (b > c) ? b : c;
min = (a < b && a < c) ? a : (b < c) ? b : c;
mid = (a > min && a < max) ? a : (min > b && b < max) ? b : c;

console.log("maksimum = " + max, "\n sredina = " + mid, "\n minimum = " + min)





var x = 88;
var y = 2;
var z = 32;
var j = 45;
var k = 478;
var rezultat;
rezultat = (x > y && x > z && x > j && x > k) ? x : (y > z && y > j && y > k) ? y : (z > j && z > k) ? z : (j > k) ? j : k;

console.log(rezultat) 
