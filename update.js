document.addEventListener("DOMContentLoaded", function () {
 
    let updateElm = document.querySelector(".updateanimal");
    updateElm.type.value = "animal"
    updateElm.breed.value = "breed"
    updateElm.name.value = "name"
    updateElm.age.value = "age"
    updateElm.sex.value = "sex"
    updateElm.colors.value = "color"
 
    if (updateElm) {
 
        let url = new URLSearchParams(window.location.search)
        let updateId = url.get("update")
 
        fetch(`http://kirastella-myapi.herokuapp.com/api/v1/animals/${updateId}`, {
            "method": "GET"
        })
            .then(response => response.json())
            .then(animal => {
                console.log(animal);
                updateElm.type.value = animal.type
                updateElm.breed.value = animal.breed
                updateElm.name.value = animal.name
                updateElm.age.value = animal.age
                updateElm.sex.value = animal.sex
                updateElm.colors.value = animal.colors
            })
 
        let updateAnimal = function (e) {
 
            e.preventDefault()
            console.log(e.target.name.value);
            console.log(updateId);
 
            const myformdata = new FormData();
            myformdata.append("type", e.target.type.value);
            myformdata.append("breed", e.target.breed.value);
            myformdata.append("name", e.target.name.value);
            myformdata.append("age", e.target.age.value);
            myformdata.append("sex", e.target.sex.value);
            myformdata.append("colors", e.target.colors.value);
 
            console.log(myformdata);
 
            fetch(`http://kirastella-myapi.herokuapp.com/api/v1/animals/${updateId}`, {
                "method": "PATCH",
                "headers": {
                    "Authorization": "Bearer ujheidwu84bo893hpnfuwiosyfjks9ey"
                },
                "body": myformdata
            })
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
 
        updateElm.addEventListener("submit", updateAnimal)
 
    }
})