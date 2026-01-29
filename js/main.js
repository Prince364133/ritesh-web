// Main JavaScript for Layout Injection

document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});

function loadLayout() {
    // Inject Header
    const headerHTML = `
        <div class="top-bar">
            <div class="container top-bar-inner">
                <div class="contact-info">
                    <span class="contact-item">📞 +91 9552548433</span>
                    <span class="contact-item">✉️ zestechenterprises@gmail.com</span>
                </div>
                <!-- Social Media Icons (Right Side) -->
                <div class="social-icons">
                    <a href="https://wa.me/919552548433" target="_blank" aria-label="WhatsApp" class="social-icon" style="background: #25D366; color: white;">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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
                    
                    <!-- Mobile Only Contact Info -->
                    <div class="mobile-contact-info">
                        <div class="mobile-contact-item">📞 +91 9552548433</div>
                        <div class="mobile-contact-item">✉️ zestechenterprises@gmail.com</div>
                        
                        <!-- Mobile Social Icons -->
                        <div class="mobile-social-icons">
                             <a href="https://wa.me/919552548433" target="_blank" aria-label="WhatsApp" class="social-icon" style="background: #25D366; color: white;">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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
                </nav>
                <a href="https://wa.me/919552548433" target="_blank" class="btn btn-primary header-quote-btn">Get Quote</a>
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
                        <li>📍 Second Floor, Datta Kurpa Building, Atrey Layout, Pratap Nagar, Nagpur - 440022, India</li>
                        <li>📞 +91 9552548433</li>
                        <li>✉️ zestechenterprises@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2026 Zestech Enterprises. All Rights Reserved.</p>
            </div>
        </footer>
    `;

    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;

    // Inject Floating WhatsApp Button
    const whatsappHTML = `
        <a href="https://wa.me/919552548433" class="whatsapp-float" target="_blank">
            <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c1.009.55 2.063.846 3.093.846h.001c.001 0 .002 0 .002 0 3.181 0 5.768-2.586 5.768-5.766.001-3.18-2.585-5.766-5.766-5.766zm-9.061 5.766c0-4.996 4.065-9.061 9.061-9.061 4.997 0 9.061 4.065 9.061 9.061 0 4.996-4.065 9.061-9.061 9.061-1.921 0-3.805-.625-5.322-1.802l-5.656 1.482 1.498-5.541c-1.306-1.554-2.126-3.522-2.126-5.619zm14.59 3.287c-.155-.077-2.108-1.036-2.434-1.154-.326-.118-.563-.177-.801.178-.237.355-.918 1.154-1.125 1.391-.207.237-.414.267-.829.059-1.905-.953-3.267-2.464-4.275-4.195-.207-.355-.022-.547.155-.724.161-.161.355-.414.533-.621.178-.207.237-.355.355-.591.118-.237.059-.444-.03-.621-.089-.178-.801-1.929-1.096-2.641-.287-.692-.578-.598-.8-.609l-.681-.012c-.237 0-.621.089-.947.444-.326.355-1.243 1.214-1.243 2.961.001 1.748 1.273 3.436 1.451 3.673.178.237 2.504 3.824 6.067 5.362 2.373 1.025 2.855.821 3.359.771.504-.049 1.628-.665 1.865-1.307.237-.641.237-1.191.166-1.307-.072-.119-.267-.19-1.066-.589z"/>
            </svg>
        </a>
    `;
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);

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
