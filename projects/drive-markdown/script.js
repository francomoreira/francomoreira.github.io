const resultado = document.querySelector('#resultado');
const input = document.querySelector("#primary-input");
const boton = document.getElementById("primary-button");
const botonCopiar = document.getElementById("copiar-button");
const check1 = document.getElementById('check1')

check1.addEventListener('click', checkOpcionMarkdown)
boton.addEventListener('click', obtenerUrl);
botonCopiar.addEventListener('click', copiandoTexto);

let checkBoxOnOff = true;

function obtenerUrl() {
    const urlUsuario = input.value;
    const urlParaConcatenar = "https://drive.google.com/uc?export=view&id="
    const primeraParte = "https://drive.google.com/file/d/"
    const segundaParte = "/view?usp=sharing"

    let fileId = urlUsuario.replace(primeraParte, "");
    fileId = fileId.replace(segundaParte, "");
    let result = urlParaConcatenar+fileId;
    if (checkBoxOnOff == true) {
        resultado.innerHTML = "![]("+result+")";
    } else {
        resultado.innerHTML = "&lt img src='" + result+ "'6gt";
    }
    botonCopiar.style.display = "flex";
    input.style.display = "none";
    boton.style.display = "none";
    document.getElementById('checkbox-and-p').style.display = "none";
    return result;
}

function checkOpcionMarkdown() {
    switch (checkBoxOnOff) {
        case false:
            checkBoxOnOff = true;
            break;
        case true:
            checkBoxOnOff = false;
            break;
    }
}

function copiandoTexto() {
    var codigoACopiar = document.querySelector('#resultado');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    botonCopiar.style.display = "none";
    resultado.innerText = "Se ha copiado con éxito!";
    input.style.display = "flex";
    input.value = "";
    boton.style.display = "flex";
    document.getElementById('checkbox-and-p').style.display = "flex";
}

