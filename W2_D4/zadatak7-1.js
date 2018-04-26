var a = 568;
var i = 1;


while (a > 0) {
    if (a > -10 && a < 10) {
        console.log(i);
        break;
    } else {
        a = a / 10;
        i++;
    }
}
