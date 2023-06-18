let isPlaying = false;
const music = document.querySelector("audio");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const progress_div = document.getElementById('progress_div')

let progress = document.getElementById('progress');
let current_time = document.getElementById('current_time');
let total_duration = document.getElementById('duration');
let speaker1 = document.getElementById('speaker1')
let speaker2 = document.getElementById('speaker2')
let cone1 = document.getElementById('cone1')
let cone2 = document.getElementById('cone2')
let cone3 = document.getElementById('cone3')
let cone4 = document.getElementById('cone4')
let sound1 = document.getElementById('sound1')
let sound2 = document.getElementById('sound2')
let sound3 = document.getElementById('sound3')
let sound4 = document.getElementById('sound4')


const songs = [
{
    name: "1kishorkumar",
    title: "mere sapano ki rani",
    artist: "Kishor Kumar",
},
{
    name: "2aashabhosale",
    title: "Gun guna rahe hai",
    artist: "Aasha Bhosale",
},

{
    name: "3latamangeshkar",
    title: "aapki nazron ne",
    artist: "Lata Mangeshkar",
},
{
    name: "4mohammdrafi",
    title: "Patthar ke sanam",
    artist: "Mohammad Rafi",
},
{
    name: "5mukesh",
    title: "main pal do pal",
    artist: "Mukesh",
}
];


// or we car use ternary operator
play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});


const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
    speaker1.classList.add("motion");
    speaker2.classList.add("motion");
    cone1.classList.add("motion1");
    cone2.classList.add("motion1");
    cone3.classList.add("motion1");
    cone4.classList.add("motion1");
    sound1.classList.add("motion2");
    sound2.classList.add("motion2");
    sound3.classList.add("motion2");
    sound4.classList.add("motion2");

}
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    speaker1.classList.remove("motion");
    speaker2.classList.remove("motion");
    cone1.classList.remove("motion1");
    cone2.classList.remove("motion1");
    cone3.classList.remove("motion1");
    cone4.classList.remove("motion1");
    sound1.classList.remove("motion2");
    sound2.classList.remove("motion2");
    sound3.classList.remove("motion2");
    sound4.classList.remove("motion2");
}


// changing music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./components/music/" + songs.name + ".mp3";
    img.src = "./components/images/" + songs.name + ".jpg";
};

// loadSong(songs[]);

songIndex = 0;

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();

};
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

// progress js work

music.addEventListener('timeupdate', (event) => {
    // console.log(event);
    const { currentTime, duration } = event.srcElement;
    // console.log(currentTime);
    // console.log(duration)


    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    //    music duration update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    // console.log(min_duration);
    // console.log(sec_duration);
    if (sec_duration < 10) {
        sec_duration = `0${sec_duration}`;
    }
    let tot_duration = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = `${tot_duration}`;
    }

    // music duration update
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    // console.log(min_currentTime);
    // console.log(sec_currentTime);
    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
})

//progress onclick functionality
progress_div.addEventListener('click', (event) => {
    // console.log(event);
    const { duration } = music;

    let move_progress = event.offsetX / event.srcElement.clientWidth * duration;
    // console.log(move_progress);
    music.currentTime = move_progress;
})

//if music end call next function
music.addEventListener("ended", nextSong);
