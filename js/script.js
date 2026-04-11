// Este evento asegura que el código se ejecute cuando el HTML termine de cargar
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡El portfolio de Manuela Viera está funcionando correctamente!");

    // Modal de contacto
    const modal = document.getElementById("email-modal");
    const emailLink = document.getElementById("email-link");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Abrir modal
    emailLink.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    // Cerrar modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar modal al hacer click fuera
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Validación básica del formulario
    const contactForm = document.querySelector('#email-modal form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                e.preventDefault();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                e.preventDefault();
                return;
            }

            alert('Formulario enviado correctamente. ¡Gracias por contactarme!');
        });
    }
});