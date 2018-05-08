function oddNumber(num) {
    return num % 2 === 1
}
function squ(num) {
    return num *= num;
}

function sortNumbers(array) {
    newArray = [];
    for (i = 0, j = 0; i < array.length; i++) {
        if (oddNumber(array[i])) {

            newArray[j] = squ(array[i]);
            j++
        }
    }
    return newArray;
}

var a = [2, 8, 11, 4, 9, 3];
console.log(sortNumbers(a));