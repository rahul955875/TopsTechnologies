const person = {
  firstname: "suraj",
  lastname: "mahajan",
  address: {
    Pno: "49A",
    city: "surat",
  },
};
const print = person?.firstname
// console.log(print)
const addr = person.address2?.city// its deal wiht null and undefind value before it.
console.log(addr)