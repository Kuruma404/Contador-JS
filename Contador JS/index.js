const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let coinSFX = new Audio();
let coinREVERSE = new Audio();
let resetSFX = new Audio();
coinREVERSE.src = "Audios/CoinSFX-REVERSE.mp3";
coinSFX.src = "Audios/CoinSFX.mp3";
resetSFX.src = "Audios/RESET.MP3";

let count = 0;

// Audios

function coinSfxAudio(){
    var clone = coinSFX.cloneNode();
    clone.play();
}

function coinRevAudio(){
    var clone = coinREVERSE.cloneNode();
    clone.play();
}

function resetAudio(){
    var clone = resetSFX.cloneNode();
    clone.play();
}

// Botões

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    coinSfxAudio();
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    coinRevAudio();
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    resetAudio();
}

