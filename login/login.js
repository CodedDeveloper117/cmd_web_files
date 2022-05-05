const passwordTextField = document.getElementById("password_section")
const emailTextField = document.getElementById("email_section")
const linkSection = document.querySelector(".link_section")
const form = document.querySelector("form")

registerPasswordVisiblityToggle()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validate(e)
})

function registerPasswordVisiblityToggle() {
    const toggleIcon = document.querySelector(".toggle_icon");
    const password = document.querySelector("#password");

    toggleIcon.addEventListener("click", function () {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        const icon = type == 'password' ? 'show' : 'hide'
        const passwordToggleIcon = `<img src='./assets/password_${icon}.svg' />`
        toggleIcon.innerHTML = ''
        toggleIcon.innerHTML = passwordToggleIcon
    });
}

function validate(e) {
    const emailInput = e.target[0].value;
    const passwordInput = e.target[1].value;
    showError("Password not valid")
    setTimeout(() => {
        removeError()
    }, 2000)
}

function createElement(tag, classname = '', content = '') {
    const element = document.createElement(tag);
    element.classList.add(classname);
    element.innerHTML = content;
    return element;
}

function showError(error) {
    const element = document.querySelector('.error_text')
    element.textContent = error;
}

function removeError() {
    const element = document.querySelector('.error_text');
    element.textContent = ""
}