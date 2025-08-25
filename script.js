// Store active timer
var activeTimer = null;

function normal_mode_clock() {
    // Get current date
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // Check time formats
    if (String(second).length == 1) {
        second = `0${second}`;
    }
    if (String(minute).length == 1) {
        minute = `0${minute}`;
    }
    if (String(hour).length == 1) {
        hour = `0${hour}`;
    }
    var time_format = `${hour}:${minute}:${second}`;
    document.getElementById("clock-display").textContent = time_format;
}

function am_pm_mode_clock() {
    // Get current date
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // Check time formats
    if (String(second).length == 1) {
        second = `0${second}`;
    }
    if (String(minute).length == 1) {
        minute = `0${minute}`;
    }
    var suffix = "AM";
    if (hour > 12) {
        hour -= 12;
        suffix = "PM";
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    var time_format = `${hour}:${minute}:${second}`;
    document.getElementById("clock-display").textContent = time_format;
}

function show_date() {
    // Show current date
    var months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    };
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    // Date format
    // Show month name
    var date_format = `${day} ${months[month + 1]} ${year}`;
    document.getElementById("date-display").textContent = date_format;
}

function startNormalMode() {
    // If previous mode is active, stop it
    if (activeTimer) {
        clearInterval(activeTimer);
    }
    // Start new mode
    activeTimer = setInterval(normal_mode_clock, 1000);
    normal_mode_clock(); // Immediate display
    show_date();
    console.log("Switched to Normal Mode");
}

function startAmPmMode() {
    // If previous mode is active, stop it
    if (activeTimer) {
        clearInterval(activeTimer);
    }
    // Start new mode
    activeTimer = setInterval(am_pm_mode_clock, 1000);
    am_pm_mode_clock(); // Immediate display
    show_date();
    console.log("Switched to AM/PM Mode");
}
