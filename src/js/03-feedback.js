import throttle from "lodash.throttle";
const form = document.querySelector("form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const KEY = "feedback-form-state";
form.addEventListener("input", throttle(handleInput, 500));
form.addEventListener("submit", handleSubmit);

function handleInput() {
    const feedback = { email: email.value, message: message.value };
    localStorage.setItem(KEY, JSON.stringify(feedback));
}

function handleSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
}

const savedInfo = JSON.parse(localStorage.getItem(KEY));

if (savedInfo) {
    email.value = savedInfo.email;
    message.value = savedInfo.message;
} else {
    email.value = "";
    message.value = "";
}
