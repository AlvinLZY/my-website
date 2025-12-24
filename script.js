let player;
const btn = document.getElementById("playBtn");

function onYouTubeIframeAPIReady() {
  player = new YT.Player("bgm");
}

btn.addEventListener("click", () => {
  if (!player) return;
  player.playVideo();
  btn.innerText = "🎵 Playing";
  btn.disabled = true;
});

// Load YouTube API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);
