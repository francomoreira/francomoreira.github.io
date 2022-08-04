const resultado = document.querySelector('#resultado');
const input = document.querySelector("#primary-input");
const boton = document.getElementById("primary-button");
const botonCopiar = document.getElementById("copiar-button");
const check1 = document.getElementById('check1');
const thumbPreview = document.getElementById("thumbnail-preview");

check1.addEventListener('click', checkOpcionMarkdown)
boton.addEventListener('click', obtenerUrl);
botonCopiar.addEventListener('click', copiandoTexto);

let checkBoxOnOff = true;
let thumbImg;

function obtenerUrl() {
    const urlUsuario = input.value;
    const primeraParteAConcatenar = "https://i.ytimg.com/vi/"
    const segundaParteAConcatenar720 = "/hq720.jpg"
    const segundaParteAConcatenarDefault = "/hqdefault.jpg"
    const parteABorrar = "https://youtu.be/"

    let fileId = urlUsuario.replace(parteABorrar, "");
    let result = primeraParteAConcatenar+fileId;
    thumbImg = result + segundaParteAConcatenarDefault;
    if (checkBoxOnOff == true) {
        result = result + segundaParteAConcatenar720;
    } else {
        result = result + segundaParteAConcatenarDefault;
    }
    resultado.innerHTML = '<a href="'+result+'" target="_blank" rel="noreferrer noopener">'+result+'</a>';
    botonCopiar.style.display = "flex";
    input.style.display = "none";
    boton.style.display = "none";
    document.getElementById('checkbox-and-p').style.display = "none";
    thumbPreview.setAttribute("src", thumbImg);
    thumbPreview.style.display = "flex";
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
    thumbPreview.style.display = "none";
}

