function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            return db.collection("users").doc(userCredential.user.uid).set({
                email: email,
                role: role
            });
        })
        .then(() => {
            alert("Registered Successfully");
        })
        .catch(error => alert(error.message));
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}