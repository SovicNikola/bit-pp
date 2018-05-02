var minMax = function (a) {
    var i;
    var j;

    for (i = 0; i < a.length; i++) {
        var min = i;

        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        var max = i;
        for (z = i + 1; z < a.length; z++) {
            if (a[j] > a[min]) {
                var max = z;
            }


            // if (i != min) {
            //     var temp = a[i];
            //     a[i + 1] = a[min];
            //     a[min] = temp;
            // }
        }

    } var temp;
    temp = a[min];
    a[min] = a[max];
    a[max] = temp;
    return a;
}

var a = [3, 500, 12, 149, 53, 414, 1, 19];
minMax(a);
console.log(a);

function minMax(array) {
    var minElement = array[0];
    var maxElement = array[0];
    var minIndex = 0;
    var maxIndex = 0;

    if (array.length < 2) {
        return false;
    }

    for (var i = 0; i < array.length; i++) {
        var currentElement = array[i];

        if (currentElement > maxElement) {
            maxIndex = i;
            maxElement = currentElement;
        } else if (currentElement < minElement) {
            minIndex = i;
            minElement = currentElement;
        }
    }

    array[minIndex] = maxElement;
    array[maxIndex] = minElement;

    return array;
}

console.log(minMax([3, 500, 12, 1149, 53, 414, 1, 19]));
