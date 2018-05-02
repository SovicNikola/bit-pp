'use strict'

var studentsGrade = function (a, b) {
    var i;
    var j;
    var result = '';
    var grade = '';
    if (a.length !== b.length) {
        return false
    }

    for (i = 0, j = 0; i < a.length; i++ , j++) {
        if (b[i] < 51) {
            grade = "faild to comlete the exam!" + "\n"
        } else if (b[i] <= 60) {
            grade = "earnd 6." + "\n"

        } else if (b[i] <= 70) {
            grade = "earnd 7." + "\n"

        } else if (b[i] <= 80) {
            grade = "earnd 8." + "\n"

        } else if (b[i] <= 90) {
            grade = "earnd 9." + "\n"

        } else if (b[i] <= 100) {
            grade = "earnd 10." + "\n"

        }
        result += a[i] + ' aquired ' + b[i] + " points and " + grade


    } return result;
}

var a = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var b = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(studentsGrade(a, b));
