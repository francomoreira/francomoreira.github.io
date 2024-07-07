// Definiendo constantes y/o variables
const urlUser = document.querySelector("#primary-input"); // texto que ingresa el usuario
const botonOk = document.getElementById("primary-button"); // boton 'OK' principal
const botonCopiar = document.getElementById("copiar-button"); // boton 'Copiar'
const checkbox720p = document.getElementById('check1'); // checkbox de 720p

const thumbPreview = document.getElementById("thumbnail-preview"); // Espacio donde se imprimirá la img conseguida
const resultado = document.querySelector('#resultado'); // Texto <p> que se imprime con el link de descarga

let checkBoxOnOff = true;
let thumbImg;

// Eventos
botonOk.addEventListener('click', concatenarURL);
checkbox720p.addEventListener('click', checkOpcionMarkdown);
botonCopiar.addEventListener('click', copiandoTexto);


function getYTvideoId(url) {
    const urlObj = new URL(url); // Creamos un objeto URL con la URL proporcionada
    if (urlObj.hostname === 'youtu.be') { // Verificamos si la URL apunta a YouTube (youtu.be)
        // El identificador del video se encuentra en la parte del pathname después de la ruta base 'youtu.be'
        return urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes('youtube.com')) { // Verificamos si la URL apunta a YouTube.com
        // El identificador del video se encuentra en los parámetros de búsqueda con la clave 'v'
        return urlObj.searchParams.get('v');
    }
    return null; // Si no se cumple ninguna de las condiciones anteriores, devolvemos null
  }

  
function concatenarURL() {
    const url = urlUser.value;
    const primeraParteAConcatenar = "https://i.ytimg.com/vi/"
    const segundaParteAConcatenar720 = "/hq720.jpg"
    const segundaParteAConcatenarDefault = "/hqdefault.jpg"

    let result;
    if (checkBoxOnOff === true) {
        result = `${primeraParteAConcatenar}${getYTvideoId(url)}${segundaParteAConcatenar720}`;
    } else {
        result = `${primeraParteAConcatenar}${getYTvideoId(url)}${segundaParteAConcatenarDefault}`;
    }

    
    resultado.innerHTML = '<a href="'+result+'" target="_blank" rel="noreferrer noopener">'+result+'</a>';
    botonCopiar.style.display = "flex";
    urlUser.style.display = "none";
    botonOk.style.display = "none";
    document.getElementById('checkbox-and-p').style.display = "none"; // oculta checkbox720p y el texto p
    thumbPreview.setAttribute("src", result);
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
    urlUser.style.display = "flex";
    urlUser.value = "";
    botonOk.style.display = "flex";
    document.getElementById('checkbox-and-p').style.display = "flex";
    thumbPreview.style.display = "none";
}

