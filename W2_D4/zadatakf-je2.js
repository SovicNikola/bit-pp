function Prazan_string(a) {
    if (a === "") {

        return true;

    }
    else {
        return false;
    }

}

var s = "Ajde da probamo";
var b = Prazan_string(s);
if (b == true) {
    console.log("prazan string");
}
else {
    console.log("nie prazan string");
}

