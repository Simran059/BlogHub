import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAwrDQaOFledJYUNVWZL6jRaqq8KMcTEYs",
  authDomain: "blogapp-ce81d.firebaseapp.com",
  projectId: "blogapp-ce81d",
  storageBucket: "blogapp-ce81d.appspot.com",
  messagingSenderId: "357830106693",
  appId: "1:357830106693:web:799fece32219ba22438d2c"
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };