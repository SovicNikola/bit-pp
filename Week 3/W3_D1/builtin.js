// 1. zad

function convertToNumber(a) {
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++) {
        var ele = a[i];
        if (typeof parseInt(ele) === 'number' && isNaN(ele) === false && ele !== Infinity && ele !== null) {
            b[j] = parseInt(ele);
            j++;    // brojac j sluzi da izbegnemo prazno mesto u rezultatu//
        }
    }
    return b;
}

var a = ['1', '3', undefined, '45', undefined, Infinity, null];
var result = convertToNumber(a);
console.log(result);

// 2. zad


function joinElements(a) {
    var str = '';

    for (var i = 0; i < a.length; i++) {
        var ele = a[i];
        if (typeof ele === 'string' || ((typeof ele === 'number') && isNaN(ele) === false && ele !== Infinity && ele !== null)) {
            str += ele;
        }
    }
    return str;
}

var a = [NaN, null, 123, "abc", null, '23', Infinity];
var result = joinElements(a);
console.log(result);

// 3. zad

function filterOutFalsy(a) {
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++) {
        var ele = a[i];
        if ((typeof ele === 'string' && ele !== '') || (ele !== '' && ele !== null && ele !== undefined && ele != 0 && ele !== false && isNaN(ele) === false)) {
            b[j] = ele;
            j++;
        }
    }
    return b;
}

var a = [NaN, 23.1, 15, false, -22, undefined, 34, "", "abc", null];
var result = filterOutFalsy(a);
console.log(result);


// 4. zad


function numberOfInt(a) {
    var num = 0;
    for (var i = 0; i < a.length; i++) {
        var ele = a[i];
        if (typeof ele === 'number' && isNaN(ele) === false && ele !== Infinity && ele !== null) {
            if (parseInt(ele) == ele) {
                num++;
            }
        }
    }
    return num;
}

var a = [NaN, 23.1, 15, true, '', 54.6, 23, 'abc', undefined, null];
var result = numberOfInt(a);
console.log(result);

// 5. zad


function numberOfInt(a) {
    var num = 0;
    for (var i = 0; i < a.length; i++) {
        var ele = a[i];
        if (typeof ele === 'number' && isNaN(ele) === false && ele !== Infinity && ele !== null) {
            if (parseFloat(ele) == ele) {
                num++;
            }
        }
    }
    return num;
}

var a = [NaN, 23.1, 15, true, '', 54.6, 23, 'abc', undefined, null];
var result = numberOfInt(a);
console.log(result);



/// 2. zad drugi nacin * isFinite proveri je l konacan br i izbaci null, NaN i infinity



function joinElements(a) {
    var str = '';

    for (var i = 0; i < a.length; i++) {
        var ele = a[i];
        if (typeof ele === 'number' && isFinite(ele)) {
            str += ele;
        }
        if (typeof ele === 'string') {
            str += ele;
        }
    }
    return str;
}

var a = [NaN, null, 123, "abc", null, '23', Infinity];
var result = joinElements(a);
console.log(result);



