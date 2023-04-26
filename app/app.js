// API
// contenedor de html para renderelizar
const $cont = document.getElementById("characters");
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
    
  })
  .then((data) => {
   const characters = data.results;

   for (let i = 0; i < characters.length; i++){ 
    const { name, gender, species, status, image } = characters[i];
    $cont.innerHTML += `
    <div class="cont-character">
      <img src="${image}" alt="img the ${name}"/>
        <h3>${name}</h3>
         <p>Gender:${status}</p>
          <p>Species:${gender}</p>
          <p>Status:${species}</p>
    </div>`
   }
  });
    //   const characters = data.results;

    //de JSON a dato manipulable (objeto o array)
  //   return response.json();
  
  
  // .then((data) => {
  //   const characters = data.results;
    
  //    const $contenedor = document.getElementById("cont-characters");

  //   console.log(characters[0]);

  //   for (let i = 0; i <characters .length; i++) {
      //  const { name, gender, species, status } = characters[i];
        
        
       
      // $contenedor.innerHTML += `
      // <div class="tarjeta">
      //   <img src="${characters[i].image}">
      //   <p class="nombre-personaje">${characters[i].name}</p>
      //   <p>${characters[i].gender}</p>
      //   <p>${characters[i].species}</p>
      //   <p>${characters[i].status}</p>
        
      // </div>
      //   `;
      
     
        