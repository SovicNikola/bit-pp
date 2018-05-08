function vowelsCount(string) {
    var counter = 0;
    for (i = 0; i < string.length; i++) {

        switch (string[i]) {
            case 'a':

            case 'e':

            case 'i':

            case 'o':

            case 'u':
                counter += 1;
                break;
            default:
                result = false;

        }

    } return counter;
}

var a = 'neki novi klinci!'
console.log(vowelsCount(a));

