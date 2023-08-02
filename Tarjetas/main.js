fetch('https://randomuser.me/api/?results=8')
  .then(Response => Response.json())
  .then(data => {
    CrearTarjeta(data.results)
  })

function CrearColor(edad) {
  if (edad < 3) {
    return "nuevo"/*'style="background-color: #F08080;"'*/
  } else if (edad >= 3 && edad < 5) {
    return "pasante"/*'style="background-color: #F08080;"'*/
  } else if (edad >= 5 && edad < 7) {
    return "reciente"/*'style="background-color: #F08080;"'*/
  } else if (edad >= 7 && edad < 8) {
    return "medio"/*'style="background-color: #F08080;"'*/
  } else if (edad >= 8 && edad < 10) {
    return "avanzado"/*'style="background-color: #F08080;"'*/
  } else if (edad >= 10 && edad < 16) {
    return "general"/*'style="background-color: #F08080;"'*/
  } else if (edad >= 16 && edad < 20) {
    return "superior"/*'style="background-color: #F08080;"'*/
  }   else if (edad >= 20 ) {
    return "pro"/*'style="background-color: #F08080;"'*/
  }

}

  function CrearTarjeta(usuarios, edad) {
    let container = document.querySelector('.container')
    usuarios.forEach(usuario => {
      container.innerHTML +=
        `
    <div class="card ${CrearColor(usuario.registered.age)}">
        <div class="puntos">...</div>
        <div class="card-body">
          <div class="card-body-item">
            <img
              class="card-img"
              src="${usuario.picture.large}"
              alt=""
            />
            <div class="texto-medio">
              <h5 class="card-title">${usuario.name.first} ${usuario.name.last}</h5>
              <p class="name">${usuario.cell}</p>
              <div class="datos">
                <div margin-right: 10px >
                  <p>${usuario.gender}</p>
                  <p>Genero</p>
                </div>
                <div margin-right: 10px >
                  <p>${usuario.location.postcode}</p>
                  <p>Nat</p>
                </div>
                <div margin-right: 10px >
                  <p>${usuario.location.country}</p>
                  <p>Location</p>
                </div>
              </div>
            </div>
          </div>
          <div class="ranking">
            <h4>${usuario.registered.age}</h4>
            <p>Edad</p>
          </div>
        </div>
        <div class="circulo ${CrearColor(usuario.registered.age)}"></div>
      </div>
    `
    });


    console.log(usuarios)

  }
