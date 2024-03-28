const ul = document.getElementById("ulNav");
const toggleBtn = document.getElementById("toggler");
let bars = document.querySelectorAll(".bars");

toggleBtn.onclick = () => {
  bars.forEach((e) => {
    e.classList.toggle("change");
  });
  ul.classList.toggle("toggled");
};
