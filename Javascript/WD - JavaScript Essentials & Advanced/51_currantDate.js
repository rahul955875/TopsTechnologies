// Q.51 Write a JavaScript program to get the current date. Expected Output : mm-ddyyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/?yyyy?

const d = new Date();
console.log(d.toLocaleDateString())