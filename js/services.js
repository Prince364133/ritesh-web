import { db, collection, getDocs } from './firebase-config.js';

const container = document.getElementById('dynamic-services-container');

async function loadServices() {
    try {
        const querySnapshot = await getDocs(collection(db, "services"));

        if (querySnapshot.empty) {
            container.innerHTML = '<p class="text-center" style="width: 100%; grid-column: 1/-1;">No additional services listed at the moment.</p>';
            return;
        }

        container.innerHTML = ''; // Clear loading text

        querySnapshot.forEach((doc) => {
            const service = doc.data();
            const serviceHTML = `
                <div class="service-card" style="background: #fff;">
                    <span class="service-icon">✨</span>
                    <h3>${service.title || 'Untitled Service'}</h3>
                    <p>${service.description || 'No description available.'}</p>
                </div>
            `;
            container.innerHTML += serviceHTML;
        });

    } catch (error) {
        console.error("Error loading services:", error);
        container.innerHTML = '<p class="text-center" style="width: 100%; grid-column: 1/-1; color: red;">Failed to load services. Please try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadServices);
