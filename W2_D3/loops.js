//* ispisati elemente niza unazad 
1, 2 6 5 11
//* 11 5 6 2 1 

var a = [1, 2, 6, 5, 11];
for (var i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
}

//* napraviti drugi niz obrnutim redosledom

var a = [1, 2, 6, 5, 11];
var b = [];
var i;
var j;
for (i = a.length - 1, j = 0; i >= 0 && j < a.length; i-- , j++) {
    b[j] = a[i];
}
console.log(b);



var x = 4;
var y = 10;

var temp;
temp = x;
x = y;
y = temp;

console.log(x, y);

//* zadatak 1

var a = [5, -4.2, 3, 7];
var e = 3;
var ind = false;

for (var i = 0; i < a.length; i++) {
    if (e == a[i]) {
        //* console.log('yes')
        ind = true
    }
}
if (ind == false) {
    console.log('no');
} else {
    console.log('Yes');
}


//* zadatak 2

var a = [-3, 11, 5, 3.4, -8]
var b;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        b = a[i] * 2
        a[i] = b
    }
}
console.log(a)

// zadatak 3


var a = [-4, -11, 2, -2, 6];
var b;
var c = a[0];
var d = 0;

for (var i = 0; i < a.length; i++) {
    for (b = 1; i + b < a.length; b++)
        if (c > a[i + b]) {
            c = a[i + b]
            d = i + b;
        }
}
console.log(c, d)


// exercise 3 second option

var a = [-4, -1, 2, -2, 6];
var min = a[0];
var index = 0;

for (var i = 1; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        index = i;
    }
}
console.log(min, index);


// zadatak 4

var a = [4, 2, 8, 9, 6]
var min = a[0];
var sec;

for (var i = 1; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
}
if (min == a[0]) {
    sec = a[1]
} else {
    sec = a[0]
}
for (var i = 1; i < a.length; i++) {
    if (a[i] != min && a[i] < sec) {
        sec = a[i];
    }
}

console.log(sec);

// 5 zadatak 

var a = [3, 11, -5, -3, 2];
var b = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        b = b + a[i];
    }
}

console.log(b);

// 6 zadatak - pise code is alreadz running

var a = [2, 4, 7, 3, 2]
var c = true;
var b;

for (var i = 0, b = a.length - 1; i < b; i++ , b--) {
    console.log(i)
    console.log(b)
    if (a[i] == a[b]) { //ovaj uslov je pravio problem, mora da u zavisnosti od uslova ima else ili moze da ga nema
        // kad radis gledaj kako se izvrsavvaju koraci i kako promenljiva menja vrednost
        /*  var a = [3, 4, 12, 8];
        var i;
        var j;
        var sym = 0;
<<<<<<< HEAD
=======

>>>>>>> 5915e559bc9d709cea1a89ee1dd2795cc98d7339
        for (i = 0, j = a.length - 1; i < j; i++ , j--) {
            if (a[i] != a[j]) {
                var sym = sym + 1;
            }
            else {
<<<<<<< HEAD
            }
        }
=======

            }
        }

>>>>>>> 5915e559bc9d709cea1a89ee1dd2795cc98d7339
        if (sym == 0) {
            console.log("Array is symmetric.")
        }
        else {
            console.log("Array isn't symmetric.") */
        c = true
    } else {
        c = false
    }
}

if (c == true) {
    console.log('The array is symmetric.')
} else {
    console.log('The array is not symmetric.')
}

// 7 zadatak

var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var c = [];

for (i = 0, j = 0; i < a.length; i++ , j = j + 2) {
    c[j] = a[i];
    c[j + 1] = b[i];
<<<<<<< HEAD
}
console.log(c);

// 8 zadatak

var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var c = [];

for (var i = 0; i < a.length; i++) {
    c[i] = a[i]
}
for (var i = 0, j = a.length; i < b.length; i++ , j++) {
    c[j] = b[i]
=======
>>>>>>> 5915e559bc9d709cea1a89ee1dd2795cc98d7339
}
console.log(c);

// 8 zadatak

var a = [4, 5, 6, 2]
var b = [3, 8, 11, 9]
var c = [];

for (var i = 0; i < a.length; i++) {
    c[i] = a[i]
}
for (var i = 0, j = a.length; i < b.length; i++ , j++) {
    c[j] = b[i]
}


console.log(c);


console.log(c);

// 9. zadatak

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
var j = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] != e) {
        b[j] = a[i];
        j++;

    }

}
console.log(b);

//10. zadatak

var a = [2, -2, 33, -12, 5, 8];
var e = 78;
var p = 3;
var b = [];

/* if (p > a.length) {
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
} */

if (p > a.length) {
    console.log("Error")
} else {
    for (var i = 0, j = 0; i < a.length; i++ , j++) {
        if (i != p) {
            b[j] = a[i];
        }
        else {
            b[j] = e;
            j++;
            b[j] = a[i];
        }
    } console.log(b)
}
