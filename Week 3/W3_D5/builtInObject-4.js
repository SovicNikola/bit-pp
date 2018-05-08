
var array = [1, 4, -2, 11, 8, 1, -2, 3];
var arrayCopy = array;
var minValue1;
var lastindex;
console.log(arrayCopy);
function sortiranje(array) {
    return array.sort(
        function (e1, e2) {
            var L1 = e1;
            var L2 = e2;
            if (L1 == L2) {
                return 0;
            }
            if (L1 < L2) {
                return -1;
            } else {
                return 1;
            }
        });                                       ///////////????????????????????????????????????

}
console.log(arrayCopy);
minValue1 = array[0];
minLastIndex = array.lastIndexOf(minValue1);
var minObject = {
    minvalue: minValue1,
    minLastIndex: minLastIndex,

}


console.log(minObject);

console.log(array);

// function minValue(array) {
//     var minimum = Math.min(...array);   // sto tri tacke?
//     var index = a.lastIndexOf(minimum);
//     var minObject = {};
//     minObject = {
//         minValue: minimum,
//         minLastIndex: index
//     }
//     return minObject;
// };

// var a = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(minValue(a));
