import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5qR9grqhQsSxW9OhcEi-mi1YuzjC0adI",
  authDomain: "netflix-clone-11a18.firebaseapp.com",
  projectId: "netflix-clone-11a18",
  storageBucket: "netflix-clone-11a18.appspot.com",
  messagingSenderId: "572583216607",
  appId: "1:572583216607:web:2b716e3b0751e0c553f06a",
  measurementId: "G-KL5SNWQ6B7",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
