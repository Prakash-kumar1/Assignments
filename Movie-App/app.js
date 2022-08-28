
    let searchbox = document.querySelector("input")
    let btn = document.querySelector("button")
    let nameBox = document.querySelector(".name")
    btn.addEventListener("click", function () {
        nameBox.innerHTML=""
        fetch(`https://api.tvmaze.com/search/shows?q=${searchbox.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    let data1 = data[i]["show"]
                   var html = `
            <div class ="wrapper">
            <div class="image"><img src="${data1["image"]["original"]}" alt=""></div>
            <h2>${data1["name"]}</h2>
            <p>${data1["premiered"]}</p>
           
            <p>${data1["language"]}</p>
            <a href="${data1["url"]}"><button class = "know">Show-Details</button></a> 
          
         
        </div> 
           `
           nameBox.innerHTML += html
                } 
            }) 
            
    })

