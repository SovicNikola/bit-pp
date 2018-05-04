var Conversion = function () {
    return function (n) {
        n = (parseInt(n, 16));
        return n;
    }
}

console.log(Conversion()('a031'));

