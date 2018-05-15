function Person(name, surname) {
    this.name = name;
    this.surname = surname;

}
Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
}

function Employ(name, surname, job, salary) {
    Person.call(this, name, surname)
    this.job = job;
    this.salary = salary;

}

Employ.prototype = Object.create(Person.prototype);
Employ.prototype.constructor = Employ;
Employ.prototype.getData = function () {
    return this.fullName() + ', ' + this.salary;
}
Employ.prototype.getSalary = function () {
    console.log(this.salary);
}
Employ.prototype.increaseSalary = function () {
    this.salary = parseInt(parseInt(this.salary) * 1.1);
}

function Developer(name, surname, job, salary, sepcialization) {
    this.sepcialization = sepcialization;
    Employ.call(this, name, surname, job, salary);
}
Developer.prototype = Object.create(Employ.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.sepcialization);
}

function Manager(name, surname, job, salary, department) {
    Employ.call(this, name, surname, job, salary);
    this.department = department;

}
Manager.prototype = Object.create(Employ.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
    console.log(this.department);
}
Manager.prototype.changeDepartment = function (dep) {
    this.department = dep;
}

var Mika = new Person('Mika', 'Mikic');
var radnik = new Employ('Pera', 'Peric', 'tester', '750e');
var devic = new Developer('Janko', 'Jankovic', 'developer', '950e', 'JS');
var menadzer = new Manager('Mladen', 'Krstajic', 'selektor', '1450e', 'razvoj');

// console.log(Mika.fullName());
// console.log(radnik.getData());
// radnik.getSalary();
// radnik.increaseSalary();
// radnik.getSalary();
// devic.getSpecialization();
// menadzer.getDepartment();
// menadzer.changeDepartment('prodaja');
menadzer.getSalary();



