let mole = document.getElementById("mole");
let settings = document.getElementById("settings-div");
let score = 0;
let time = 20;
let isSettings = false;
let sizeSlider = document.getElementById("size");
let timeSlider = document.getElementById("time");
let timeDisplay = document.getElementById("timeValue");
let starterTime = 20;


let settingsBtn = document.getElementById("settings-btn");
let settingsDiv = document.getElementById("settings-div");

const scoreDisplay = document.getElementById("score");

setInterval(function(){
    time--;
    if(time < 1)
    {
        alert(`Game over. Score: ${score}`);
        time = starterTime;
        score = 0;
    }
    ChangeScoreAndTime();
}, 1000)

function moleClick()
{
    score++;
    ChangeScoreAndTime();
    changeMolePos();
}

function changeMolePos()
{
    let randomTop =Math.random() * 470;
    let randomLeft =(Math.random() * 1500) ;

    mole.style.top = randomTop + "px";
    mole.style.left = randomLeft + "px";
}

function ChangeScoreAndTime()
{
    scoreDisplay.innerHTML  = `Aim game<br> Score ${score} <br> Time: ${time}`;
}

function settingsClick()
{
   isSettings = !isSettings;
    if (isSettings) {
        settingsDiv.classList.add("show");
    } else {
        settingsDiv.classList.remove("show");
    }
}

function sizeChange()
{
    mole.style.height = sizeSlider.value + "px";
    mole.style.width = sizeSlider.value + "px";
}

function timeChange()
{
    starterTime = timeSlider.value;
     timeDisplay.textContent = timeSlider.value;
}