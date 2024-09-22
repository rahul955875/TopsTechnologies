function getExt(filename){
    let ext = filename.split(".");
    if(ext.length > 1){
        return ext = "Extension of this file is " + ext.pop();
    }
    else{
        return "dont found extension";
    }
}
let filename = "abc.html";

console.log(getExt(filename));