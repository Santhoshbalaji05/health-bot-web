// Check login data
const username = localStorage.getItem("username");
const email = localStorage.getItem("email");

if (!username || !email) {
    // If user is not logged in, go to home page
    window.location.href = "index.html";
} else {
    document.getElementById("welcomeName").textContent = username;
    document.getElementById("emailDisplay").textContent = `Email: ${email}`;
    document.getElementById("profileName").textContent = username;
}

// ---------- LOGOUT ----------
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    alert("Logged out successfully!");
    window.location.href = "index.html";
});

// ---------- PROFILE PICTURE UPLOAD ----------
const fileInput = document.getElementById("fileInput");
const profilePic = document.getElementById("profilePic");
const changePicBtn = document.getElementById("changePicBtn");

// When clicking "Change Pic" button
changePicBtn.addEventListener("click", () => fileInput.click());

// When user selects a picture
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePic.src = e.target.result;
            localStorage.setItem("profilePic", e.target.result); // Save image
        };
        reader.readAsDataURL(file);
    }
});

// Load saved profile picture (if exists)
const savedPic = localStorage.getItem("profilePic");
if (savedPic) profilePic.src = savedPic;

// ---------- USER DETAILS FORM ----------
const form = document.getElementById("userDetailsForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const details = {
        fullName: document.getElementById("fullName").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        location: document.getElementById("location").value
    };
    localStorage.setItem("userDetails", JSON.stringify(details));
    alert("Details saved successfully!");
});

// Load saved details if any
const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
if (savedDetails) {
    document.getElementById("fullName").value = savedDetails.fullName;
    document.getElementById("age").value = savedDetails.age;
    document.getElementById("dob").value = savedDetails.dob;
    document.getElementById("gender").value = savedDetails.gender;
    document.getElementById("height").value = savedDetails.height;
    document.getElementById("weight").value = savedDetails.weight;
    document.getElementById("location").value = savedDetails.location;
}
document.getElementById("userDetailsForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const userDetails = {
        fullName: document.getElementById("fullName").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        location: document.getElementById("location").value
    };

    // Save data in browser localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Redirect to the new dashboard
    window.location.href = "new-dashboard.html";
});
