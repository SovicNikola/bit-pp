// function mail(name, surname) {

//     return name + '.' + surname + '@gmail.com';
// }

var email = function (name, surname) {

    return function () {

        return name + '.' + surname + '@gmail.com';
    }

}

console.log(email('pera', 'Zivkovic')());