// zadatak 1
var a;
var b;
.
if (a > b) {
    console.log('Maksimum je ' + a)
} else {
    if (a < b) {
        console.log('Maksimum je ' + b)
    } else {
        console.log("Brojevi su jednaki")
    }
}

// 2 zadatak

var a = 4;

if (a % 2 == 0) {
    console.log("Broj je paran")
} else {
    console.log("broj je neparan")
}

// 3 zadatak

var a = '46';

if (typeof a == 'number' && a >= 100 && a <= 999) {
    console.log("Broj je trocifren")
} else {
    console.log("broj nije treocifren")
}

// 4 zadatak

var a = [1, 2, 3, 4, 5, 6];
var sred;
var suma = 0;
var i;

for (i = 0; i < a.length; i++) {
    suma = suma + a[i];
}
sred = suma / a.length
console.log(sred)

//7.zadatak - sve vereme ga deli, tj radi else, else,  prakticno izbacuje koliko je puta napravio krug !! (u svakm krugu je smanjvao a za ejdan broj)
var a = 15;

for (i = 1; i < 100; i++) {
    if (a > -10 && a < 10) {
        console.log(i);
        break;
    } else {
        a = a / 10;
    }
}

// 8 zadatak

var a = [2, 4, 5, 2, 56, 34, 2, 22, 92];
var broj = 0;
var b = 2;
for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
        broj = broj + 1;
    }
}
console.log("zadati broj se pojavljuje " + broj + " puta")

// 9 zadatak

var a = [];
var sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
        sum = sum + a[i]
    }
}
console.log(sum)

//10 zadatak


var a = "Idemooooo Niissssssss"
var sum = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] == "o" || a[i] == "s") {
        sum = sum + 1;
    }
}
console.log(sum);



// 11 zadatak
var a = "abc";
var n = 1;
var ispis = a;


if (n <= 0) {
    console.log("Morate uneti pozitivan broj")
} else {
    for (i = 1; i < n; i++) {
        ispis = ispis + a
    }
    console.log(ispis)
}



// 5 zadatak

var i;
var j;
var n = 5;
for (i = 0; i < n; i++) {
    if (i == 0 || i == n - 1 || i == (n - 1) / 2) {
        //stampamo n zvezdica
        var stars = '';
        for (j = 0; j < n; j++) {
            stars = stars + '*';
        }
        console.log(stars)
    } else {
        var line = "";


        // zvezdica
        line = line + '*'


        // n-2 belina

        for (j = 1; j <= (n - 2); j++) {
            if (j == (n - 1) / 2) {
                line = line + "*";
            } else {
                line = line + " ";
            }

        }
        // zvezdica
        line = line + "*";
        console.log(line)
    }
}