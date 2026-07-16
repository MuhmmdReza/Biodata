// LOADING
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const intro = document.getElementById("intro");

    setTimeout(() => {
        if(loader){
            loader.style.display = "none";
        }
    },1000);


    // Intro video
    const video = document.getElementById("introVideo");

    if(video){
        video.onended = () => {
            if(intro){
                intro.style.display = "none";
            }
        };
    }

});


// SKIP INTRO
const skipBtn = document.getElementById("skipIntro");

if(skipBtn){

    skipBtn.onclick = () => {

        const intro = document.getElementById("intro");

        if(intro){
            intro.style.display = "none";
        }

    };

}


// TYPING EFFECT
if(document.getElementById("typing")){

new Typed("#typing", {

strings:[
"Web Developer",
"Creative Designer",
"Crypto Enthusiast",
"Problem Solver"
],

typeSpeed:80,
backSpeed:50,
loop:true

});

}


// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.onclick = () => {

    nav.classList.toggle("active");

};

}


// MUSIC PLAYER

const music = document.getElementById("bgmusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;


if(musicBtn){

musicBtn.onclick = () => {


if(!playing){

    music.play();

    musicBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

    playing=true;

}

else{

    music.pause();

    musicBtn.innerHTML =
    '<i class="fas fa-play"></i>';

    playing=false;

}


};


}


// ANIMASI SCROLL

const cards = document.querySelectorAll(
".project-card, .about-card, .skill"
);


window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let posisi =
card.getBoundingClientRect().top;


if(posisi < window.innerHeight - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});