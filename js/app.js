const sectionMarvel = document.querySelector(".marvelStudios");
const sectionDC = document.querySelector(".dcComics");
const mostrarMarvel = document.querySelector(".mostrarMarvel");
const mostrarDC = document.querySelector(".mostrarDC");

let heroesMarvel = [];
let heroesDC = [];
// const heroesTodos = [...heroesMarvel, ...mostrarDC];

mostrarMarvel.addEventListener("click", async (e) => {
    heroesMarvel = await cargarDatosMarvel();
    limpiarCards(sectionMarvel);
    limpiarCards(sectionDC);
    generarCards(sectionMarvel, heroesMarvel);

})

mostrarDC.addEventListener("click", async (e) => {
    heroesDC = await cargarDatosDC();
    limpiarCards(sectionDC);
    limpiarCards(sectionMarvel);
    generarCards(sectionDC, heroesDC);

})

document.addEventListener('DOMContentLoaded', async (e) => {
    heroesMarvel = await cargarDatosMarvel();
    heroesDC = await cargarDatosDC();
    generarCards(sectionMarvel, heroesMarvel);
    generarCards(sectionDC, heroesDC);
})



function generarCards(sectionHeroes, heroes){

    heroes.forEach(heroe => {
        const card = document.createElement("div");
        card.className = "card";

        const tituloCard = document.createElement("h4");
        tituloCard.textContent = heroe.nombre;

        const imgCard = document.createElement("img");
        imgCard.src = heroe.imagen;
        imgCard.className = "imagenCard"

        const botonCard = document.createElement("button");
        botonCard.textContent = "Más información";
        botonCard.className = "botonVerMas";

        card.appendChild(imgCard);
        card.appendChild(tituloCard);
        card.appendChild(botonCard);
        sectionHeroes.appendChild(card);
    })

}

function limpiarCards(sectionCard){
    while(sectionCard.firstChild){
        sectionCard.removeChild(sectionCard.firstChild);
    }
}


async function cargarMarvel(){
    const response = await fetch("../storage/data/heroesMarvel.json");
    heroesMarvel = await response.json();
    generarCards(sectionMarvel, heroesMarvel);
}

async function cargarDC(){
    const response = await fetch("../storage/data/heroesMarvel.json");
    heroesDC = await response.json();
    generarCards(sectionDC, heroesDC);
}

async function cargarDatosMarvel(){
    return await fetch("../storage/data/heroesMarvel.json").then(response => response.json());
}

async function cargarDatosDC(){
    return await fetch("../storage/data/heroesDc.json").then(response => response.json());
}