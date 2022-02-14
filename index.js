const loginSection = document.querySelector(".login-section-overlay");
const signupSection = document.querySelector(".signup-section-overlay");

const closeFunc = (e) => {
    e.parentElement.style.display = "none";
    console.log("clicked")
}
const openLogin = () => {
    loginSection.style.display = "flex";
    console.log("click")
}
const openSignup = () => {
    loginSection.style.display = "none";
    signupSection.style.display = "flex";
    console.log("click")
}
let on = false;
const openDropdown = (e) => {
    on = !on;
    e.nextElementSibling.style.display = on ? "flex" : "none";
}