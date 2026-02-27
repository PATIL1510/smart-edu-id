import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

window.register = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", userCredential.user.uid), {
            email: email,
            role: role
        });

        alert("Registered successfully!");
    } catch (error) {
        alert(error.message);
    }
};

window.login = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        // Get role from Firestore
        const userDoc = await fetchUserRole(user.uid);

        if (userDoc.role === "teacher") {
            window.location.href = "teacher.html";
        } else {
            window.location.href = "student.html";
        }

    } catch (error) {
        alert(error.message);
    }
};

async function fetchUserRole(uid) {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${auth.app.options.projectId}/databases/(default)/documents/users/${uid}`);
    const data = await response.json();

    return {
        role: data.fields.role.stringValue
    };
}