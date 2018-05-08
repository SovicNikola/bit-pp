function isArrayOdd (array) {

        if (array.length % 2 === 1) {
            return true
        } else {
            return false
        }
}

var array = [1, 2, 9, 2, 1];
console.log(isArrayOdd(array));