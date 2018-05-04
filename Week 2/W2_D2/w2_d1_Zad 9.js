var a = [];
var sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
        sum = sum + a[i]
    }
}
console.log(sum)


// drugo resenje zadatka sa while petljom
var a = [2, 9, 78, 65, 13];
var sum = 0;
var i = 0;
while (i < a.length) {
    if (a[i] % 2 != 0) {
        sum = sum + a[i];

    }
    i++
}

console.log(sum);   
