// ----- Prefill form with previously saved data -----
document.addEventListener("DOMContentLoaded", () => {
    const lastConsult = JSON.parse(localStorage.getItem("lastConsult"));

    if (lastConsult) {
        document.getElementById("problem").value = lastConsult.problem || "";
        document.getElementById("symptoms").value = lastConsult.symptoms || "";
        document.getElementById("duration").value = lastConsult.duration || "";
        document.getElementById("severity").value = lastConsult.severity || "Mild";
        document.getElementById("age").value = lastConsult.age || "";
        document.getElementById("gender").value = lastConsult.gender || "Male";
    }
});

// ----- Form submit event -----
document.getElementById("consultForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const consultData = {
        problem: document.getElementById("problem").value,
        symptoms: document.getElementById("symptoms").value,
        duration: document.getElementById("duration").value,
        severity: document.getElementById("severity").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        date: new Date().toLocaleString()
    };

    // Save latest data for prefill
    localStorage.setItem("lastConsult", JSON.stringify(consultData));

    // Add entry to history
    let history = JSON.parse(localStorage.getItem("consultHistory")) || [];
    history.push(consultData);
    localStorage.setItem("consultHistory", JSON.stringify(history));

    alert("Consultation data saved successfully!");
});
