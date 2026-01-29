import { db, collection, addDoc } from './firebase-config.js';

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        formStatus.textContent = "Sending...";
        formStatus.style.color = "blue";

        try {
            await addDoc(collection(db, "messages"), {
                name,
                email,
                phone,
                message,
                timestamp: new Date()
            });

            formStatus.textContent = "Message sent successfully! We will contact you soon.";
            formStatus.style.color = "green";
            contactForm.reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            formStatus.textContent = "Error sending message. Please try again or call us directly.";
            formStatus.style.color = "red";
        }
    });
}
