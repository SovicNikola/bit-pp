function stringConvertion(string) {
    var array = [];

    for (i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            array[i] = string[i];
        } else {
            array[i] = null;
        }
    }
    return array;
}
var array = [];
array = stringConvertion('This !');
console.log(array);