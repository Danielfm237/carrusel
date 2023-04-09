const imagenes = document.querySelectorAll("#carrusel img");
const anterior = document.querySelector("#anterior");
const siguiente = document.querySelector("#siguiente");

let indice = 0;

function mostrarImagen() {
    // Ocultar todas las imágenes
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.remove("activo");
    }

    // Mostrar la imagen activa
    imagenes[indice].classList.add("activo");
}

function retrocederImagen() {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarImagen();
}

function avanzarImagen() {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    mostrarImagen();
}

anterior.addEventListener("click", retrocederImagen);
siguiente.addEventListener("click", avanzarImagen);

// Mostrar la primera imagen
mostrarImagen();