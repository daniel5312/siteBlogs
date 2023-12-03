document.addEventListener('DOMContentLoaded', function () {
    console.log('El DOM ha sido cargado');

    // Ejemplo de agregar interactividad al botón de contacto
    const contactoButton = document.querySelector('.cta-button');

    contactoButton.addEventListener('click', function () {
        alert('¡Gracias por tu interés! Te responderemos pronto.');
    });

    // Ejemplo de cargar más artículos con JavaScript (puedes personalizar esto según tus necesidades)
    const loadMoreButton = document.querySelector('#load-more');
    const latestPostsContainer = document.querySelector('.latest-posts');

    loadMoreButton.addEventListener('click', function () {
        // Aquí podrías realizar una petición AJAX para cargar más artículos desde el servidor
        // y luego agregarlos al contenedor latestPostsContainer
        // Por ahora, simplemente mostraremos un mensaje de alerta
        alert('Cargar más artículos...');
    });
});