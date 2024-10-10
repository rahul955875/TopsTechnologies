// console.log("running")
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".bnt2");
const boxes = document.querySelectorAll(".service-box");
// let itemSet = boxes.length;
btn1.addEventListener("click", () => {
   boxes.forEach(e =>{ e.style.animation = "none"})
})
btn2.addEventListener("click", ()=>{
  boxes.forEach(e =>{
    e.style.animation = "slider 20s cubic-bezier(0.165, 0.84, 0.44, 1) infinite"
  })
})

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

const wrapper = document.querySelector(".course-box-wrapper");
const items = document.querySelectorAll(".owl-item");
const prevBtn = document.querySelector(".c-btn:first-child");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 0;
const totalItems = items.length - 3;

function updateSlider() {
  const width = items[0].clientWidth + 30;
  wrapper.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider();
});

// updateSlider();

// ======menu-icon===============
const menuIcon = document.querySelector(".menu-icon");
const navSm = document.querySelector("#nav-sm");
let flagSm = true;
menuIcon.addEventListener("click", () => {
  if (flagSm) {
    navSm.style.transform = "translateX(0)";
    menuIcon.innerHTML = "close";
  } else {
    navSm.style.transform = "translateX(100%)";
    menuIcon.innerHTML = "menu";
  }
  flagSm = !flagSm;
});
