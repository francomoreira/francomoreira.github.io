const primaryBoton = document.getElementById("primary-boton");
function run () {

    let consultaUsuario = document.getElementById("userInput").value;
        if (consultaUsuario == "") {
            document.getElementById("resultado-box").style.height = "40vh";
            document.getElementById("editable").innerHTML = "Ingresa un valor correcto";
        }
        else {
            let word = (consultaUsuario.toUpperCase()).replace(/[^a-z0-9]/gi,"");
            const wdCantidad = word.length;
            var i = 0;
            let array = [];

            while (i < wdCantidad) {
                array.unshift(word[i]);
                i++;
            }
            let wordReverse = array.join(""); 
            if (wordReverse == word) {
                document.getElementById("resultado-box").style.height = "40vh";
                document.getElementById("editable").innerHTML = "Si es un palíndromo! 🤩";
                }
            else {
                document.getElementById("resultado-box").style.height = "40vh";
                document.getElementById("editable").innerHTML = "Lo siento! <br> no es un palíndromo!🚫";
            }
        }
}

primaryBoton.addEventListener("click", run, false);

document.addEventListener('keydown', (event) => {
    var codeValue = event.code;
    if (codeValue == "Enter") {
        run();
    }
});
