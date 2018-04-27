function Prime(Broj) {
    for (i = Broj - 1; i > 1; i--) {
        if (Broj % i == 0) {

        }
    }
    return true;
}
var result = Prime(41);
if (result == true) {
    console.log("Yes");
}
else {
    console.log("No")
}