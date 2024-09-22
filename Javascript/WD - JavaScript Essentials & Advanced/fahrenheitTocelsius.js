// Q.8 Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

function fahTocel(fahrenheit){
    if(isNaN(fahrenheit)){
        return "invalid input"
    }
    else{

        return (fahrenheit - 32) * (5/9);
    }
}
let fahrenheit = "34";
let res = fahTocel(fahrenheit);
if( typeof res === "string"){
    console.log(res);
}
else{
    console.log( fahrenheit + " fahrenheit is equals to " + res.toFixed(2) + " celsius");
}