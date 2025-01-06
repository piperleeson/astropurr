import { signUp, logIn, logOut, monitorAuthState } from './auth.js';
import app from './firebase-config';
const auth = getAuth(app);

monitorAuthState((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
        // Redirect to another page, or update the UI
        window.location.href = 'index.html';
    } else {
        // User is signed out
        console.log('User is signed out');
        // Redirect to the login page or update the UI
        window.location.href = 'login.html';
    }
});

const loginButtons = document.getElementsByClassName('logInButton');
for (let button of loginButtons) {
    button.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
}

const chartButtons = document.getElementsByClassName('chartGenButton');
for (let button of chartButtons) {
    button.addEventListener('click', function () {
        window.location.href = 'chart-generator.html';
    });
}

const logOutButtons = document.getElementsByClassName('logOutButton');
for (let button of logOutButtons) {
    button.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        await signUp(email, password);
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        await logIn(email, password);
    });
}

const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        await logOut();
    });
}

