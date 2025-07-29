const signupTab = document.getElementById("signupTab");
const loginTab = document.getElementById("loginTab");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupTab.addEventListener("click", () => {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
});

loginTab.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
});

// Save signup details
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("username", document.getElementById("signupUsername").value);
    localStorage.setItem("email", document.getElementById("signupEmail").value);
    localStorage.setItem("password", document.getElementById("signupPassword").value);
    alert("Signup successful!");
    signupForm.reset();
});

// Check login details
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
        alert("Login successful! Welcome " + localStorage.getItem("username"));
        window.location.href = "dashboard.html";  // We will add this page next
    } else {
        alert("Invalid email or password!");
    }
});
