document.addEventListener("DOMContentLoaded", function () {
    // 📌 Дүүрсэн цагууд
    const bookedAppointments = {
        "2025-03-22": ["09:00", "10:30", "15:00"], 
        "2025-03-25": ["11:00", "13:30"]
    };

    // 📌 Flatpickr тохируулах (Зөвхөн өдрийг хаана)
    flatpickr("#calendar", {
        dateFormat: "Y-m-d",
        minDate: "today",
        disable: Object.keys(bookedAppointments).filter(date => 
            bookedAppointments[date].length >= 6 // 6 цаг захиалагдсан үед бүхэл өдрийг хаана
        ),
        onChange: function (selectedDates, dateStr) {
            updateTimeOptions(dateStr);
        }
    });
    function updateTimeOptions(selectedDate) {
        const timeSelect = document.getElementById("time");
        timeSelect.innerHTML = ""; // Сонголтуудыг цэвэрлэх
    
        const workingHours = ["09:00", "10:30", "11:00", "13:30", "15:00", "16:30"];
        const bookedTimes = bookedAppointments[selectedDate] || [];
    
        console.log(`🟢 Сонгосон өдөр: ${selectedDate}`); // 🔍 Debug хийх
    
        workingHours.forEach(time => {
            console.log(`⏰ Цаг: ${time} - Захиалагдсан уу? ${bookedTimes.includes(time)}`);
            if (!bookedTimes.includes(time)) { // Дүүрээгүй цагийг нэмэх
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
