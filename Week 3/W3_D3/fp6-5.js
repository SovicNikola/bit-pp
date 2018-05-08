function multiTable() {
    var multi = 0;
    return function table() {
        
        for (var i=1;i<=12;i++) {
            for (var j=1;j<=12;j++) {

                if (j!=12){
                
                multi = multi + '\t'+ '\t' + j + '*' + i + '=' + j*i;       
                    
            } else {
                multi = multi + '\t' +  j + '*' + i + '=' + j*i + '\n';
            }
        }
    } 
    return multi;
}
}

console.log(multiTable ()());