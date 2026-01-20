// DOM Elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const title = document.querySelector(".title");

// State
let heartIntervalId = null;
let isMoved = false;

// Yes Button Event
yesButton.addEventListener("click", function () {
  if (heartIntervalId) return; // Prevent multiple intervals

  title.textContent = "Yaşasınn!";
  title.classList.add("animate__tada");

  // Smooth transition for buttons
  document.querySelector(".buttons").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".buttons").style.display = "none";
  }, 500);

  generateHearts();
});

// Heart Generator
function generateHearts() {
  const symbols = ["❤️", "💖", "💗", "💕", "💓"];
  const interval = 150;

  heartIntervalId = setInterval(() => {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    createHeart(symbol);
  }, interval);
}

// Create individual heart
function createHeart(symbol) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = symbol;

  // Random position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.animationName = "heartAnimation";
  heart.style.animationDuration = 0.5 + Math.random() + "s";

  document.body.appendChild(heart);

  // Remove heart after animation finishes to prevent DOM bloat
  heart.addEventListener("animationend", () => {
    heart.remove();
  });

  // Fallback removal
  setTimeout(() => {
    if (heart.parentElement) heart.remove();
  }, 2000);
}

// No Button Hover Effect (The Escaping Button)
noButton.addEventListener("mouseover", function () {
  const btnWidth = noButton.offsetWidth;
  const btnHeight = noButton.offsetHeight;

  // Calculate new random position within viewport
  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "fixed";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
  noButton.style.transition =
    "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
});

// Prevention of Cheating (Tab key)
document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Block tabbing focus

    noButton.style.animation = "explode 0.5s forwards";

    const originalTitle = title.textContent;
    title.textContent = "Hile yapmak yok :)";

    setTimeout(() => {
      noButton.style.display = "none";
    }, 500);

    setTimeout(() => {
      title.textContent = originalTitle;
    }, 2000);
  }
});

// Security/Prevention mechanisms
function disabledEvent(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

// Disable Right Click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable Inspect Element and Source View
document.addEventListener("keydown", function (e) {
  // Ctrl+U (View Source)
  if ((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
    return disabledEvent(e);
  }
  // Ctrl+Shift+I (DevTools)
  if (
    (e.ctrlKey || e.metaKey) &&
    e.shiftKey &&
    (e.keyCode == 73 || e.keyCode == 74)
  ) {
    return disabledEvent(e);
  }
  // F12 (DevTools)
  if (e.keyCode == 123) {
    return disabledEvent(e);
  }
});

// Prevent Closing (Optional, but kept as per original)
window.addEventListener("beforeunload", function (e) {
  // Modern browsers require a return value and usually show their own message
  const confirmationMessage = "Sayfayı kapatmak istediğinizden emin misiniz?";
  e.returnValue = confirmationMessage;
  return confirmationMessage;
});
