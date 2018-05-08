function rotate() {

    return function switchplace(array, num) {
        var newArray = [];

        for (var i = 0, j = 0; i < array.length - num; i++ , j++) {
            newArray[j] = array[i + num];
        }
        for (i = 0; i < num; i++)
            newArray[j++] = array[i]
        return newArray;
    }
}

console.log(rotate()([1, 2, 3, 4, 5, 6], 2));