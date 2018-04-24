var a = 17;

switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("weekday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
        break;
}