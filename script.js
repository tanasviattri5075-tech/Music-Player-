const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector("img"),
musicName = wrapper.querySelector(".name"),
musicArtist = wrapper.querySelector(".artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
progressSlider = document.querySelector("#progress-slider");

let musicIndex = 1;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb-1].name;
    musicArtist.innerText = allMusic[indexNumb-1].artist;

    musicImg.src = "images/" + allMusic[indexNumb-1].img + ".jpg";
    mainAudio.src = "songs/" + allMusic[indexNumb-1].src + ".mp3";
}

function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("button").innerText = "pause";
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("button").innerText = "play_arrow";
    mainAudio.pause();
}

playPauseBtn.addEventListener("click", () => {
    wrapper.classList.contains("paused") ? pauseMusic() : playMusic();
});

nextBtn.addEventListener("click", () => {
    musicIndex++;
    if(musicIndex > allMusic.length) musicIndex = 1;
    loadMusic(musicIndex);
    playMusic();
});

prevBtn.addEventListener("click", () => {
    musicIndex--;
    if(musicIndex < 1) musicIndex = allMusic.length;
    loadMusic(musicIndex);
    playMusic();
});

mainAudio.addEventListener("timeupdate", () => {
    progressSlider.max = mainAudio.duration;
    progressSlider.value = mainAudio.currentTime;
});

progressSlider.addEventListener("input", () => {
    mainAudio.currentTime = progressSlider.value;
});
