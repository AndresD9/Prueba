
const API_URL = "https://jsonplaceholder.typicode.com"; //URL de donde se va a obtener la informacion de la API

const HTMLResponse = document.querySelector("#app");

//Planteo el array donde voy a almacenar la informacion de la API
let photoDatos;

fetch(`${API_URL}/photos`)
    .then((Response) => Response.json())
    .then((photos) =>{
        photoDatos = photos.map((photos) => `<li>${photos.albumId} ${photos.id} ${photos.title} ${photos.url} ${photos.thumbnailUrl}</li>`) //Obtengo los datos que quiero de la API
        HTMLResponse.innerHTML = `<ul>${photoDatos}</ul>`; //Muestro en la pantalla la informacion obtenida por campo
    })

/* Acá intenté hacer una iteracion con un ciclo For para buscar el campo del arreglo que coincida con ese codigo, pero no sirvio unu
let numUsuario = prompt("Digite un numero")
let index = -1;
for (let i = 0; i < photoDatos.length; i++) {
    if (photoDatos[i] === numUsuario) {
        index = i;
        console.log("Valor encontrado en el índice: " + index);
        break;
    }
}*/