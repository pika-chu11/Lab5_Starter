// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Change image
  const selectElement = document.querySelector('.ice-cream');
  selectElement.addEventListener('change', (event => {
      const result = document.querySelector('.result');
      changeImage(result);
  }) )
}

function changeImage(options) 
{
  if (options = "air-horn"){
    let image = document.querySelector("#expose img");
    image.src = 'assets/images/car-horn.svg';
  }
}