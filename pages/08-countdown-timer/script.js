const launchDate = new Date("2027-12-31T00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const gap = launchDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = d.toString().padStart(2, "0");
    document.getElementById("hours").innerText = h.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = m.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = s.toString().padStart(2, "0");

    if (gap <= 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "<h2>We Are Live!</h2>";
    }
}, 1000);
