var sum = 0;
var product = 1;

var ar = [5, 3, 4];

for (var i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
    product = product * ar[i];
}

console.log(sum);
console.log(product);
