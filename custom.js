const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

// Toggle dropdown menu
btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent auto-close when clicking button
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Option click
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", (e) => {
        btn.textContent = e.target.textContent;  // update button text
        menu.style.display = "none";             // close after select
    });
});

// Clicking outside → closes dropdown (CAPTURING PHASE)
document.addEventListener("click", () => {
    menu.style.display = "none";
}, true);  // TRUE = capturing phase
