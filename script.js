/*Parallax*/
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth = e.pageX*speed)/100
        const y = (window.innerHeight = e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    });
}

/*Tarjetas*/

  function toggle(clase){
    var blur = document.getElementById('tarjetas');
    blur.classList.toggle('active')
    var popup = document.getElementById(clase);
    popup.classList.toggle('active')


}

/* Entrega actividad*/
function abrir(clase){
    const ventana = document.getElementById(clase)
    const ventanaInterna = ventana.querySelector('.ventana-interna-inf')
    const carousel = ventanaInterna.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevBtn = ventana.querySelector('.prev-btn');
    const nextBtn = ventana.querySelector('.next-btn');
    let currentImageIndex = 0;

    //Eliminar clase active y ampliada
    images.forEach((image) =>{
        image.classList.remove('active');
        image.classList.remove('ampliada');
    });

    // Mostrar la primera imagen al cargar la página
    images[currentImageIndex].classList.add('active');

    // Función para cambiar de imagen
    function changeImage(index) {
    //Eliminar la clase ampliada
    images.forEach((image) =>{
        image.classList.remove('ampliada');
    });
    // Ocultar imagen actual
    images[currentImageIndex].classList.remove('active');
    // Actualizar índice de imagen actual
    currentImageIndex = (index + images.length) % images.length;
    // Mostrar nueva imagen
    images[currentImageIndex].classList.add('active');
    }

    // Manejadores de eventos para botones
    prevBtn.addEventListener('click', () => {
    changeImage(currentImageIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
    changeImage(currentImageIndex + 1);
    });
    var blur = document.getElementById('infografias');
    blur.classList.toggle('active')
    var popup = document.getElementById(clase);
    popup.classList.toggle('active')
}

/*Ampliar imagen*/

function ampliar(ventana){
    var carrusel = ventana.querySelector('.active')
    carrusel.classList.toggle('ampliada');
}
