var a = 7;
var result = '';

switch (a) {

    case 1:
        result = 'Ponedeljak';
        break;
    case 2:
        result = "Utorak";
        break;
    case 3:
        result = "Sreda";
        break;
    case 4:
        result = 'Cetvrtak';
        break;
    case 5:
        result = "Petak";
        break;
    case 6:
        result = "Subota";
        break;
    case 7:
        result = "Nedelja";
        break;
    default:
        result = "Input must be number between 1 nad 7";
        break;

}

console.log(result);

