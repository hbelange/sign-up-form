const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorSpan = document.querySelector("#wrong-pass");
const submitButton = document.querySelector("button");

let checkPassword = () => {
    if (password.value !== confirmPassword.value) {
        errorSpan.textContent = "Passwords do not match";
        submitButton.disabled = true;
        password.classList.remove("match");
        confirmPassword.classList.remove("match");
        password.classList.add("passError");
        confirmPassword.classList.add("passError");
    }
    else {
        errorSpan.textContent = "";
        submitButton.disabled = false;
        password.classList.remove("passError");
        password.classList.add("match");
        confirmPassword.classList.remove("passError");
        confirmPassword.classList.add("match");
    }
}

confirmPassword.addEventListener("input", checkPassword);
password.addEventListener("input", checkPassword)