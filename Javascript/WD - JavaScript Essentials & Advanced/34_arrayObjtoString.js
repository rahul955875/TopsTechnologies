// Q.34 Write a JavaScript program to convert an array of objects into CSV string?
let arr = [
    {
    name:"rahul",
    role:"front-end",
    age : 22
},
{
    name:"rohit",
    role:"back-end",
    age : 21
},
{
    name:"ramesh",
    role:"full-stack",
    age : 23
}
]
// console.log(JSON.stringify(arr[0]))
// console.log(...arr)
function converTocsv(arr){
    const headers = Object.keys(arr[0])
    //  console.log(headers)
 const csvHeaders = headers.join()
const csvRow = arr.map(obj =>{
    return headers.map(header => obj[header]).join()    

})
const csvStr = [csvHeaders, ...csvRow].join("\n")
return csvStr;
}
console.log(converTocsv(arr))