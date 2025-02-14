import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const firebaseInstance = app;
export const authService = getAuth();
export const dbService = getFirestore();
export const firebasedatabase = getDatabase(app);
