// Assignment 2 Task 1
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('timer-form');
    const timerDisplay = document.getElementById('timer-display');
    let intervalId;
    let notificationId;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const duration = parseInt(document.getElementById('duration').value, 10);

        if (isNaN(duration) || duration <= 0) {
            alert('Please enter a valid positive number.');
            return;
        }

        clearInterval(intervalId); // Clear any existing interval
        clearInterval(notificationId); // Clear any existing notification interval
        startCountdown(duration);
    });

    function startCountdown(duration) {
        let timeLeft = duration;
        timerDisplay.textContent = timeLeft;

        intervalId = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(intervalId);
                alert('Time is up!');
                displayNotification(5000); // Display a delayed notification after 5 seconds
                startRepeatNotification(3000); // Start repeated notifications every 3 seconds
            }
        }, 1000);
    }
// Task 2
    function displayNotification(delay) {
        setTimeout(() => {
            alert('This is your delayed notification!');
        }, delay);
    }
// Task 3
    function startRepeatNotification(interval) {
        notificationId = setInterval(() => {
            if (confirm('This is your repeated notification. Click "OK" to dismiss.')) {
                clearInterval(notificationId);
            }
        }, interval);
    }
});