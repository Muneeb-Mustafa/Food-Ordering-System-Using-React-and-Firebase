 import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfhuCPUJCDGJ7I-7mAJ_WxbbwnCOmoDwk",
  authDomain: "ecommerce-8f8fb.firebaseapp.com",
  projectId: "ecommerce-8f8fb",
  storageBucket: "ecommerce-8f8fb.appspot.com",
  messagingSenderId: "147023681432",
  appId: "1:147023681432:web:42eeaa63a76c800559bded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const storage = getStorage(app);

 
export {
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  ref,
  uploadBytes,
  uploadBytesResumable
};