var lang = new Set();
lang.add("html")
lang.add("css")
lang.add("js")
// console.log(lang)
// console.log("=== using add method  ===");
// for (const e of lang) {
//     console.log(e);
// }

console.log("=== added values ===");
var i = lang.entries();

for (const e of i) {
    console.log(e);
}