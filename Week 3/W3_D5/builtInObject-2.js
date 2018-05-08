
var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newArray = [];

function removeDuplicate(array) {

    for (i=0; i<array.length; i++) {
        var element = array[i];
        if (newArray.indexOf(element) === -1 ) { //moramo  da stavimo newArray jer ako trazimo samo u  
                                                    // array, uvek ce se element pojavljivati i nece ispunjavati ovaj uslov
            newArray.push(element)                  //a ovako sve elemente pisemo samo jedanput
        }
    }
    return newArray;
}

console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));