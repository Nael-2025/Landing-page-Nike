//function mudar tenis
function MudarTenis(mudar) {
    document.querySelector(".Tenis").src = mudar;
}
// function mudar cor do circulo
function MudarCirculo(color) {
    const circulo = document.querySelector(".circulo")
    circulo.style.background = color;
}