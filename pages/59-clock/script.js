function updateClock() {
    const now = new Date();

    // Analog clock
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = (hours * 30) + (minutes * 0.5);
    const minuteDegrees = minutes * 6;
    const secondDegrees = seconds * 6;

    document.querySelector('.hourHand').style.transform = `rotate(${hourDegrees}deg)`;
    document.querySelector('.minuteHand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.secondHand').style.transform = `rotate(${secondDegrees}deg)`;

    // Digital clock
    const timeString = now.toLocaleTimeString('en-GB');
    const dateString = now.toLocaleDateString();

    document.querySelector('.time-display').textContent = timeString;
    document.querySelector('.date-display').textContent = dateString;

    //tick sound
    const tickSound = document.getElementById("tickSound");

    tickSound.currentTime = 0; // Rewind to start
    tickSound.play();
}

updateClock();
setInterval(updateClock, 1000);
