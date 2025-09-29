// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el botón y el párrafo del mensaje por sus IDs
    const actionButton = document.getElementById('actionButton');
    const message = document.getElementById('message');

    // Añade un "escuchador" de eventos para el clic en el botón
    actionButton.addEventListener('click', () => {
        // Cambia el texto del párrafo cuando se hace clic
        message.textContent = '¡Gracias por visitar mi página! 👋';
    });

});