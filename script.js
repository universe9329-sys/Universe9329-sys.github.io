javascript
// Countdown Timer to next rocket launch (example date)
var launchDate = new Date("Sep 10, 2025 14:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = launchDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Launched!";
    }
}, 1000);
console.log("Welcome to Space With Raja 🚀");
