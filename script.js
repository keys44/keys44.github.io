// -- -- VAR INFORMACJE !!!
var informacja="";
document.getElementsByClassName("aside__warn")[0].append(informacja);



// -- -- Cookie  do zrobienia bo nie mam głowy


// -- -- Sound & Play BTN
document.getElementsByClassName("icon-volume-up")[0].addEventListener("click", mute);
document.getElementsByClassName("icon-play")[0].addEventListener("click", play);

var video=document.getElementsByClassName("header__video")[0];
function mute() {
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function play() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}