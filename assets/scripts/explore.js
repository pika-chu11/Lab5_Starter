// explore.js

window.addEventListener('DOMContentLoaded', init);

// variables 
const synth = window.speechSynthesis;
const text_area = document.querySelector("textarea[name='text-to-speak']");
const button = document.querySelector("button");
const voiceSelect = document.querySelector("#voice-select");
const face_img = document.querySelector("#explore img");
console.log(face_img);

function init() {
  // TODO

  // click the "Press to Talk" Event
  button.addEventListener("click", click_buttion);

  // Obtain voice list
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && 
      speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}


let  voices = [];

// Obtain voice list
function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

// Actions happens when the buttion is clicked.
function click_buttion (event) {
  face_img.src = 'assets/images/smiling-open.png';
  speak();
}

// change the current speak language
function speak() {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }

  if (text_area.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(text_area.value);

    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
      face_img.src = 'assets/images/smiling.png';
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    synth.speak(utterThis);
  }
}
