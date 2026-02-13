import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Firebase configuration - REPLACE WITH YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyABFHl688TRyg-6qn730heDw3msj-mB3G4",
  authDomain: "universe-c3a90.firebaseapp.com",
  databaseURL: "https://universe-c3a90-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "universe-c3a90",
  storageBucket: "universe-c3a90.firebasestorage.app",
  messagingSenderId: "677315970029",
  appId: "1:677315970029:web:97cba504ccc1ad04abdde4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;