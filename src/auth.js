import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';
import app from './firebase-config';

const auth = getAuth(app);

// Listen to authentication state changes
export const monitorAuthState = (callback) => {
    onAuthStateChanged(auth, (user) => {
        callback(user); // Pass the user object (or null if logged out) to the callback
    });
};

export async function signUp(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Set the display name after user creation
      await updateProfile(user, {
        displayName: displayName
      });
  
      console.log('User created and display name set:', user);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }

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
