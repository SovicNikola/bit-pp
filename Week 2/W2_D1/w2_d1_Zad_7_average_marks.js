var Dav = 80;
var Mar = 77;
var Dan = 88;
var Joh = 95;
var Tho = 68;
var mark;

var aver = (Dav + Mar + Dan + Joh + Tho) / 5;
console.log(aver);

if (aver < 60) {
    mark = "F"
}
else if (aver < 70) {
    mark = "D"
}
else if (aver < 80) {
    mark = "C"
}
else if (aver < 90) {
    mark = "B"
}
else if (aver < 100) {
    mark = "A"
}
else
    mark = "Wrong input!"

console.log(mark);


