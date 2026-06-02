function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const formatted = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    document.getElementById("clock").textContent = formatted;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(updateClock, 1000);
updateClock(); // run immediately