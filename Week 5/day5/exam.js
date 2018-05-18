function Exam(subject, student, grade) {

    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {

    var result = "";
    result += this.subject + "" + this.student;
    Exam.prototype.hasPassed = function () {
        ocena = this.grade;
        if (this.grade > 5) {
            return this.student;
        }
    }
}