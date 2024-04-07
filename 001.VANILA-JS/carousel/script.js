"use strict";

let currentIndex = 0;
showImage(currentIndex);

function showImage(n) {
  currentIndex += n;

  const images = document.querySelectorAll(".image");
  const dots = document.querySelectorAll(".dot");

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  hideAllImages(images);
  deactivateAllDots(dots);

  images[currentIndex].style.display = "block";
  dots[currentIndex].classList.add("active");
}

function hideAllImages(images) {
  for (const image of images) {
    image.style.display = "none";
  }
}

function deactivateAllDots(dots) {
  for (const dot of dots) {
    dot.classList.remove("active");
  }
}

function changeImage(n) {
  showImage(n);
}

document.querySelector("#prev").addEventListener("click", () => showImage(-1));
document.querySelector("#next").addEventListener("click", () => showImage(1));
