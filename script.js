const music = document.getElementById("music");
music.volume = 0.4;
music.loop = true;

function startMusic() {
    music.play().then(function () {
        removeListeners();
    }).catch(function () {});
}

function removeListeners() {
    ["click", "keydown", "touchstart", "pointerdown", "scroll"].forEach(function (evt) {
        document.removeEventListener(evt, startMusic);
    });
}

startMusic();

["click", "keydown", "touchstart", "pointerdown", "scroll"].forEach(function (evt) {
    document.addEventListener(evt, startMusic);
});
