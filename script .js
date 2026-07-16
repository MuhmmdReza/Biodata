// =========================
// INTRO VIDEO
// =========================

window.addEventListener("load", function(){

    const intro = document.getElementById("intro");
    const video = document.getElementById("introVideo");
    const skip = document.getElementById("skipIntro");


    function masukWebsite(){

        if(intro){

            intro.style.opacity = "0";
            intro.style.pointerEvents = "none";

            setTimeout(function(){
                intro.style.display = "none";
            },500);

        }

    }


    if(video){

        video.onended = function(){
            masukWebsite();
        };

    }


    if(skip){

        skip.onclick = function(){
            masukWebsite();
        };

    }


    // cadangan
    setTimeout(masukWebsite,10000);

    
});


// =========================
// TYPING EFFECT
// =========================

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


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

menuBtn.onclick = () => {

    nav.classList.toggle("active");

};

}


// =========================
// MUSIC PLAYER
// =========================

const music = document.getElementById("bgmusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;


if(musicBtn){

musicBtn.onclick = () => {


if(!playing){

    music.play();

    musicBtn.innerHTML =
    '<i class="fas fa-pause"></i>';

    playing = true;

}

else{

    music.pause();

    musicBtn.innerHTML =
    '<i class="fas fa-play"></i>';

    playing = false;

}


};

}


// =========================
// ANIMASI SCROLL
// =========================

const cards = document.querySelectorAll(
".project-card, .about-card, .skill"
);


window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let posisi = card.getBoundingClientRect().top;


if(posisi < window.innerHeight - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});
