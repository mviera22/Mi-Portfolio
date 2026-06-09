// Modal de contacto
const modal = document.getElementById("email-modal");
const emailLink = document.getElementById("email-link");
const closeBtn = document.getElementsByClassName("close")[0];
const contactForm = document.getElementById("contact-form");

if (emailLink) {
    emailLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (modal) {
            modal.style.display = "block";
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        if (modal) {
            modal.style.display = "none";
        }
    });
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }

        const destinatario = 'mvieraunlu@gmail.com';
        const asunto = encodeURIComponent('Contacto desde el portafolio');
        const cuerpo = encodeURIComponent(
            `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
        );
        const mailtoLink = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

        window.location.href = mailtoLink;
        contactForm.reset();
        if (modal) {
            modal.style.display = "none";
        }
    });
}

