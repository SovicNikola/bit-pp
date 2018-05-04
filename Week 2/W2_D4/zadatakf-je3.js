function stringNTimes(number, word) {

    var result = "";

    if (number <= 0 || typeof word != 'string') {
        return false;
    } else {
        for (i = 0; i < number; i++) {
            result = result + word;

        } return result;
    }
}

var show = stringNTimes(3, 9);

if (show == false) {
    console.log("not good!")
} else {
    console.log(show)
}