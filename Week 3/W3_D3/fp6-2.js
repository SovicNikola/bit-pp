function Glavna() {


    return function combineArray(array1, array2) {
        var newArray = [];
        if (array1.length == array2.length) {
            for (i = 0, j = 0; i < array1.length; i++) {
                newArray[j] = array1[i];
                newArray[++j] = array2[i];
                j++

            }
        } else if (array1.length < array2.length) {
            for (i = 0, j = 0, k = 0; i < array1.length; i++ , j++ , k = k + 2) {
                newArray[k] = array1[i];
                newArray[k + 1] = array2[j];

            }
            for (z = j; z < array2.length; z++ , k++) {
                newArray[k] = array2[z];
            }
        } else {
            for (i = 0, j = 0, k = 0; j < array2.length; i++ , j++ , k = k + 2) {
                newArray[k] = array1[i];
                newArray[k + 1] = array2[j];

            }
            for (z = i; z < array1.length; z++ , k++) {
                newArray[k] = array2[z];

            }
        }

        return newArray;
    }
}

var array1 = ['a', 'b', 'c'];
var array2 = [1, 2, 3, 4, 5, 6];
console.log(Glavna()(array1, array2));

