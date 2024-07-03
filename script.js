





function updateTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();

    // Set the value of the textbox with id "current-time"
    document.getElementById('current-time').value = time;

    // Call requestAnimationFrame again to keep the time updated
    requestAnimationFrame(updateTime);
}

// Start the time updates
window.onload = function() {
    updateTime();
};






