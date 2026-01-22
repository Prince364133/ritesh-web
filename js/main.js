// Main JavaScript for Layout Injection

document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});

function loadLayout() {
    // Inject Header
    const headerHTML = `
        <div class="top-bar">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
                <div class="contact-info">
                    <span>📞 +91 9582516433</span>
                    <span style="margin-left: 15px;">✉️ zestechenterprises@gmail.com</span>
                </div>
                <!-- Social Media Icons (Right Side) -->
                <div class="social-icons" style="display: flex; gap: 15px;">
                    <a href="https://wa.me/919582516433" target="_blank" aria-label="WhatsApp" class="social-icon">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.968.586 1.972.827 3.298.83l.004.033h.032c3.182 0 5.768-2.586 5.769-5.766 0-3.181-2.587-5.767-5.768-5.767zm0 10.155c-1.146 0-2.29-.353-2.909-1.01l-1.05.275.281-.989c-.618-.982-.71-2.153-.711-2.665.001-2.327 1.745-4.148 4.15-4.147 2.327 0 4.148 1.821 4.15 4.147 0 2.327-1.822 4.149-4.15 4.149zm9.052-4.422c-.391-.186-2.16-1.132-2.316-1.132-.156.113-.313.376-.469.564-.156.188-.313.376-.469.376-.156 0-.313 0-1.252-.47-1.564-.658-2.66-2.068-2.816-2.257-.156-.188-.156-.47-.078-.564.078-.094.156-.282.235-.47.078-.188.156-.376.156-.564-.078-.094-.391-1.034-.547-1.41-.156-.376-.313-.376-.469-.376h-.391c-.156 0-.391.094-.626.376-.235.282-.86 1.034-.86 2.35 0 1.222 1.33 2.16 1.486 2.443 1.017 1.88 2.034 2.35 3.364 2.82.47.188.86.282 1.252.376.235.094.469.094.704.094.548 0 1.33-.564 1.565-1.034.235-.47.235-.846.156-.94-.078-.094-.235-.188-.469-.282z"/></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="social-icon">
                         <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="social-icon">
                         <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M5.444 3.206h-5.444v17.588h5.444v-17.588zm4.556 0h-5.444v17.588h5.444v-17.588zm4.555 0h-5.444v17.588h5.444v-17.588zm4.556 0h-5.444v17.588h5.444v-17.588z" style="display:none;"/> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                   <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="social-icon">
                         <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 9.283-5.128 8.322 4.296v4.01h4.881v-7.81c0-9.208-11.131-9.284-13.235-4.245v-3.945z"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <header class="main-header">
            <div class="container">
                <a href="index.html" class="logo">
                   <img src="assets/images/logo.png" alt="ZESTECH ENTERPRISES" style="height: 50px;">
                </a>
                <div class="mobile-toggle" onclick="toggleMenu()">☰</div>
                <nav class="nav-menu" id="nav-menu">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="products.html" class="nav-link">Products & Solutions</a>
                    <a href="gallery.html" class="nav-link">Gallery</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                </nav>
                <a href="https://wa.me/919582516433" target="_blank" class="btn btn-primary" style="display: none; @media(min-width: 768px){display:inline-block;}">Get Quote</a>
            </div>
        </header>
    `;

    // Inject Footer
    const footerHTML = `
        <footer>
            <div class="container footer-grid">
                <div class="footer-col">
                    <h3>Zestech Enterprises</h3>
                    <p>Your premier destination for all electrical equipment needs. Specializing in high-quality products since 2023.</p>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="products.html">Products & Solutions</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>📍 New Delhi, India</li>
                        <li>📞 +91 9582516433</li>
                        <li>✉️ zestechenterprises@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2024 Zestech Enterprises. All Rights Reserved.</p>
            </div>
        </footer>
    `;

    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;

    // Highlight active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Global scope function for toggle
window.toggleMenu = function () {
    document.getElementById('nav-menu').classList.toggle('active');
}
