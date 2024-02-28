const sectionMarvel = document.querySelector(".marvelStudios");

let heroesMarvel = [];
document.addEventListener('DOMContentLoaded', async (e) => {
    heroesMarvel = await cargarDatosMarvel();
    generarCardsMarvel();

})

function generarCardsMarvel(){

    heroesMarvel.forEach(heroe => {
        const card = document.createElement("div");
        card.className = "cardMarvel";

        const tituloCard = document.createElement("h4");
        tituloCard.textContent = heroe.nombre;

        const imgCard = document.createElement("img");
        imgCard.src = heroe.imagen;
        imgCard.className = "imagenCard"

        const botonCard = document.createElement("button");
        botonCard.textContent = "Ver";
        botonCard.className = "botonVerMas";

        card.appendChild(imgCard);
        card.appendChild(tituloCard);
        card.appendChild(botonCard);
        sectionMarvel.appendChild(card);
    })

}


async function cargarMarvel(){
    const response = await fetch("../storage/data/heroesMarvel.json");
    heroesMarverl = await response.json();
    generarCardsMarvel();
}


async function cargarDatosMarvel(){
    return await fetch("../storage/data/heroesMarvel.json").then(response => response.json());
}