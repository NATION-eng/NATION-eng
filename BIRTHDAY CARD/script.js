const playButton = document.getElementById("playMusic");
const music = document.getElementById("music");

// Auto-play on load if supported
window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Auto-play blocked. User interaction required.");
  });
});

// Play or pause music on button click
playButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playButton.textContent = "Pause Music 🎶";
  } else {
    music.pause();
    playButton.textContent = "Play Surprise 🎶";
  }
});
