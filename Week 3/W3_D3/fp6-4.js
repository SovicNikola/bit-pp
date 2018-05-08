function numToStr() {
    var array = [];
    var i = 0;
    return function string(num) {
        while (num >= 10) {
            array[i] = num % 10;
            num = parseInt(num / 10);
            i++
        }

        array[i] = num;
        for (i = 0, j = array.length - 1; i < j; i++ , j--) {  //ako ovde uvedemo var i=0, pravi problem/
            var tmp = 0;
            tmp = array[i]
            array[i] = array[j];
            array[j] = tmp;

        }


        return array;
    }
}

console.log(numToStr()(652));

