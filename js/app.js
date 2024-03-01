const sectionMarvel = document.querySelector(".marvelStudios");
const sectionDC = document.querySelector(".dcComics");
const mostrarMarvel = document.querySelector(".mostrarMarvel");
const mostrarDC = document.querySelector(".mostrarDC");

const tituloMarvel = document.querySelector(".tituloMarvel");
const tituloDC = document.querySelector(".tituloDc");
const hrMarvel = document.querySelector(".hrMarvel");
const hrDC = document.querySelector(".hrDC");

let heroesMarvel = [];
let heroesDC = [];

mostrarMarvel.addEventListener("click", async (e) => {
    tituloDC.style.display = "none";
    hrDC.style.display = "none";
    tituloMarvel.style.display = "flex";
    hrMarvel.style.display = "flex";     
    heroesMarvel = await cargarDatosMarvel();
    limpiarCards(sectionMarvel);
    limpiarCards(sectionDC);
    generarCards(sectionMarvel, heroesMarvel);

})

mostrarDC.addEventListener("click", async (e) => { 
    tituloMarvel.style.display = "none";
    hrMarvel.style.display = "none";  
    tituloDC.style.display = "flex";
    hrDC.style.display = "flex";    
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

        botonCard.addEventListener("click", () => {
            abrirModal(heroe);
        });

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

function agregarElementos(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
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


// Función para abrir el modal con la información específica de la tarjeta
function abrirModal(heroe) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalNombre = document.querySelector(".nombre");
    const modalDescripcion = document.querySelector(".descripcion");
    const modalFecha = document.querySelector(".fecha");

    // Configura la imagen y el texto en el modal
    modalImage.src = heroe.imagen;
    modalNombre.textContent = `Nombre: ${heroe.nombre}`;
    modalDescripcion.textContent = `Descripción: ${heroe.descrip}`;
    modalFecha.textContent = `Fecha creación: ${heroe.fecha}`;

    // Muestra el modal
    modal.showModal();

    // Agrega un evento clic al botón de cierre del modal
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
        modal.close();
    });

    // Cierra el modal si se hace clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.close();
        }
    });
}





