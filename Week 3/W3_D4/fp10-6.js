function successCallback() {
    return 'Your password is valid!'
}
function errorCallback() {
    return 'Your password is invalid!'
}



function passwordCheck(password) {

    //var count = 0;

    if (password.length < 6) {

        return errorCallback();

    } else {

        for (var i = 0; i < password.length; i++) {

            if (typeof (password[i] * 1) == 'number' && !isNaN(password[i])) {
                return successCallback();
            }
        }
    }

    return errorCallback();

}

console.log(passwordCheck('bfasdas12dasd'));


