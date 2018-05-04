(function (string) {
    var newString = '';
    var counter = 0;

    for (i = 0; i < string.length; i++) {
        if (string[i] === 'm' || string[i] === "M") {
            newString += '*';
            counter += 1
        } else {
            newString += string[i]
        }
    }

    console.log(newString, counter);
}

)('mprogrMmingMjauuuuM'); // pozivamo argumente koji nam trebaju