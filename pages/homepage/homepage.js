const loginSection = document.querySelector(".login-section-overlay");

const closeFunc = (e) => {
    e.parentElement.style.display = "none";
    console.log("clicked")
}
const openLogin=()=>{
    loginSection.style.display="flex";
    console.log("click")
}