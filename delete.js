let form = document.querySelector(".dltBtn")

      let deleteanimal = function (e) {
          e.preventDefault()
     
          const myformdata = new FormData();
          myformdata.append("type", e.target.type.value);
          myformdata.append("breed", e.target.breed.value);
          myformdata.append("name", e.target.name.value);
          myformdata.append("age", e.target.age.value);
          myformdata.append("sex", e.target.sex.value);
          myformdata.append("colors", e.target.colors.value);

fetch("http://kirastella-myapi.herokuapp.com/api/v1/animals", {
  "method": "DELETE",
  "headers": {
    "Authorization": "Bearer ujheidwu84bo893hpnfuwiosyfjks9ey"
  },
  "body": myformdata
})
  .then(response => response.json())
  .catch(err => console.error(err));
}
  form.removeEventListener(deleteanimal)