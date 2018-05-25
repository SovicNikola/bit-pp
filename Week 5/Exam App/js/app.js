var sub = document.querySelector('.add-subject');
var nameSur = document.querySelector('.add-student-name');
var gradeInput = document.querySelector('.add-grade');
var polozili = document.querySelector('.passed-list');
var pali = document.querySelector('.failed-list');
var fullName;
var exam;
var counterPass = 0;
var counterFail = 0;
var totalNumOfStudents = 0;
var exam;
var failedArray = [];
var passArray = [];
var month;
var counter = 1;
var idPassed = 'passed-';
var idFailed = 'failed-';

//*********************************************************** */
// odredjivanje meseca automatski
//*********************************************************** */

(function () {
    var date = new Date()
    var dateStr = date.toDateString();
    var splDate = dateStr.split(" ");
    month = splDate[1];
    document.querySelector('.exam-title-month').textContent = month;

})();

//*********************************************************** */
// dodavanje predmeta u dropdown listu
/**************************************************************** */


document.querySelector('.top-btn').addEventListener('click', function () {
    var newSub = document.querySelector('.top-input');
    var optionSub = document.createElement('option');
    optionSub.textContent = newSub.value.toUpperCase();
    document.querySelector('.add-subject').appendChild(optionSub);


    newSub.value = '';
})


document.querySelector('.add-btn').addEventListener('click', function () {

    if (Validation()) {
        var subject = sub.value;
        var nameARR = nameSur.value.split(' ');
        if (nameARR.length > 1 || typeof nameARR[1][0] == 'undefined') {
            var name = nameARR[0].split('');
            name[0] = name[0].toUpperCase();
            var firstName = name.join('');
            var surName = nameARR[1].split('');
            surName[0] = surName[0].toUpperCase();
            var lastName = surName.join('');
            fullName = firstName + ' ' + lastName;


            var grade = parseInt(gradeInput.value);
            exam = createForm(firstName, lastName, subject, grade, counter);

            if (exam.hasPassed()) {
                counterPass++;
                update(polozili, idPassed, counter);
                updateStudentNumber(idPassed, counterPass);
                passArray.push(exam);
                counter++;

            } else {
                /// ako je na poslednjem mestu, prvo iskoristi brojac sa vrednoscu 0 (default) pa tek od kasnije azurira podatke. Ili da se stavi ovde ili da krene od jedan                
                counterFail++;
                update(pali, idFailed, counter);
                updateStudentNumber(idFailed, counterFail);
                failedArray.push(exam);
                counter++;
                console.log("push  ", failedArray);



            }
        } else {
            alert('Insert name and surname correctly!')
        }

    }
    //*********************************************************** */   
    // ciscenje UI-a
    //*********************************************************** */

    nameSur.value = '';
    gradeInput.value = '';


});