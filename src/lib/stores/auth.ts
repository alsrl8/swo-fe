import { writable } from 'svelte/store';
import { 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  onAuthStateChanged, 
  type User 
} from 'firebase/auth';
import { auth, googleProvider, adminEmails } from '$lib/firebase';
import { browser } from '$app/environment';

// Create writable stores for the user and admin status
export const user = writable<User | null>(null);
export const isAdmin = writable<boolean>(false);

// Check if a user is an admin by checking against the hardcoded list
function checkAdminStatus(email: string | null | undefined) {
  if (!email) {
    isAdmin.set(false);
    return;
  }

  // Check if the email is in the adminEmails array
  isAdmin.set(adminEmails.includes(email));
}

// Initialize the auth state listener
if (browser) {
  onAuthStateChanged(auth, (currentUser) => {
    user.set(currentUser);
    
    // Check admin status when user changes
    if (currentUser) {
      checkAdminStatus(currentUser.email);
    } else {
      isAdmin.set(false);
    }
  });
}

// Sign in with Google
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    checkAdminStatus(result.user.email);
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
    isAdmin.set(false);
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error };
  }
}