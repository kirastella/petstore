document.addEventListener("DOMContentLoaded", function() {

    let singleElm = document.querySelector(".single")
    
    if (singleElm) {

        let url = new URLSearchParams(window.location.search)
        let animalId = url.get("animalId")
        console.log(animalId)

        fetch(`http://kirastella-myapi.herokuapp.com/api/v1/animals/${animalId}`)
            .then(response => response.json())
            .then(animal => {
                console.log(animal)
                let div = document.createElement("div");
                
                div.innerHTML = `
                    <h2>${animal.name}</h2>
                    <p>${animal.type}</p>
                    <p>${animal.breed}</p>
                    <p>${animal.sex}</p>
                    <p>${animal.age} years old</p>
                    <p>${animal.colors}</p>
                `
                singleElm.appendChild(div)
            })
            
            
    }

})