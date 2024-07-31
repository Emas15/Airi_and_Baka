// script.js
const container = document.getElementById("container");
const papers = document.querySelectorAll(".paper");
const message = document.getElementById("message");

papers.forEach((paper) => {
  // For dragging
  paper.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", null); // Required for drag
    paper.classList.add("fade-out");
  });

  paper.addEventListener("animationend", (e) => {
    paper.remove();
    if (!container.querySelector(".paper")) {
      message.style.display = "block";
    }
  });

  // For touch events
  paper.addEventListener("touchstart", handleTouchStart, false);
  paper.addEventListener("touchmove", handleTouchMove, false);
});

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // Most significant horizontal movement
    if (xDiff > 0) {
      // Left swipe
      swipeLeft(evt.target);
    } else {
      // Right swipe
      swipeRight(evt.target);
    }
  } else {
    // Most significant vertical movement
    if (yDiff > 0) {
      // Up swipe
      swipeUp(evt.target);
    } else {
      // Down swipe
      swipeDown(evt.target);
    }
  }

  // Reset values
  xDown = null;
  yDown = null;
}

function swipeLeft(element) {
  element.classList.add("fade-out");
}

function swipeRight(element) {
  element.classList.add("fade-out");
}

function swipeUp(element) {
  element.classList.add("fade-out");
}

function swipeDown(element) {
  element.classList.add("fade-out");
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");

  // Attempt to play audio
  const playAudio = () => {
    audio.play().catch((error) => {
      // If autoplay is blocked, log error or handle accordingly
      console.log("Autoplay was blocked or audio failed to play:", error);
    });
  };

  // Try to play audio when the page loads
  playAudio();
});
