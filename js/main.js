/*-----1) INTERACCIÓN - CARRUSEL DE IMÁGENES-----*/

//Variables - Arreglos
let imagenes = ['<img src="img/slide-img-1.jpg" alt="Carrusel de Imágenes, Fotografía #1">', '<img src="img/slide-img-2.jpg" alt="Carrusel de Imágenes, Fotografía #2">', '<img src="img/slide-img-3.jpg" alt="Carrusel de Imágenes, Fotografía #3">']
let cont = 0;
let itemCarrusel = document.querySelector(".carrusel-item");

//Función que logra cargar las imagenes del carrusel
RecargarImagen();
function RecargarImagen(){
    itemCarrusel.innerHTML = imagenes[cont];
}

//Función para poder manipular el carrusel (mediante los elementos del arreglo imagenes)
function ImgSiguiente(){
    cont++;
    RecargarImagen();
    
    if(cont>=imagenes.length){
        cont = 0;
        RecargarImagen();
    }
}

//Galería automática para recorrer el carrusel
let tiempo = 0;
let repeticiones = 0;

while(repeticiones<=10000){
    recorrerGaleria();
}

function recorrerGaleria(){
    setTimeout(ImgSiguiente, tiempo+=3500);
    repeticiones++;
}

/*-----2) INTERACCIÓN SONORA PARA EL PIANO VIRTUAL-----*/

//Variables - Arreglos
let arr_teclasBlancas = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b'];
let arr_teclasNegras = ['2', '3', '5', '6', '7', '9', '0', 's', 'd', 'f'];

let teclasPiano = document.querySelectorAll("#piano-contenedor div");
let teclasBlancas = document.querySelectorAll(".tecla-blanca");
let teclasNegras = document.querySelectorAll(".tecla-negra");

//Evento click para reproducir las notas de las teclas del piano 
teclasPiano.forEach(key => {
    key.addEventListener('click', () => reproducirNota(key))
})

/*Evento keydown que accede a las teclas del ordenador, 
se reproducen las notas del piano al presionar las mismas*/
document.addEventListener('keydown', e => {
    if(e.repeat) return;
    let k = e.key;
    let indiceTeclasBlancas = arr_teclasBlancas.indexOf(k);
    let indiceTeclasNegras = arr_teclasNegras.indexOf(k);

    if(indiceTeclasBlancas > -1) reproducirNota(teclasBlancas[indiceTeclasBlancas]);
    if(indiceTeclasNegras > -1) reproducirNota(teclasNegras[indiceTeclasNegras]);
})

//Función que reproduce las notas musicales desde HTML
function reproducirNota(key){
    let audioNota = document.getElementById(key.dataset.note);
    audioNota.currentTime = 0;
    audioNota.play();
}

/*-----3) MANIPULAR DATOS DEL PIANO AL PRESIONAR LOS BOTONES INTERACTIVOS-----*/

//Variables
let teclasColoridas = document.querySelectorAll("#piano-contenedor kbd");
let notacionesMusicales = document.querySelectorAll("#piano-contenedor p");
let btn_mostrarNotacion = document.getElementById("mostrarNotacion");
let btn_mostrarTeclas = document.getElementById("mostrarTeclas");
let mostrado = false;
let i = 0;

//Evento click al botón mostrar notación musical
btn_mostrarNotacion.addEventListener("click", () => {
    for(i = 0; i <= notacionesMusicales.length; i++){
        notacionesMusicales[i].classList.toggle("visible");
    }
})

//Evento click al botón mostrar teclas del ordenador
btn_mostrarTeclas.addEventListener("click", () => {
    for(i = 0; i <= teclasColoridas.length; i++){
        teclasColoridas[i].classList.toggle("visible");
    }
})