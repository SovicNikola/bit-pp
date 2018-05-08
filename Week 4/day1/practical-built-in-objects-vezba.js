// 3.zadatak

var a = "Webmaster";
var c = a.toLowerCase().split("").sort().join('');
console.log(c);

// 4.zadatak

var a = "Republic Of Serbia";
var b = a.split(' ');
for (var i = 0; i < b.length; i++) {
    b[i] = b[i].split('').sort().join("");
}
var c = b.join(' ');

console.log(c);

// ///5 zadatak

var a = "John Snow";
var b = a.split(" ");

console.log(b);

//6. zadatak

var a = "John Snow";
var b = a.split(" ");
b[b.length - 1] = b[b.length - 1].charAt(0) + ".";
var c = b.join(' ');


console.log(c);


//7. zadatak

function sl(str, long, direction) {
    str = new String(str);
    str = str.toString();
    var a = long.slice(str.length, long.length);

    if (direction == 'l') {
        str = a + str;
    } else {
        str += a;
    }
    return str;
}


console.log(sl(123, '0000', 'l'));

// 8 zadatak


var string = 'js jkadhs jkadhs!';
string = string.split('');
string[0] = string[0].toUpperCase();
string = string.join('');
console.log(string);

// 9 zadatak

var email = "nekimail@gmail.com"
var deo = email.split('@');

deo[0] = deo[0].slice(0, deo[0].length / 2);
var secure = deo[0] + '..@' + deo[1];
console.log(secure);

// 10 zadatak

var string = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var i = 0; i < str.length; i++) {
    if (UPPER.indexOf(str[i]) === -1) {
        result[i] = str[i].toUpperCase();
    }
    else if (LOWER.indexOf(str[i]) === -1) {
        result[i] = str[i].toLowerCase();
    } else {
        result[i] = str[i];
    }
}
result = result.join('');

console.log(result);
