var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");

var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var maxdisplay = document.querySelector("#maxdisplay");

var maxinput = document.querySelector("input")

var p1score = 0;
var p2score = 0;
var maxscore = maxdisplay.textContent;

var resetButton = document.getElementById("reset");



p1Button.addEventListener("click", function () {
    p1score++;
    if ((p1score <= maxscore) && (p2score <= maxscore)) {

        p1display.textContent = p1score;
    } else {
        p1display.classList.add("winner")
    }
})

p2Button.addEventListener("click", function () {
    p2score++;
    if ((p1score <= maxscore) && (p2score <= maxscore)) {

        p2display.textContent = p2score;
    } else {
        p2display.classList.add("winner")
    }
})

resetButton.addEventListener("click", reset)

maxinput.addEventListener("change", function () {
    maxdisplay.textContent = Number(maxinput.value);
    maxscore = maxdisplay.textContent
    reset()
})

function reset() {
    p1score = 0;
    p2score = 0;
    p2display.textContent = p2score;
    p1display.textContent = p1score;
    p1display.classList.remove("winner")
    p2display.classList.remove("winner")
}