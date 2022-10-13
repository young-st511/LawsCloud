import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApTkZhyPpTI6e9x4NfHQR5ycd2x9zjfC0",
  authDomain: "lawscloud.firebaseapp.com",
  projectId: "lawscloud",
  storageBucket: "lawscloud.appspot.com",
  messagingSenderId: "169022801958",
  appId: "1:169022801958:web:8fda3f99c35c1a568cbee7",
};

const app = initializeApp(firebaseConfig);

export const firebaseInstance = app;
export const authService = getAuth();
export const dbService = getFirestore();
