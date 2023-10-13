const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorSpan = document.querySelector("#wrong-pass");
const submitButton = document.querySelector("button");

let checkPassword = () => {
    if (password.value !== confirmPassword.value) {
        errorSpan.textContent = "Passwords do not match";
        submitButton.disabled = true;
    }
    else {
        errorSpan.textContent = "";
        submitButton.disabled = false;
    }
}

confirmPassword.addEventListener("input", checkPassword);
password.addEventListener("input", checkPassword)