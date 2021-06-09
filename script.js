document.addEventListener("DOMContentLoaded", function () {
  const pokelistElm = document.querySelector(".allanimals")
  const pokefooter = document.querySelector(".navigation")

  if (pokelistElm) {

    let url = new URLSearchParams(window.location.search)

    /*let offset;
    if (url.get("offset")) {
        offset = url.get("offset")
    } else {
        offset = 0
    }*/

    let offset = url.get("offset") ? url.get("offset") : 0;
    console.log(typeof (offset))
    let nextOffset;
    let prevOffset;


    fetch(`http://kirastella-myapi.herokuapp.com/api/v1/animals?offset=${offset}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        let maxOffset = data.count - data.count % 5;
        console.log(maxOffset)

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 5
        prevOffset = offset <= 0 ? 0 : parseInt(offset) - 5;


        data.result.forEach(animal => {

          let li = document.createElement('li')
          li.classList.add("pokelist__item")

          li.innerHTML = `
          <div class="li_box">
          <p>${animal.name}</p>
          <p>${animal.type}</p>
          <a class="atext" href="singleanimal.html?animalId=${animal._id}">Se detaljer</a>
          <a class="atext" href>Opdater</a>
          <button class="dltBtn">Slet</button>
          </div>
              `
          pokelistElm.appendChild(li)
        })


        let prev = document.createElement("a");
        prev.classList.add("btn_prev");
        if (offset == 0) prev.classList.add("btn_disabled");
        prev.setAttribute("href", `?offset=${prevOffset}`)
        let prevNode = document.createTextNode("Previous")
        prev.appendChild(prevNode)
        pokefooter.appendChild(prev)


        let next = document.createElement("a");
        next.classList.add("btn_next")
        if (offset >= maxOffset) next.classList.add("btn_disabled")
        next.setAttribute("href", `?offset=${nextOffset}`)
        let nextNode = document.createTextNode("Next")
        next.appendChild(nextNode)
        pokefooter.appendChild(next)
      })

  }
})