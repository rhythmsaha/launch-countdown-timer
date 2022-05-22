const countDownDate = new Date().getTime() + 11 * 24 * 60 * 60 * 1000;
const updateInterval = setInterval(() => {
    // Get today's date and time
    const currentTime = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - currentTime;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(updateInterval);
    }
}, 1000);
