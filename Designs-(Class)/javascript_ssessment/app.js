const input = document.querySelector("#input");
const add = document.querySelector("#Add");
const container = document.querySelector(".container-body");

add.addEventListener("click", () => {
  let todo = input.value.trim();
  if (todo) {
    let newNode = document.createElement("li");

    container.appendChild(newNode); 

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "&times;";
    delBtn.className = "deleBtn";
    newNode.className = "node";
    newNode.textContent = todo;
    container.appendChild(delBtn);

    input.value = "";

    let cancel = document.querySelectorAll(".deleBtn");
    let nodes  = document.querySelectorAll(".node");

    cancel.forEach((e , i) => {
        e.addEventListener("click" , ()=>{  
            container.removeChild(cancel[i])
        container.removeChild(nodes[i])
        })
    });
  } else {
    alert("enter your todays task");
  }
});
