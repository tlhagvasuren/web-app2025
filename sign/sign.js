

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login form");
    const errorMessage = document.getElementById("errorMessage");

    const fakeUsers = [
        { username: "admin", password: "1234" },
        { username: "testuser", password: "password123" },
        { username: "guest", password: "guestpass" }
    ];

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        const userFound = fakeUsers.some(user => user.username === username && user.password === password);

        if (userFound) { 
            localStorage.setItem("loggedIn", "true");

            console.log("Login successful. Redirecting...");
            window.location.href = "../home/home1.html"; // Home page руу чиглүүлнэ

        } else {
            console.log("Login failed. Showing error message.");
            if (errorMessage) {
                errorMessage.style.display = "block";
            }
        }
    });
});




const containar=document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');
registerBtn.addEventListener('click' , () =>{
    containar.classList.add('active');

})
loginBtn.addEventListener('click' , () =>{
    containar.classList.remove('active');

})