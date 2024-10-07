// console.log("running")
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const box  = document.querySelectorAll(".box");

// btn1.addEventListener("click",()=>{

// })

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
let flag = true;
icon1.addEventListener("click", () => {
  dropDown(icon1, p1);
});
icon2.addEventListener("click", () => {
  dropDown(icon2, p2);
});
icon3.addEventListener("click", () => {
  dropDown(icon3, p3);
});
function dropDown(icon, p) {
  if (flag) {
    icon.style.transform = "rotate(30deg)";
    p.style.height = "120px";
  } else {
    icon.style.transform = "rotate(-90deg)";
    p.style.height = "0px";
  }
  flag = !flag;
}
