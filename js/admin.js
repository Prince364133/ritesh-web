import {
    auth, db,
    signInWithEmailAndPassword, signOut, onAuthStateChanged,
    collection, addDoc, getDocs, deleteDoc, doc
} from './firebase-config.js';

const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const addServiceForm = document.getElementById('addServiceForm');
const servicesList = document.getElementById('admin-services-list');

// Auth State Observer
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        loginView.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        loadServices(); // Load data
    } else {
        // User is signed out
        loginView.classList.remove('hidden');
        dashboardView.classList.add('hidden');
    }
});

// Login Handler
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorMsg = document.getElementById('login-error');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            errorMsg.textContent = '';
        } catch (error) {
            console.error(error);
            errorMsg.textContent = 'Invalid email or password.';
        }
    });
}

// Logout Handler
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth);
    });
}

// Add Service Handler
if (addServiceForm) {
    addServiceForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('service-title').value;
        const description = document.getElementById('service-desc').value;

        try {
            await addDoc(collection(db, "services"), {
                title,
                description,
                timestamp: new Date()
            });
            addServiceForm.reset();
            loadServices(); // Refresh list
            alert('Service added successfully!');
        } catch (error) {
            console.error("Error adding service: ", error);
            alert('Error adding service.');
        }
    });
}

// Load Services & Delete Handler
async function loadServices() {
    servicesList.innerHTML = '<p style="padding:1rem;">Loading...</p>';
    try {
        const querySnapshot = await getDocs(collection(db, "services"));
        servicesList.innerHTML = '';

        if (querySnapshot.empty) {
            servicesList.innerHTML = '<p style="padding:1rem;">No custom services added yet.</p>';
            return;
        }

        querySnapshot.forEach((docSnap) => {
            const service = docSnap.data();
            const div = document.createElement('div');
            div.className = 'service-list-item';
            div.innerHTML = `
                <div>
                    <strong>${service.title}</strong>
                    <p style="font-size: 0.9rem; color: #666;">${service.description.substring(0, 50)}...</p>
                </div>
                <button class="delete-btn" data-id="${docSnap.id}">Delete</button>
            `;
            servicesList.appendChild(div);
        });

        // Attach delete listeners
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                if (confirm('Are you sure you want to delete this service?')) {
                    const id = e.target.getAttribute('data-id');
                    await deleteDoc(doc(db, "services", id));
                    loadServices(); // Refresh
                }
            });
        });

    } catch (error) {
        console.error("Error loading services:", error);
    }
}
