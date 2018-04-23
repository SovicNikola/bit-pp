var a = 10;
var b = 7;
var result = ""
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}



var x = 3;
if (x % 2 == 0) {
    console.log("even")
}
else {
    console.log("odd")
}


var y = 15;
if (y % 3 == 0 && y % 5 == 0) {
    console.log(y)
}

var m = 3;
var n = -7;
var k = 2;
if (m * n * k > 0) {
    console.log("+")
}
else {
    console.log("-")
}


var g = 10;
if (typeof g == "number") {

    //ako imamo broj
    if (g % 2 == 0)
        console.log(g / 2);

    else {
        console.log("X")
    }
}
else {
    //ako nije broj
    console.log("Nije broj");

}

var z = -5;
var j = -2;
var p = -6;
var q = 0;
var l = -1;

if (z >= j && j >= p && p >= q && q >= l) {
    console.log(z);
} else if (j >= z && j >= p && j >= q && j >= l) {
    console.log(j)
} else if (p >= z && p >= j && p > q && p >= l) {
    console.log(p)
} else if (q >= z && q >= j && q >= p && q >= l) {
    console.log(q);
} else if (l >= z && l >= j && l >= p && l >= q) {
    console.log(l);
}


var v = 0;
var o = -1;
var i = 4;

if (v > o && o > i) {
    console.log(v, o, i);

} else
    if (v > o && i > o) {
        console.log(v, i, o);
    }
    else
        if (o > v && v > i) {
            console.log(o, v, i);
        }
        else if (o > v && i > v) {
            cosole.log(o, i, v)
        } else
            if (i > v && v > o) {
                console.log(i, v, o);

            } else
                if (i > v && o > v) {
                    console.log(i, o, v);
                }