function yearTodays(years){
    return years *365;
}
function daysToyears(days){
    return (days / 365).toFixed(2);
}
years = 2;
days = 365;
console.log(years + " years equalus to "  + yearTodays(years) + " days");
console.log(days + " days equalus to "  + daysToyears(days) + " years");