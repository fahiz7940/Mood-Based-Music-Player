const moodButtons = document.querySelectorAll(".mood-buttons button");
const moodTitle = document.getElementById("mood-title");
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const body = document.body;


const moods = {
  happy: {
    title: "Feeling Happy 😊",
    color: "linear-gradient(to right, #fceabb, #f8b500)",
    music: "asset/happy-mood.mp3"
  },
  sad: {
    title: "Feeling Sad 😢",
    color: "linear-gradient(to right, #4b6cb7, #182848)",
    music: "asset/sad-mood.mp3"
  },
  chill: {
    title: "Just Chillin' 😌",
    color: "linear-gradient(to right, #43cea2, #185a9d)",
    music: "asset/chill-mood.mp3"
  },
  energetic: {
    title: "Let’s Go! ⚡",
    color: "linear-gradient(to right, #ff512f, #dd2476)",
    music: "asset/hyp-mood.mp3"
  }
};

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    const moodData = moods[mood];


    moodTitle.textContent = moodData.title;

    body.style.background = moodData.color;

    audioSource.src = moodData.music;
    audioPlayer.load();
    audioPlayer.play();
  });
});
