console.log("Welcome to Spotify");

// Initialize The Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "True Love" , filepath: "songs/1.mp3" , coverpath:"img/10.jpg"},
    {songName: "Let Me Down Slowly" , filepath: "songs/2.mp3" , coverpath:"img/download.jpg"},
    {songName: "Iraaday" , filepath: "songs/3.mp3" , coverpath:"img/iraaday.jpg"},
    {songName: "Mi-Amor" , filepath: "songs/4.mp3" , coverpath:"img/mi_amor.pnj.jpg"},
    {songName: "Players" , filepath: "songs/5.mp3" , coverpath:"img/players.jpg"},
    {songName: "9:45" , filepath: "songs/6.mp3" , coverpath:"img/9_45.jpg"},
]

songItems.forEach((element , i)=>
{
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
})   

// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click',()=>
{
    if (audioElement.paused || audioElement.currentTime<=0) 
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1 ;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0 ;
    }

})

    // Listen To Events
   audioElement.addEventListener('timeupdate' , ()=>
{
    // Update SeekBar 
    progress = (audioElement.currentTime / audioElement.duration)*100 ;
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change', ()=>
{
    audioElement.currentTime = MyProgressBar.value*audioElement.duration/100;
}
)

    const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = ` songs/${songIndex+1}.mp3 ` ;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        gif.style.opacity = 1 ;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click' , ()=>
{
    if(songIndex>=5)
    {
        songIndex = 0
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = ` songs/${songIndex+1}.mp3 ` ;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' , ()=>
{
    if(songIndex<=0)
    {
        songIndex = 0
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = ` songs/${songIndex+1}.mp3 ` ;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
