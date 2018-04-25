var a = "Idemooooo Niissssssss"
var sum = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] == "o" || a[i] == "s") {
        sum = sum + 1;
    }
}
console.log(sum);