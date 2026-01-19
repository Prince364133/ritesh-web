// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY_TN3to4yAqk7IJNqVSKFS-fSuynXwOw",
    authDomain: "teste-erhij8.firebaseapp.com",
    projectId: "teste-erhij8",
    storageBucket: "teste-erhij8.firebasestorage.app",
    messagingSenderId: "744778225564",
    appId: "1:744778225564:web:f5d6b73e501495b3dfda59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    app, db, auth,
    collection, addDoc, getDocs, deleteDoc, doc,
    signInWithEmailAndPassword, signOut, onAuthStateChanged
};
