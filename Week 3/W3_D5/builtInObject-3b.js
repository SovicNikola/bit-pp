function countNumber (array) {
        var n=[];
        if (array.length % 2 === 1) {

            n=array.slice(0,(array.length+1)/2);
            
            return n.length; 
        } else {
            return 'Erorr, array is even!!!!'
        }
}

var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
console.log(countNumber(array));
