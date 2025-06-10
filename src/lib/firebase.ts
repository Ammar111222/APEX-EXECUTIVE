// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "apexv1.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Log Firebase config for debugging (without API key for security)
console.log('Firebase Config:', {
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  measurementId: firebaseConfig.measurementId
});

let app, auth, db;

try {
  // Initialize Firebase
  console.log('Initializing Firebase...');
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
  
  console.log('Getting auth instance...');
  auth = getAuth(app);
  console.log('Auth instance created');
  
  console.log('Getting Firestore instance...');
  db = getFirestore(app);
  console.log('Firestore instance created');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

export { auth, db };
export default app; 