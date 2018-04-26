function numberOfOccurrences(string, letter) {
    var n = 0;
    if (typeof string != 'string') {
        return false;

    } else {

        for (i = 0; i < string.length; i++) {
            if (string[i] == letter) {
                n = n + 1;

            }

        } return n;
    }

}
var pozivFje;
pozivFje = numberOfOccurrences("How many time letter is repeated", "e");
if (pozivFje == false) {
    console.log("Isn't string ! ");
}
else {
    console.log("The letter is repeated :" + pozivFje);
}

