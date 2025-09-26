// Array of songs
const songs = [
    {
        title: "Black swan",
        src: "Makaih Beats - Run.mp3"
    },
    {
        title: "Enchanted",
        src: "Inquiet - Rose Rose.mp3"
    },
    {
        title: "Wildest Dreams",
        src: "speedy ortiz - Taylor Swift.mp3"
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const songTitle = document.getElementById('song-title');

// Initialize the first song
function loadSong(songIndex) {
    songTitle.textContent = songs[songIndex].title;
    audioSource.src = songs[songIndex].src;
    audioPlayer.load();
}

// Play the song
function playSong() {
    audioPlayer.play();
}

// Pause the song
function pauseSong() {
    audioPlayer.pause();
}

// Play next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Play previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Event listeners
document.getElementById('play-btn').addEventListener('click', playSong);
document.getElementById('pause-btn').addEventListener('click', pauseSong);
document.getElementById('next-btn').addEventListener('click', nextSong);
document.getElementById('prev-btn').addEventListener('click', prevSong);

// Load the initial song
loadSong(currentSongIndex);
