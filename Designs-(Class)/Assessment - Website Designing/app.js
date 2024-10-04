// console.log("running")
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const box  = document.querySelectorAll(".box");

btn1.addEventListener("click",()=>{
 box.forEach(b =>{
    //  b.style.animationPlayState = "paused";
    //  b.style.animationFillMode = "forwards";
    b.style.animation = "none"
    b.offsetHeight;
     b.style.transform = "translateX(-100px)";
 })
})