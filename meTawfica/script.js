const phrases = [
  "Competitive Programmer",
  "Problem Solver",
  "Tech Explorer",
];

const typingElement = document.getElementById("typing-text");
let phraseIndex = 0;
let wordIndex = 0;
let currentWords = [];
let isDeleting = false;

function typeEffect() {
  let currentPhrase = phrases[phraseIndex];
  let words = currentPhrase.split(" ");
  let display = currentWords.join(" ");

  typingElement.innerHTML = display;

  if (!isDeleting && wordIndex < words.length) {
    currentWords.push(words[wordIndex]);
    wordIndex++;
    setTimeout(typeEffect, 300);
  } else if (!isDeleting && wordIndex === words.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
  } else if (isDeleting && currentWords.length > 0) {
    currentWords.pop();
    setTimeout(typeEffect, 100);
  } else if (isDeleting && currentWords.length === 0) {
    isDeleting = false;
    wordIndex = 0;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 300);
  }
}

window.onload = typeEffect;



const counters = document.querySelectorAll(".counter");
      const speed = 50;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = Math.max(Math.floor(target / speed), 1);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 25);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });




// SIDEMENU
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// FORM SUBMIT TO GOOGLE SHEET
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzoo5sYr1CL9S5pijqC3a1M9T_bM8_QFp8tfUMFZundGzNJlEJtGgKyVpy_0B8AvMyYEg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// TIMELINE ANIMATION
const items = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
});


