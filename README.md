# 🎓 Smart Edu ID – Digital Student ID Web Application

Smart Edu ID is a web-based Digital Identity Management System developed for hackathon purposes.  
The application allows students and teachers to register digitally and validates user data before generating digital identity information.

This project demonstrates proper GitHub workflow using branches, pull requests, and structured commit phases.

---

## 📌 Problem Statement

Educational institutions still rely heavily on physical ID cards and manual data management systems.  
There is a need for a simple, accessible, and digital solution where students and teachers can:

- Register online
- Validate their information
- Maintain digital identity records
- Reduce paperwork
- Improve accessibility

Smart Edu ID aims to solve this by providing a structured web-based system.

---

## 🚀 Features

### 👨‍🎓 Student Module
- Student Registration Form
- Required field validation
- Date of Birth validation
- Age verification (Minimum 15 years)
- Input validation alerts

### 👩‍🏫 Teacher Module
- Teacher Registration Form
- Required field validation
- Structured form submission

### 🌐 General Features
- Clean and responsive UI
- JavaScript-based validation
- Organized folder structure
- GitHub collaboration workflow
- Phase-based development tracking

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML5 | Page Structure |
| CSS3 | Styling and Layout |
| JavaScript | Form Validation & Logic |
| Git & GitHub | Version Control & Collaboration |
| Firebase (if used) | Database / Backend Integration |

---
smart-edu-id/
│
├── index.html # Main landing page
├── student.html # Student registration page
├── teacher.html # Teacher registration page
├── style.css # Styling file
├── script.js # Form validation logic
├── firebase.js # Firebase configuration (if integrated)
└── README.md # Project documentation


---

## 🔎 Validation Logic Example

Below is the age validation logic implemented in the project:

```javascript
// Age validation: must be 15 or older
/*const dobDate = new Date(dob);
const today = new Date();
let age = today.getFullYear() - dobDate.getFullYear();
const monthDiff = today.getMonth() - dobDate.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--;
}

if (age < 15) {
    alert("Registration allowed only for students aged 15 or above.");
    return;
}
*/

Git Workflow
## 📂 Project Structure

Phase 1 – Project Setup
Folder structure creation
Base HTML files
Initial styling
Git repository setup

Phase 2 – Form Implementation
Student form creation
Teacher form creation
Basic input validation
Navigation linking

Phase 3 – Advanced Validation
Age validation logi
Required field checks
Alert handling
UI improvements

Phase 4 – Finalization & Testing
Bug fixes
Code optimization
Pull request merging
Final documentation
