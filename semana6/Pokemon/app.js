const btnGetPokemons = document.querySelector("#get-pokemons");

const container = document.querySelector(".container")

const urlPokemns = "https://pokeapi.co/api/v2/pokemon";

btnGetPokemons.onclick = async function () {
  // Como hacemos para que JS pueda extrar la información
  // de dichar
  // En JS existe la funcion "fetch" que permite consumir 
  // la información de una url 

  // Para poder hacer que fetch termine la ejecución
  // tenermos que convertir nuestra funcion en async
   const respuesta =  await  fetch (urlPokemns);
  // Ahora vamos a crear una variable que guarde la
  // informacion que el servidor responde

  //la parsea de JSON -> Objeto
  //Siempre debemos convertir nuestras json a un objeto
  // para que JS lo pueda entender

   const data = await respuesta.json();
   readPokemons(data.results);
   // Reto 1: Con la informacion que tenemos en data results haga una galeria
   // de pokemoness parecida a la de peliculas 
};

function readPokemons(pokemons) {
    container.innerHTML = "";
    pokemons.forEach((pokemon, index) => {
      container.innerHTML += `<div class="card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png" alt="" />
          <h4>${pokemon.name}</h4>
          <p>
            ${pokemon.url}
          </p>
        </div>
      `;
    });
  }
  