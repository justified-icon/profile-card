function updateDateTime() {
    const now = new Date();
    
    // Get the date
    // const date = now.toLocaleDateString();
    // document.getElementById('current-date').innerHTML = "Current Day of the Week: " + date;
    
    // Get the time
    const time = now.toLocaleTimeString();
    document.getElementById('current-time').innerHTML = "Current Time: " + time;
}

// The date and time Update
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);