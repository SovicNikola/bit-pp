/// 1.zadatak ///

let captipalization = (Proba) => {

    Proba.forEach(function (element, index, array) {
        let Svaki_karakter_elementa_posebno = element.split('')    // ----- > razdvaja svaki karakter elementa (stringa) i vraca niz      
        Svaki_karakter_elementa_posebno[0] = Svaki_karakter_elementa_posebno[0].toUpperCase();
        let Spojeni_karakteri = Svaki_karakter_elementa_posebno.join(''); // --- > u zagradi stavljam sta hocu da bude izmedju njih... kad stavim '' onda ih samo priljubim
        array[index] = Spojeni_karakteri;

    });
}
let result = ['hello', 'there', 'ES']
captipalization(result);
console.log(result);

/// 2.zadatak ///

let tax = (a) => a * 0.2
console.log(tax(120));

/// 3.zadatak ///

let input = [4, 6, 11, -9, 2.1];
let povecaj = input.map(e => e + 2);
console.log(povecaj);

/// 4.zadatak
let input = [6, 11, 9, 0, 3, 10, 22];
let remove_even_elements = input.filter(input => input % 2 == 0);

console.log(remove_even_elements);

// 5.zadatak //

let input = ['compiler', 'TraNSPIpiLer', 'babel.Js', 'JS standard', 'linter'];

let new_String = input.filter(input => input.toLowerCase().includes('js'));
console.log(new_String);



/// 6. zadatak ///

let input = [1.6, 11.34, 9.23, 7, 3.11, 8];
let Int_numbers = input.filter(input => parseInt(input) == input); // trazi neki uslov da se uporedi i izbacio true ili false
console.log(Int_numbers);

///7.zadatak /// 

let input = [23, 11.5, 9, 'abc', 45, 28, 553, 9257, 258.39];
let Integer_numbers = input.filter(input => Number.isInteger(input) && input.toString().includes('5'));
console.log(Integer_numbers);


/// 8. zadatak /// filter uslov true ili false  --- >> vraca novi niz

// ovde mi izbaci vrednoti
function BiggerElements(val) {

    return function (evalue) {
        return (evalue >= val);
    };
}
let result = [1.6, 11.34, 29.23, 7, 3.11, 18].filter(BiggerElements(10));
console.log(result);



let indexOfElements = arr => arr.map((e, i, arr) => {
    if (e > 10) {
        return i;
    } else
        return -1; // negativni indexi nas ne zanimaju
}).filter(e => e > -1);


let result = [1.6, 11.34, 29.23, 7, 3.11, 18];
console.log(indexOfElements(result));


