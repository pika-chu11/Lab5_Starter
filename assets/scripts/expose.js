// expose.js

window.addEventListener('DOMContentLoaded', init);

// Initialize Jsconfetti
const jsConfetti = new JSConfetti();
jsConfetti.x = 0;
jsConfetti.y = 0;

function init() {
  // TODO

  // Change image and the audio source
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', changeImage);

  // Play sound
  const button = document.querySelector("Button");
  button.addEventListener('click', playSound);

  // Change volume and volume image
  const volume_ctrl = document.querySelector("#volume-controls input[type='range']");
  volume_ctrl.addEventListener('change', changeSound);
}

// Change image and sound source upon the dropdown menu selection
function changeImage(event) 
{
  const image = document.querySelector("#expose img");
  const value = event.target.value;
  const audio = document.querySelector(".hidden");
  audio.src = 'assets/audio/' + value + ".mp3"; 
  if (value == "air-horn"){
    image.src = 'assets/images/air-horn.svg';
  }
  else if(value == "car-horn") {
    image.src = 'assets/images/car-horn.svg';
  }
  else if(value == "party-horn") {
    image.src = 'assets/images/party-horn.svg';
  }
}

// Play the corresponding sound upon the selected horn
function playSound(event) {
  const selectElement = document.getElementById('horn-select');
  const value = selectElement.value;
  if (value == "party-horn") {
    jsConfetti.addConfetti();
  }
  const audio = document.querySelector(".hidden");
  audio.load();
  audio.play();
}

// Change the volumn and the image
function changeSound (event) {
  const range_val = event.target.value;
  const vol_img = document.querySelector("#volume-controls img");
  if (range_val >= 1 && range_val < 33){
    vol_img.src = 'assets/icons/volume-level-1.svg';
    vol_img.alt = "Volume level 1";
  }
  else if (range_val >= 33 && range_val < 67){
    vol_img.src = 'assets/icons/volume-level-2.svg';
    vol_img.alt = "Volume level 2";
  }
  else if (range_val >= 67){
    vol_img.src = 'assets/icons/volume-level-3.svg';
    vol_img.alt = "Volume level 3";
  }
  else if (range_val == 0){
    vol_img.src = 'assets/icons/volume-level-0.svg';
    vol_img.alt = "Volume level 0";
  }
  const audio = document.querySelector(".hidden");
  audio.volume = range_val / 100;
}
