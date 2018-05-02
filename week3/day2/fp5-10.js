var primeNumber = function () {
    var prime = [];

    for (i = 0; i < arguments.length; i++) {
        var tmp = arguments[i];
        if (typeof tmp === 'number' && typeof tmp !== NaN) {

            prime[i] = true;

            if (tmp === 2 || tmp === 3) {
                continue;

            } else if (tmp % 2 === 0) {
                prime[i] = false;

            } else {
                for (var j = 3; j < tmp; j += 2) {
                    if (tmp % j === 0) {
                        prime[i] = false;
                        break;
                    }

                }
            }

        } else {
            prime[i] = 'on ' + i + ' place is not a number!';
        }


    }
    return prime;

}

var show = primeNumber(15, 17, 2, 11, 4, 97, 55, 2, 11, 11);
console.log(show);