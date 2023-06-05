window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = '0.7';
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.opacity = '1.2';
    } else {
        navbar.style.opacity = '0.5';
    }
});
function showAlert() {
    alert("Do you really use facebook in 2023? Hehe");
  }
  
  function rotateImage() {
    var img = document.getElementById('img_5851');
    img.classList.toggle('rotate');
    var audio = new Audio('Audo/jixaw-metal-pipe-falling-sound.mp3');
    audio.play();
  }
  