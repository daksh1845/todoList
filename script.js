let inputBox= document.getElementById("inputBox")
let addBtn= document.getElementById("addBtn")
let todoList= document.getElementById("todoList")

let editTodo= "null"


addBtn.addEventListener("click",()=>{
    
    if(addBtn.value=="Edit"){
        editTodo.target.previousElementSibling.innerHTML= inputBox.value
        addBtn.value= "Add"
        inputBox.value=""
    }
    else{
        if(inputBox.value!==""){

            // creating p tag 
            const li= document.createElement("li")
            const p= document.createElement("p")
            p.innerHTML= inputBox.value
            li.appendChild(p)


            // creating Edit Btn 
            const editBtn= document.createElement("button")
            editBtn.innerHTML= "Edit"
            editBtn.classList.add("btn","editBtn")
            li.appendChild(editBtn)

            // creating Delete Btn 
            const deleteBtn= document.createElement("button")
            deleteBtn.innerHTML= "Remove"
            deleteBtn.classList.add("btn","deleteBtn")
            li.appendChild(deleteBtn)

            todoList.appendChild(li)

            inputBox.value=""

        }
        else{
            alert("Write something.")
        }
    }
})


// ****************** For the Working of Edit and Remove Button 

todoList.addEventListener("click",(e)=>{
    
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentNode)
    }

    if(e.target.innerHTML==="Edit"){
        inputBox.value= e.target.previousElementSibling.innerHTML
        inputBox.focus()
        addBtn.value="Edit"
        editTodo= e
    }
})