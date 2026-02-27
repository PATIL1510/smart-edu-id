function login() {
    const role = document.getElementById("role").value;

    if (role === "student") {
        window.location.href = "student.html";
    } else {
        window.location.href = "teacher.html";
    }
}

function register() {
    alert("Register functionality will be connected with Firebase next.");
}

function logout() {
    window.location.href = "index.html";
}

function checkLocation() {
    alert("Location logic will be implemented next.");
}

function createSession() {
    initMap(latitude, longitude, Number(radius));
    listenToStudents(latitude, longitude, Number(radius));
    alert("Session creation logic will be implemented next.");
}

function generateQR() {
    alert("QR generation logic will be implemented next.");
}

function scanQR() {
    alert("QR scanning logic will be implemented next.");
}
