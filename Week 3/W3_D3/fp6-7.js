function maxNumber () {

    return function maximum (array) {
            var max= array[0];
            var newArray= [];
        for (i=0, j=0; i<array.length; i++ ) {
            if ( typeof array[i] === 'number' && !isNaN(array[i])) {
                newArray[j]=array[i];
                j++;
            }
            if (array[i]>max) {
                max=array[i];
            }
    } return [newArray,max];
    }   
}


console.log(maxNumber()([15,'fgh',25,1,2,'fgh']));