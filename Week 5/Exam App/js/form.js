
function createForm(name, surname, subject, grade, counter) {
    var student = new Student(name, surname)
    return new Exam(subject, student, grade, counter)
}


function Validation() {
    if (nameSur.value == '' || gradeInput.value == '' || parseInt(gradeInput.value) > 10 || parseInt(gradeInput.value) < 1) {
        alert('Input data correctly!');
        return false;
    } else {
        return true
    }
}

function updateAfterDelete(counter, id, arr, forDel) {

    totalNumOfStudents--
    document.querySelector('.exam-total').textContent = 'Total students:' + totalNumOfStudents;
    document.querySelector('.exam-' + id + 'count').textContent = counter // update students
    document.querySelector('.exam-failed-percentage').textContent = parseInt((counterFail / totalNumOfStudents) * 100) + '%'; //update statistic 

    // var examId = event.target.parentElement.parentElement.parentElement.id;
    var examIdSplit = forDel.split('-');
    var idForArray = parseInt(examIdSplit[1]);
    for (var i = 0; i < arr.length; i++) {
        if (idForArray == arr[i].counter) {
            arr.splice(i, 1);

        }
    }
}

function deleteStudents() {
    // var idForDelete = '#';
    var idForDelete = event.target.parentElement.parentElement.parentElement.id;
    var elForDelete = document.querySelector('#' + idForDelete)
    var delParent = elForDelete.parentElement;


    delParent.removeChild(elForDelete);
    if (idForDelete.indexOf('passed') != -1) {
        counterPass--;
        updateAfterDelete(counterPass, idPassed, passArray, idForDelete)

    } else {
        counterFail--;
        updateAfterDelete(counterFail, idFailed, failedArray, idForDelete);
    }
}


function updateStudentNumber(id, counter) {
    if (id === 'passed-') {
        totalNumOfStudents = counter + counterFail;
    } else {
        totalNumOfStudents = counterPass + counter;

    }
    document.querySelector('.exam-total').textContent = 'Total students:' + totalNumOfStudents;
    document.querySelector('.exam-' + id + 'count').textContent = counter
    document.querySelector('.exam-failed-percentage').textContent = parseInt((counterFail / totalNumOfStudents) * 100) + '%'; //update statistic 
}

function update(lista, id, counter) {
    var divList = document.createElement('div');
    var divDescription = document.createElement('div');
    var divClear = document.createElement('div');
    var divValue = document.createElement('div');
    var divDelete = document.createElement('div');
    var btnDel = document.createElement('button');

    divList.setAttribute('id', id + counter);
    divList.classList.add('item', 'clearfix');
    divDescription.classList.add('item-description');
    divDescription.textContent = fullName + ' ( ' + sub.value + ' )'; // trebalo bi student.getStudentData() ali ne znamodakle da izvucem koji je to student ili i ne moram jer se sve desava klikom na add dugme
    divList.appendChild(divDescription);
    divClear.classList.add('right', 'clearfix');
    divValue.classList.add('item-value');
    divValue.textContent = parseInt(gradeInput.value);
    divClear.appendChild(divValue);
    divDelete.classList.add('item-delete');
    btnDel.addEventListener('click', function () {

        deleteStudents();
    });
    btnDel.classList.add('item-delete-btn');
    btnDel.textContent = 'x';
    divDelete.appendChild(btnDel);
    divClear.appendChild(divDelete);
    divList.appendChild(divClear);
    lista.appendChild(divList);



}