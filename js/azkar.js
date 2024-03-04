let nextBtn = document.getElementById("next-Btn");
let previousBtn = document.getElementById("previous-Btn");
let progress = 0;
let progBar = document.getElementById("prog-bar");

progBar.style.width = "13%";
nextBtn.addEventListener("click", () => {
  progress++;
  if (progress > 1) {
    console.log(progress);

    switch (progress) {
      case 1:
        progBar.style.width = "13%";
        break;
      case 2:
        progBar.style.width = "20%";
        break;
      case 3:
        progBar.style.width = "30%";
        break;
      case 4:
        progBar.style.width = "50%";
        break;
      case 5:
        progBar.style.width = "60%";
        break;
      case 6:
        progBar.style.width = "70%";
        break;
      case 7:
        progBar.style.width = "80%";
        break;
      case 8:
        progBar.style.width = "90%";
        break;
      case 9:
        progBar.style.width = "100%";
        break;
    }
  }
});
