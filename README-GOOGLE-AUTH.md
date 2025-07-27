# Google Authentication Setup for SWO App

This document provides instructions for setting up Google Authentication in the SWO App.

## Prerequisites

- A Google account
- A Firebase account (you can use your Google account)

## Setup Steps

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "SWO App")
4. Follow the setup wizard (you can disable Google Analytics if not needed)
5. Click "Create project"

### 2. Register Your Web App

1. In the Firebase Console, select your project
2. Click on the web icon (</>) to add a web app
3. Enter a nickname for your app (e.g., "SWO Web App")
4. Check "Also set up Firebase Hosting" if you plan to use it
5. Click "Register app"
6. Copy the Firebase configuration object (we'll need this later)

### 3. Enable Google Authentication

1. In the Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Click on the "Google" provider
4. Toggle the "Enable" switch to on
5. Enter your project's support email
6. Click "Save"

### 4. Configure Your Application

1. Open the file `src/lib/firebase.ts`
2. Replace the placeholder values in the `firebaseConfig` object with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## Testing Authentication

1. Start your development server with `npm run dev`
2. Navigate to the login page at `/login`
3. Click the "Sign in with Google" button
4. Complete the Google authentication flow
5. You should be redirected to the home page and see your profile picture in the header

## Troubleshooting

### Authorized Domains

If you're having issues with authentication, make sure your domain is authorized:

1. In the Firebase Console, go to "Authentication"
2. Click on the "Settings" tab
3. Scroll down to "Authorized domains"
4. Add your domain (for local development, `localhost` should already be there)

### CORS Issues

If you encounter CORS issues:

1. In the Firebase Console, go to "Authentication"
2. Click on the "Settings" tab
3. Make sure your domain is listed in "Authorized domains"

### Popup Blocked

If the authentication popup is blocked:

1. Check your browser's popup blocker settings
2. Allow popups for your application's domain

## Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Google Sign-In Documentation](https://firebase.google.com/docs/auth/web/google-signin)
- [Firebase Web Setup](https://firebase.google.com/docs/web/setup)