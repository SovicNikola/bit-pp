function firsOccurrence(string, letter) {
    // var position = 0;

    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] == letter) {
            //  position = i + 1;
            return i + 1;

        }
    }

    return -1;
}

var show;
show = firsOccurrence("Last mochichanc is in town!", 'L');

if (show == -1) {
    console.log("Letter isn't occurre! ")
} else {
    console.log(" Letter is occure at " + show + "th place!")
}