const btnGetPeliculas = document.querySelector("#get-peliculas");

const container = document.querySelector(".container");

const urlPeliculas = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

btnGetPeliculas.onclick = async function () {
    const respuesta = await fetch (urlPeliculas);
    const data = await respuesta.json();
    console.log(data);
    readPeliculas(data.Search);
};

function readPeliculas(peliculas) {
    container.innerHTML= "";
    peliculas.forEach((pelicula) => {
        container.innerHTML += `<div class=catalogo>
        <img src="${pelicula.Poster}" alt="" />
        <h4>${pelicula.Title}</h4>
        <p>${pelicula.Year}</p>
        <p>${pelicula.Type}</p>
        </div>
        <div class="effect-hover"></div>
        `;
    });
}