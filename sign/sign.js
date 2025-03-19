document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("header .button");

    if (localStorage.getItem("loggedIn") === "true") {
        loginButton.textContent = "Миний түүхүүд";
        loginButton.href = "../history/history.html"; 
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-right form");
    const errorMessage = document.getElementById("errorMessage");

    // Хуурамч хэрэглэгчдийн жагсаалт
    const fakeUsers = [
        { username: "admin", password: "1234" },
        { username: "testuser", password: "password123" },
        { username: "guest", password: "guestpass" }
    ];

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Хуудсыг дахин ачаалхаас сэргийлэх

        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        // Хэрэглэгчийн мэдээллийг шалгах
        const userFound = fakeUsers.some(user => user.username === username && user.password === password);

        if (userFound) { 
            localStorage.setItem("loggedIn", "true");
            window.location.href = "../home/home.html"; // Нэвтэрсний дараа шилжих хуудас
        } else {
            errorMessage.style.display = "block"; // Алдааны мессежийг харуулах
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



