// Assignment 2 Task 1
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('timer-form');
    const timerDisplay = document.getElementById('timer-display');
    const notificationDelay = 5000; 
    let intervalId;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const duration = parseInt(document.getElementById('duration').value, 10);

        if (isNaN(duration) || duration <= 0) {
            alert('Please enter a valid positive number.');
            return;
        }

        clearInterval(intervalId); 
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
                displayNotification(notificationDelay);
            }
        }, 1000);
    }
// Task 2
    function displayNotification(delay) {
        setTimeout(() => {
            alert('This is your delayed notification!');
        }, delay);
    }
});