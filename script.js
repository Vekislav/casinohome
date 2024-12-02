// Import Firebase modules (automatically loaded from the script tag in HTML)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Show/Hide Sign-Up Modal
const signupButton = document.getElementById('signup-button');
const signupModal = document.getElementById('signup-modal');
const closeModal = document.getElementById('close-modal');

signupButton.addEventListener('click', () => {
    signupModal.classList.remove('hidden'); // Show modal
});

closeModal.addEventListener('click', () => {
    signupModal.classList.add('hidden'); // Hide modal
});

// Handle Sign-Up Form Submission
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful registration
            alert('User registered successfully!');
            signupModal.classList.add('hidden'); // Hide modal
        })
        .catch((error) => {
            // Handle errors
            console.error('Error signing up:', error.message);
            alert(`Error: ${error.message}`);
        });
});

// Light/Dark Mode Toggle (from existing code)
const lightModeButton = document.getElementById('light-mode-toggle');
lightModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    lightModeButton.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
});
