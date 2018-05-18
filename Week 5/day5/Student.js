function NameAndSurname(name, surname) {
    this.name = name;
    this.surname = surname;
}

NameAndSurname.prototype.getSubjectData = function () {
    var result = "";
    result += this.name + ' ' + this.surname;
    return result;
}