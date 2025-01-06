import { signUp, logIn, logOut, monitorAuthState } from './auth.js';
import app from './firebase-config';
import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    
const greetingElement = document.getElementById('greeting');

monitorAuthState((user) => {
    if (user) {
        const displayName = user.displayName || user.email;
        greetingElement.innerHTML = `Hi, ${displayName}! Welcome to your profile.`;
        console.log('User is signed in:', user);
    } else {
        console.log('User is signed out');
    }
});

const loginButtons = document.getElementsByClassName('logInButton');
for (let button of loginButtons) {
    button.addEventListener('click', function () {
        window.location.href = 'login.html';
        console.log("login button clicked")
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

const signupButtons = document.getElementsByClassName('signupButton');
for (let button of signupButtons) {
    button.addEventListener('click', function () {
        window.location.href = 'signup.html';
    });
}

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const displayName = document.getElementById('signupDisplayName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        await signUp(email, password, displayName);
        window.location.href = 'profile.html'
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        await logIn(email, password);
        window.location.href = 'profile.html'
    });
}

const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        await logOut();
    });
};
});
