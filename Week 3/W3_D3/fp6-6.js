function temperature () {

        return function change (t) {

            var f = ((t*9)/5)+32

            return t + ' °C is  ' + f+ ' °F' 
        }
}

console.log(temperature()(15));