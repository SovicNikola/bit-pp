function combination(a, b) {

    var c = "";

    for (i = a; i <= b; i++) {

        for (j = a; j <= b; j++) {

            if (i != j) {
                c = c + "(" + i + "," + j + "),"
            }

        }

    }

    return c;

}

var k = 1;
var l = 7;
var m = combination(k, l);
console.log(m);
