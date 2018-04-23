var start = 1;
var end = 7;


for (var i = start; i <= end; i++) {


    console.log(i);
}


var res = "\n";
for (var i = 0; i < 5; i++) {

    for (var j = 0; j < 5; j++) {

        res += '*\t';

    }
    res += '*\n';
}

console.log(res);



for (var x = 0; x <= 10; x++); {

    console.log(x * x);

}

// prvi zadatak

for (var x = 0; x <= 15; x++) {

    if (x % 2 == 0) {

        console.log("Even:" + x);
    }
    else {
        console.log("Odd:" + x);
    }
}

// da li je x deljivo sa 2
// ako jeste ispisi Even: broj
// ako nije ispisi Odd: broj


// drugi zadatak

var sum = 1;
for (var x = 1; x <= 1000; x++) {

    if (x % 3 == 0 && x % 5 == 0) {

        sum += x;
    }
    // else {
    //     console.log("Nije deljivo");
    // }
}
console.log(sum);



// treci zadatak - suma i proizvod svih elemenata niza

var a = [2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;

for (var i = 0; i < a.length; i++) {

    sum += a[i];
    pro *= a[i];


}

console.log(sum);
console.log(pro);
// ----- ako stampamo u petlji imacu ispis svih resenja, a ako stampam van pretlje kao ovde imacu ispis samo zadnjeg resenja !!!! 
// BITNO !!!!!!!!!!!!!!!!!!!!!!]

// 4. zadatak stampanje elemenata niza 


var a = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var rez = '';

for (var i = 0; i < a.length; i++) {

    rez += a[i];

}
console.log(rez);


//5. zadatak stampa elemenata niza 

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
for (var i = 0; i < a.length; i++) {

    for (var j = 0; j < a[i].length; j++) {

        console.log(a[i][j]);


    }
}



//6. zadatak - suma kvadrata prvih 20 cifara 

var a = 1;
var squire;
var rezultat = 0;
for (var a = 0; a <= 20; a++) {

    squire = a * a;
    rezultat += squire;



}
console.log(squire);
console.log(rezultat);


//7. zadatak       srednja ocena studenta


var srednja;
var suma = 0;
var studenti = [80, 77, 88, 95, 68];

for (var i = 0; i < studenti.length; i++) {

    suma = suma + studenti[i];

}
srednja = suma / studenti.length;

if (studenti[i] < srednja * 0.6) {
    console.log("F");
}
else if (studenti[i] < srednja * 0.7) {
    console.log("D");
}
else if (srednja < 80) {
    console.log("C");
}
else if (srednja < 90) {
    console.log("B");
}
else {
    console.log("A");
}
console.log(srednja);




