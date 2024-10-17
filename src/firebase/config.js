// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBx4KrEHLX2Div8JkfJqNIHSxD7XZQ-Vvg",
  authDomain: "moviebokingapp-8cc5a.firebaseapp.com",
  projectId: "moviebokingapp-8cc5a",
  storageBucket: "moviebokingapp-8cc5a.appspot.com",
  messagingSenderId: "627440074275",
  appId: "1:627440074275:web:9c75b953ed73d2a5813b96",
  measurementId: "G-RTD49HQRBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export const db = getFirestore(app);
export const imageDB=getStorage(app);