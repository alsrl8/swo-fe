import { writable } from 'svelte/store';
import { 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  onAuthStateChanged, 
  type User 
} from 'firebase/auth';
import { auth, googleProvider } from '$lib/firebase';
import { browser } from '$app/environment';

// Create a writable store for the user
export const user = writable<User | null>(null);

// Initialize the auth state listener
if (browser) {
  onAuthStateChanged(auth, (currentUser) => {
    user.set(currentUser);
  });
}

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { success: true, user: result.user };
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return { success: false, error };
  }
}

// Sign out
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error };
  }
}