var a = [2, -2, 33, -12, 5, 8];
var e = 78;
var p = 3;
var b = [];

if (p > a.length) {
    console.log("error")
} else {
    for (var i = 0; i <= p; i++) {

        if (i != p) {
            b[i] = a[i];
        }

        else {
            b[i] = e;

        }
    }
    for (i = p + 1, j = p; i <= a.length; i++ , j++) {
        b[i] = a[j]
    }

    console.log(b);
}

