function Name(name) {
    this.name = name;
}
Name.prototype.getStudentName = function () {
    var result = this.name;
    return result;
}

