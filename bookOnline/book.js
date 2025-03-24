document.addEventListener("DOMContentLoaded", function () {
    const bookedAppointments = {
        "2025-03-22": ["09:00", "10:30", "15:00"], 
        "2025-03-25": ["11:00", "13:30"]
    };

  
    flatpickr("#calendar", {
        dateFormat: "Y-m-d",
        minDate: "today",
        disable: Object.keys(bookedAppointments).filter(date => 
            bookedAppointments[date].length >= 6 
        ),
        onChange: function (selectedDates, dateStr) {
            updateTimeOptions(dateStr);
        }
    });
    function updateTimeOptions(selectedDate) {
        const timeSelect = document.getElementById("time");
        timeSelect.innerHTML = "";
    
        const workingHours = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
        const bookedTimes = bookedAppointments[selectedDate] || [];
    
        console.log(`Сонгосон өдөр: ${selectedDate}`);
    
        workingHours.forEach(time => {
            console.log(` Цаг: ${time} - Захиалагдсан уу? ${bookedTimes.includes(time)}`);
            if (!bookedTimes.includes(time)) { 
                const option = document.createElement("option");
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            }
        });
    
        if (timeSelect.options.length === 0) {
            const option = document.createElement("option");
            option.textContent = "Бүх цаг дүүрсэн";
            timeSelect.appendChild(option);
        }
    }
    
});
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
            answer.style.display = 'block';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".input-box input, .input-box select");
    const btn = document.querySelector(".btn");

    function checkFormFilled() {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });

 
        btn.disabled = !allFilled;
        btn.style.backgroundColor = allFilled ? "#088378" : "#ccc";
        btn.style.cursor = allFilled ? "pointer" : "not-allowed";
    }


    inputs.forEach(input => {
        input.addEventListener("input", checkFormFilled);
        input.addEventListener("change", checkFormFilled);
    });


    btn.addEventListener("click", function () {
        if (!btn.disabled) {
            btn.textContent = " Амжилттай захиалга үүслээ!";
            btn.disabled = true;
            btn.style.backgroundColor = "#ccc";
            btn.style.cursor = "not-allowed";
        }
    });

    checkFormFilled();
});
document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.querySelector("header .button");

    if (localStorage.getItem("loggedIn") === "true") {
        if (loginButton) {
            loginButton.textContent = "түүх";
            loginButton.href = "../history/history.html";

    
        }
    }
});
