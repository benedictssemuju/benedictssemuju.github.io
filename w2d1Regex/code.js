"use strict";
window.onload = function () {
    document.getElementById("submit-button").addEventListener("click", (event) => {
        event.preventDefault();
        const passwordField = document.getElementById("password");
        const urlField = document.getElementById("url");
        if (isValidPassword(passwordField.value)) {
            passwordField.classList.add("is-valid");
            passwordField.classList.remove("is-invalid");
            addFeedback(passwordField, true, "Password Looks Good");
        } else {
            passwordField.classList.remove("is-valid");
            passwordField.classList.add("is-invalid");
            addFeedback(passwordField, false, "Password must be at least 10 characters and must contain"
                + "at least one uppercase letter, one lowercase letter and one number");
        }

        if (isValidUrl(urlField.value)) {
            urlField.classList.add("is-valid");
            urlField.classList.remove("is-invalid");
            addFeedback(urlField, true, "URL Looks Good");
        } else {
            urlField.classList.remove("is-valid");
            urlField.classList.add("is-invalid");
            addFeedback(urlField, false, "URL must begin with 'http://' or 'https://'");
        }
    });

    const addFeedback = (element, isValid, message) => {
        const elementClass = "my-feedback-" + element.id;
        [...document.getElementsByClassName(elementClass)].map(n => n && n.remove());
        let div = document.createElement('div');
        if (isValid) {
            div.classList.add('my-valid-feedback', elementClass);
        } else {
            div.classList.add('my-invalid-feedback', elementClass);
        }
        let text = document.createTextNode(message);
        div.appendChild(text);
        element.parentNode.appendChild(div)
    }
}
const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/.test(password);
const isValidUrl = (url) => /http(s)?:\/\/.*/.test(url);