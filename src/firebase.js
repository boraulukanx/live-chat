import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiYpJKoVtIIMfbkjEPrzBmQmhThY2DkSk",
  authDomain: "chat-around-app-6e901.firebaseapp.com",
  projectId: "chat-around-app-6e901",
  storageBucket: "chat-around-app-6e901.appspot.com",
  messagingSenderId: "573358523000",
  appId: "1:573358523000:web:2d94d05ce3ce51c990238d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

