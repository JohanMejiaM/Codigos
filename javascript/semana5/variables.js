// * var
// * let
// * const

// * var: es una palabra reservada que nos permite declarar variables en javascript

var n1 = 1 // Number
n1 = "hola" // String

//! var ya no se usa
// var es global
// var es reasignable
// var es pesado
var n1 = true;

// Actualmente no es recomndable usar var

//* let: es una palabra reservada que nos permite declarar variables en javascript
// let solo funciona en el scope donde fue declarada
let nombre = "Johan"; // el valor inicial

nombre = 10; //cambiando el valor
nombre= true; //cambiando el valor
nombre= null; //cambiando el valor
nombre= undefined; //cambiando el valor

//Una nueva variable
let nombre2 ="Juan"

// console. log es para imprimir en la pagina web
console.log("Hola esta es una variable"); 
// true= 1
// false = 0
console.log(n1 + nombre);
console.log(nombre);

//* const:  es una palabra reservada que nos permite declarar variables en javascript
// const solo funciona en el scope donde fue declarada
// const no se puede reasignar
const nombre3 = "Johan"
// Esto no es posible con const porque una vez tenga este un valor ya no se puede cambiar
// A esto se le llama INMUTABILIDAD

