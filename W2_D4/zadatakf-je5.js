function firsOccurrence(string, letter) {
    //var position = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            // position = i + 1; drugi nacin je return i+1 !! dakle onda nam ni ne treba dodatna promenljiva
            // return position;
            return i + 1;
        }
    }

    return -1;
}

var show;
show = firsOccurrence("Last mochichanc is in town!", 'y');

if (show == -1) {
    console.log("Letter isn't occurre! ")
} else {
    console.log(" Letter is occure at " + show + "th place!")
}