//7.zadatak - sve vereme ga deli, tj radi else, else,  prakticno izbacuje koliko je puta napravio krug !! (u svakm krugu je smanjvao a za ejdan broj)
var a = 15;

for (i = 1; i < 100; i++) {
    if (a > -10 && a < 10) {
        console.log(i);
        break;
    } else {
        a = a / 10;
    }
}
