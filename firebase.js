// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkfmna16tf-rahGWdP7SQ3LPDjKU_Vayw",
    authDomain: "smarteduid-2ebe6.firebaseapp.com",
    projectId: "smarteduid-2ebe6",
    storageBucket: "smarteduid-2ebe6.firebasestorage.app",
    messagingSenderId: "390173400544",
    appId: "1:390173400544:web:aa7add5e60a4e2d7181f85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
