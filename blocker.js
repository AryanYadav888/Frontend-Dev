const form = document.getElementById("userForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passField = document.getElementById("password");

const successMsg = document.getElementById("successMsg");

function showError(input, message) {
    const errorTag = input.nextElementSibling;
    errorTag.textContent = message;
    input.style.borderColor = "red";
}

function clearError(input) {
    const errorTag = input.nextElementSibling;
    errorTag.textContent = "";
    input.style.borderColor = "#999";
}

function validateForm(e) {
    let isValid = true;
    successMsg.textContent = ""; // clear previous message

    // Name validation
    if (nameField.value.trim() === "") {
        showError(nameField, "Name is required");
        isValid = false;
    } else {
        clearError(nameField);
    }

    // Email validation
    if (emailField.value.trim() === "") {
        showError(emailField, "Email is required");
        isValid = false;
    } 
    else if (!emailField.value.includes("@")) {
        showError(emailField, "Email must contain @");
        isValid = false;
    } 
    else {
        clearError(emailField);
    }

    // Password validation
    if (passField.value.length < 6) {
        showError(passField, "Password must be at least 6 characters");
        isValid = false;
    } else {
        clearError(passField);
    }

    // If invalid → prevent form submission
    if (!isValid) e.preventDefault();
    else {
        e.preventDefault(); // remove this if you want real submission
        successMsg.textContent = "Form Submitted Successfully";
        successMsg.classList.add("success");
    }
}

// Form submit event
form.addEventListener("submit", validateForm);

// Live validation (auto remove errors)
[nameField, emailField, passField].forEach(input => {
    input.addEventListener("input", () => clearError(input));
});
