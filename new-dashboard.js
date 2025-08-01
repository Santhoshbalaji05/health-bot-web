const userDetails = JSON.parse(localStorage.getItem("userDetails"));
document.getElementById("userName").textContent = userDetails?.fullName || "User";

// Modal open
document.getElementById("openEditModalBtn").onclick = () => {
  document.getElementById("fullName").value = userDetails.fullName;
  document.getElementById("age").value = userDetails.age;
  document.getElementById("dob").value = userDetails.dob;
  document.getElementById("gender").value = userDetails.gender;
  document.getElementById("height").value = userDetails.height;
  document.getElementById("weight").value = userDetails.weight;
  document.getElementById("location").value = userDetails.location;
  document.getElementById("profileModal").style.display = "flex";
};
document.getElementById("closeModal").onclick = () => {
  document.getElementById("profileModal").style.display = "none";
};

// Save details
document.getElementById("editProfileForm").onsubmit = (e) => {
  e.preventDefault();
  const updatedDetails = {
    fullName: document.getElementById("fullName").value,
    age: document.getElementById("age").value,
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    location: document.getElementById("location").value
  };
  localStorage.setItem("userDetails", JSON.stringify(updatedDetails));
  document.getElementById("profileModal").style.display = "none";
  location.reload();
};

// About Us redirect
document.querySelector(".about-link").addEventListener("click", () => {
  window.location.href = "about.html";
});
