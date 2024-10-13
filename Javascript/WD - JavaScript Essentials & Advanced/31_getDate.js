/* Q.31 Write a JavaScript Program to display the current day and time in the following
format. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ? */

let d = new Date();
let day = d.getDay()
switch (day) {
    case 0:
        console.log("Today is sunday")
        break;
    case 1:
        console.log("Today is monday")
        break;
    case 2:
        console.log("Today is tuesday")
        break;
    case 3:
        console.log("Today is wednesday")
        break;
    case 4:
        console.log("Today is thursday")
        break;
    case 0:
        console.log("Today is friday")
        break;

    default:
        console.log("Today is saturday")
        break;
}
 let currentHour = d.getHours() > 12 ? "PM" : "AM"
console.log(`current time is ${d.getHours()%12}${currentHour}:${d.getMinutes()}:${d.getSeconds()}`)