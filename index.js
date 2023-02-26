// Variables for Signup & Login Page
// For Show or Hide Password
const forms = document.querySelectorAll(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

// For Show or Hide Caps Icon
const inpPassword = document.querySelector(".password");
const capsShowHide = document.querySelectorAll(".caps-icon");

inpPassword.addEventListener("keyup", (e) => {
    const isCapsLockon = e.getModifierState("CapsLock");
    capsShowHide.forEach((icon) => {
        icon.style.display = isCapsLockon ? "block" : "none";
    });
});

// Input Validation
const email = document.querySelector(".email");
const form = document.querySelector(".login-signup");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = inpPassword.value.trim();

    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email");
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(inpPassword, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(inpPassword, "Password must be at least 8 characters");
    } else {
        setSuccess(inpPassword);
    }
};


