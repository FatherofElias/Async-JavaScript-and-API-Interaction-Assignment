document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('timer-form');
    const timerDisplay = document.getElementById('timer-display');
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
            }
        }, 1000);
    }
});