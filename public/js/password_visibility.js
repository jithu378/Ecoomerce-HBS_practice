document.querySelectorAll(".visibility-checkbox").forEach((checkbox) => {
    const passwordField = checkbox.closest(".password-field");
    const passwordInput = passwordField.querySelector(".password-input");

    checkbox.addEventListener("change", () => {
        passwordInput.type = checkbox.checked ? "text" : "password";
    });
});

const loginStateKey = "shopeaseLoggedIn";
const isLoggedIn = localStorage.getItem(loginStateKey) === "true";
const homeAuthActions = document.querySelector("[data-home-auth]");

if (homeAuthActions) {
    homeAuthActions.hidden = isLoggedIn;
}

document.querySelectorAll("[data-logout]").forEach((logoutButton) => {
    logoutButton.hidden = !isLoggedIn;
    logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem(loginStateKey);
        window.location.href = "/products/";
    });
});

const loginForm = document.querySelector('form[action="/user/loginData"]');

if (loginForm) {
    loginForm.addEventListener("submit", () => {
        localStorage.setItem(loginStateKey, "true");
    });
}