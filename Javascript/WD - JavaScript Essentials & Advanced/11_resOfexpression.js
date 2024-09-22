// Q.11 What is the result of the expression (true && 1 && "hello")?
 
 if(true && 1 && "hello"){
     console.log(true)
 }
 else{
     console.log(false)
 }
 
 /* answer will be true becuase => true && 1 means (1 also means true) so it will true then the new expression will be true && "hello" (non empty string also true) so true && true => true. */