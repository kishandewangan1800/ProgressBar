const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;
prev.style.cursor = "not-allowed"
let numberOfCircles = circles.length;
progress.style.width ="0%";

next.addEventListener("click", () => {
  currentActive++;
//   console.log(currentActive);
  enableDisable();
  updateCSS();
});

prev.addEventListener("click", () => {
  currentActive--;
//   console.log(currentActive);
  enableDisable();
  updateCSS();
});

function enableDisable() {
  if (currentActive === 1) {
    prev.disabled = true;
    prev.style.cursor = "not-allowed"
  } else if (currentActive === numberOfCircles) {
    next.disabled = true;
    next.style.cursor = "not-allowed"
  } else {
    prev.disabled = false;
    next.disabled = false;
    prev.style.cursor = "pointer"
    next.style.cursor = "pointer"
  }
}

function updateCSS() {
  for (var i = 0; i < numberOfCircles; i++) {
    const circle = circles[i];

    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  }

  const active = document.querySelectorAll(".active");
  

  var widthxyz = ((active.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = widthxyz + "%";

}
