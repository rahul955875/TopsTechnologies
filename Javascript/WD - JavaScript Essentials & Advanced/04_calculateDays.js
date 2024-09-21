/* Q.4 Write a JavaScript program to calculate days left until next Christmas? */

let today = new Date();
let christmas = new Date("2024-12-25");
console.log(christmas);
console.log("days left for christmas is : " + Math.ceil((christmas - today)/(1000*60*60*24)))
