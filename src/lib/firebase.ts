// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	// storageBucket: 'swo-project-72dad.appspot.com',
	// messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
	// measurementId: 'YOUR_MEASUREMENT_ID'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Hardcoded list of admin emails
const adminEmails = [
	'admin@example.com',
	'admin2@example.com',
	'mingi4754song@gmail.com',
	// Add more admin emails as needed
];

export { auth, googleProvider, adminEmails };
