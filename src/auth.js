import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from './firebase-config';

const auth = getAuth(app);

// Listen to authentication state changes
export const monitorAuthState = (callback) => {
    onAuthStateChanged(auth, (user) => {
        callback(user); // Pass the user object (or null if logged out) to the callback
    });
};

// Sign up a new user
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
    } catch (error) {
        console.error('Error signing up:', error.message);
    }
};

// Log in a user
export const logIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in:', error.message);
    }
};

// Log out a user
export const logOut = async () => {
    try {
        await signOut(auth);
        console.log('User logged out');
    } catch (error) {
        console.error('Error logging out:', error.message);
    }
};
