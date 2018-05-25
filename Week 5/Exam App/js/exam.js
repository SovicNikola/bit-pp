function Exam(subject, student, grade, counter) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
    this.counter = counter;

}

Exam.prototype.getExamInfo = function() {
    return this.student.getStudentData() + ', ' + this.subject + ', ' + this.grade;
}

Exam.prototype.hasPassed = function() {

    return this.grade > 5


}