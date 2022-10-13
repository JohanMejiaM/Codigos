// Escribir un texto dentro del elemento:
document.getElementById('div_container').innerText = "Hola a todos";
// Darle estilos al elemento:
document.getElementById('div_container').style.fontSize = "40px";

function test() {
    document.getElementById("div_container").classList.add("big");
}

function remove() {
    document.getElementById("div_container").classList.remove("big");
}


// Selector de varios elementos
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

// parrafos.forEach(p) => {
//    console.log(p);
//};

const array_parrafos = document.querySelectorAll("p");
console.log(array_parrafos);
//forEach me permite recorrer uno por uno y trabajar de la manera que se establesca por igual
array_parrafos.forEach((p) => {
    p.onclick = function () {
        p.innerText = "bruno";
        p.classList.add("big");
    }
});


const nombre = document.getElementById('input_name');

nombre.addEventListener('keyup', function() {
    const text = nombre.value;
    // console.log("value", text);
    console.log("key: ", evento_keyup.key);
    console.log("code: ", evento_keyup.code);

    //Agregar el texto de la barra en los "Textos al dar click"
    // array_parrafos.forEach((p) => {
      //  p.innerText = text;
   // })
   
});