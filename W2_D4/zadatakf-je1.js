
function isString(s) {
    if (typeof s == 'string') {
        return true;
    } else {
        return false;
    }

}

var word = 'abc';

var b;
b = isString(word);

if (b == true) {
    console.log("It is a string!");
} else {
    console.log("nije");
}