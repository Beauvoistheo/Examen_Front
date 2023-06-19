
const blagues = document.querySelector(".blagues");
const reponse = document.querySelector(".reponse");


fetch("https://api-blague.onrender.com/api/random")
  .then(response => response.json())
  .then(data => {
    const randomBlague = data.blagues;
    const randomReponse = data.reponse;

    blague.textContent = randomBlague;
    reponse.textContent = randomReponse;

    // Ajouter la blague à la liste déroulante
    datalist.innerHTML += `<option value="${randomBlague}">`;
  })

.catch(error=>console.log(error))