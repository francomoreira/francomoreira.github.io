const URL = 'https://api.thecatapi.com/v1/images/search';
const img = document.querySelector('.imagenGato');

function random() {
    fetch(URL)
    .then (res => res.json())
    .then (data => {
        img.src = data[0].url
    });
}

random();