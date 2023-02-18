const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

function changeSlide() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

setInterval(changeSlide, 1000);