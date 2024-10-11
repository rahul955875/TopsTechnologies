const input = document.querySelector("#input");
const add = document.querySelector("#Add");
const container = document.querySelector(".container-body");

add.addEventListener("click", ()=>{
    let todo = input.value.trim();
    if(todo){
        let newNode = document.createElement("li")
        
        container.appendChild(newNode)
        let delBtn = document.createElement("button")
        delBtn.innerHTML = "&times;"
        delBtn.className = "deleBtn"
        newNode.textContent = todo;
        container.appendChild(delBtn) 
    }
    else{
        alert("enter your todays task")
    }
})