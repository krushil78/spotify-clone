console.log("welcome to spotify");
// initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "song/1.mp3 ", coverPath: "cover/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "song/2.mp3 ", coverPath: "cover/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "song/3.mp3 ", coverPath: "cover/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "song/4.mp3 ", coverPath: "cover/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "song/5.mp3 ", coverPath: "cover/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "song/6.mp3 ", coverPath: "cover/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "song/7.mp3 ", coverPath: "cover/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "song/8.mp3 ", coverPath: "cover/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "song/9.mp3 ", coverPath: "cover/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "song/9.mp3 ", coverPath: "cover/10.jpg" },
]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//audioElement .play();

// handle play/pause click

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }


})

//lison to events 
audioElement.addEventListener('timeupdate', () => {


    // Update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeALLPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {

        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })

})

document.getElementById('naxt').addEventListener('click', () => {
    if (songIndex > 9){

        songIndex = 0;
    }

    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0){

        songIndex = 0;
    }

    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})