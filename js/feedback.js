const feedbtn = document.createElement("button");
feedbtn.setAttribute("id", "feedBack");
document.body.appendChild(feedbtn);

feedbtn.innerHTML = `<i class="fa-solid fa-headphones-simple"></i>`;

feedbtn.addEventListener("click", () => {
  location.href = "../html/contactUs.html";
});

feedbtn.addEventListener("mouseover", () => {
    feedbtn.innerHTML = `تواصل معنا  <i class="fa-solid fa-headphones-simple"></i>`;
});
feedbtn.addEventListener("mouseout", () => {
  feedbtn.innerHTML = `<i class="fa-solid fa-headphones-simple"></i>`;
});
