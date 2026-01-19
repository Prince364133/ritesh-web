// Main JavaScript for Layout Injection

document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});

function loadLayout() {
    // Inject Header
    const headerHTML = `
        <div class="top-bar">
            <div class="container">
                <div class="contact-info">
                    <span>📞 +91 9582516433</span>
                    <span style="margin-left: 15px;">✉️ zestechenterprises@gmail.com</span>
                </div>
            </div>
        </div>
        <header class="main-header">
            <div class="container">
                <a href="index.html" class="logo">
                    ZESTECH
                    <span>ENTERPRISES</span>
                </a>
                <div class="mobile-toggle" onclick="toggleMenu()">☰</div>
                <nav class="nav-menu" id="nav-menu">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="products.html" class="nav-link">Products</a>
                    <a href="services.html" class="nav-link">Services</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                </nav>
                <a href="contact.html" class="btn btn-primary" style="display: none; @media(min-width: 768px){display:inline-block;}">Get Quote</a>
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
                        <li><a href="products.html">Products</a></li>
                        <li><a href="services.html">Services</a></li>
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
