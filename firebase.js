// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAn4QIOCSnCF_-Tm27PTpO_FVhrFOTasio",
    authDomain: "smarteduid-caeeb.firebaseapp.com",
    projectId: "smarteduid-caeeb",
    storageBucket: "smarteduid-caeeb.firebasestorage.app",
    messagingSenderId: "39611174945",
    appId: "1:39611174945:web:a601c455d02d54e0ca1360"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);