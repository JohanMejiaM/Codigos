function primeraFuncion() {
    let valor1  =   "Valor1";

    // tienes la propiedad de crear una funcion dentro de otra funcion

    function segundaFuncion() {
        console.log(valor1);

        function terceraFuncion () {
            console.log("Tercera funcion", valor1);

            function cuartaFuncion( ) {
                console.log ("Cuarta funcion", valor1 + "Hola");
            }

            return cuartaFuncion();
        }
        
        return cuartaFuncion ();
    }

    return terceraFuncion();
}

return segundaFuncion();

primeraFuncion ();