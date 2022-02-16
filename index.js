const loginSection = document.querySelector(".login-section-overlay");
const signupSection = document.querySelector(".signup-section-overlay");
const signinSection = document.querySelector(".signin-section-overlay");

const closeFunc = (e) => {
    e.parentElement.style.display = "none";
}
const openLogin = () => {
    loginSection.style.display = "flex";
}
const openSignup = () => {
    loginSection.style.display = "none";
    signinSection.style.display = "none";
    signupSection.style.display = "flex";
}
const openSignin = () => {
    loginSection.style.display = "none";
    signupSection.style.display = "none";
    signinSection.style.display = "flex";
}
// let on = false;
// const openDropdown = (e) => {
//     on = !on;
//     e.nextElementSibling.style.display = on ? "flex" : "none";
// }