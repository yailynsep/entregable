//Variables
let sound, btn_play, btn_stop;

//https://res.cloudinary.com/daerk9ozl/video/upload/v1692675922/Landing/audios/sweet-home-131158_v8pmv0.mp3


window.onload = ()=>{
  
  sound = new Howl({
    src: ['https://res.cloudinary.com/daerk9ozl/video/upload/v1692675922/Landing/audios/sweet-home-131158_v8pmv0.mp3']
  });
  
  btn_play = document.getElementById("btn_play");
  btn_stop = document.getElementById("btn_stop");
  btn_play.addEventListener("click",reproducir);//Acción de presion de botón play
  btn_stop.addEventListener("click",detener);//Acción de presion de botón stop

  animacion();
}

function reproducir(event){
  btn_play.classList.add("ocultar");
  btn_stop.classList.remove("ocultar");
  sound.play();
}

function detener(event){
  btn_play.classList.remove("ocultar");
  btn_stop.classList.add("ocultar");
  sound.pause();
}


function animacion(){
    gsap.from("#banner",{opacity:0,duration:1});
}
