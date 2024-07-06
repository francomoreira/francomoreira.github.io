// definiendo las constantes
const urlUser = document.querySelector("#primary-input"); // texto que mete el usuario
const botonOk = document.getElementById("primary-button"); // boton principal, el de OK
const botonCopiar = document.getElementById("copiar-button");
const checkbox720p = document.getElementById('check1'); // checkbox de 720p
const thumbPreview = document.getElementById("thumbnail-preview");
const resultado = document.querySelector('#resultado');

// eventos
checkbox720p.addEventListener('click', checkOpcionMarkdown)
botonOk.addEventListener('click', concatenarURL);
botonCopiar.addEventListener('click', copiandoTexto);

let checkBoxOnOff = true;
let thumbImg;


function getYTvideoId(url) {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes('youtube.com')) {
        return urlObj.searchParams.get('v');
    }
    return null;
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
    document.getElementById('checkbox-and-p').style.display = "none";
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

