let int = document.getElementById("suggest")
let btn = document.getElementById("btn")
let completed = document.getElementById("complete")
let container = document.getElementById("contain")
let task = int.value
btn.addEventListener("click", (event) => {
    event.preventDefault()

    if(int.value.length >1){
        let cover = document.createElement("div")
        cover.classList = "covering"
        cover.style.height ="auto"
        cover.style.width ="auto"
        // cover.style.border ="1px solid black"
        cover.style.margin ="10px"
        container.append(cover)
        
    
        let ele = document.createElement("input")
        ele.type = "text"
        ele.classList = "ele"
        ele.value = int.value
        ele.setAttribute("readonly","readonly")

        let box = document.createElement("input")
        box.type = "checkbox"
        ele.classList = "boxer"
        cover.append(box)
     
    
        let edit = document.createElement("button")
        edit.classList= "editing"
        edit.innerText = "edit"
     
     
    
        let deletes = document.createElement("button")
        deletes.classList = "deleting"
        deletes.innerText = "delete"
    
    
        
        cover.append(ele)
        cover.append(edit)
        cover.append(deletes)
       
        int.value = ""

        edit.addEventListener("click",(e)=>{
            if(edit.innerText == "save"){
                edit.innerText ="edit"
                ele.setAttribute("readonly","readonly")
            }
            else if(edit.innerText ="edit"){
                edit.innerText = "save"
                ele.removeAttribute("readonly")
            
            }
        })

        deletes.addEventListener("click",()=>{
            container.removeChild(cover)
        })

       
        box.addEventListener("click", finger)
       function finger(){
        completed.append(cover)
        cover.removeChild(box)
        }
        deletes.addEventListener("click",()=>{
            completed.removeChild(cover)
        })
    }
})