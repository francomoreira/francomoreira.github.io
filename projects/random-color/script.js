//funcion que se ejecuta al apretar el boton primary

function randomColor() {
    // obtengo un color hexagonal random.
    var hexaColor = Math.floor(Math.random()*16777215).toString(16);
    hexaColor = "#" + hexaColor;
    // Modifica el texto de pantalla
    document.getElementById("resultado").innerHTML = hexaColor;
    // modifico el background del div
    document.getElementById("random-color-box").style.backgroundColor = hexaColor;
}