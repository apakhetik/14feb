const card = document.getElementById("card");
const card2 = document.getElementById("card2");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const closeBtn1 = document.getElementById("close1");
const closeBtn2 = document.getElementById("close2");
const video = document.getElementById("video");

function openModal() {
  if (!modal.classList.contains("active")) {
    modal.classList.add("active");
    video.currentTime = 0;
    video.play();
  }
}

function openModal2() {
  if (!modal2.classList.contains("active")) {
    modal2.classList.add("active");
  }
}

function closeModal() {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
    video.pause();
    video.currentTime = 0;
  }
}

function closeModal2() {
  if (modal2.classList.contains("active")) {
    modal2.classList.remove("active");
  }
}

card.addEventListener("click", openModal);
card2.addEventListener("click", openModal2);

closeBtn1.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal2);

modal.addEventListener("click", e => {
  if (e.target === modal) {
    closeModal();
  }
});

modal2.addEventListener("click", e => {
  if (e.target === modal2) {
    closeModal2();
  }
});

// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", event => {
//   const xPos = event.offsetX;
//   const yPos = event.offsetY;
//   const spanEl = document.createElement("span");
//   spanEl.style.left = xPos + "px";
//   spanEl.style.top = yPos + "px";
//   const size = Math.random() * 50;
//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";
//   bodyEl.appendChild(spanEl);
//   setTimeout(() => {
//     spanEl.remove();
//   }, 3000);
// });

const audio = document.getElementById("background-music");
const musicBtn = document.getElementById("toggle-music");

musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

let currentIndex = 0;
const totalSlides = slides.length;

function updateSliderPosition() {
  const slideHeight = slides[0].clientHeight;
  slider.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
}

upButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

downButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

function autoScroll() {
  setInterval(() => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  }, 3000);
}

autoScroll();

const mainBlock = document.getElementById("main1");
const button = document.getElementById("start");

// Добавляем обработчик события клика
button.addEventListener("click", () => {
  // Добавляем класс hidden для скрытия блока
  mainBlock.classList.add("hidden");
});

const btnAlbom = document.getElementById("btn-albom");
const albomMain = document.getElementById("albom_main");
const close3 = document.getElementById("close3");
// Добавляем обработчик клика
btnAlbom.addEventListener("click", () => {
  // Переключаем видимость блока albom_main
  albomMain.classList.toggle("visible");
});

close3.addEventListener("click", () => {
  // Переключаем видимость блока albom_main
  albomMain.classList.toggle("visible");
});
