const text = document.getElementById("text");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const navbarContainer = document.getElementById("nav");
let navLinks = document.querySelectorAll(".navBarLink");
const logo = document.getElementById("logo");
const ul = document.getElementById("ulNav");
const toggleBtn = document.getElementById("toggler");
let bars = document.querySelectorAll(".bars");

function linkColors() {
  navLinks.forEach((e) => {
    e.style.color = "#027fff";
  });
}
function reslinkColors() {
  navLinks.forEach((e) => {
    e.style.color = "#faf7ef";
  });
}
function linkColorsBars() {
  bars.forEach((e) => {
    e.style.background = "#027fff";
  });
}
function invertLinkColorsBars() {
  bars.forEach((e) => {
    e.style.background = "#faf7ef";
  });
}
function invertLinkColors() {
  navLinks.forEach((e) => {
    e.style.color = "#faf7ef";
  });
}
window.onload = () => {
  navbarContainer.style.background = "transparent";
  linkColors();
  linkColorsBars();
  logo.style.color = "#027fff";
  toggleBtn.style.color = "#027fff";
};

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * -1.25 + "px";
  img1.style.top = value * 0.75 + "px";
  img2.style.top = value * 0.5 + "px";
  img3.style.top = value * 0.25 + "px";
  // if (value < 430) {
  //   navbarContainer.style.background = "transparent";
  //   logo.style.color = "#027fff";
  //   linkColors();

  //   if (mediaQuery.matches) {
  //     linkColorsBars();
  //     toggleBtn.style.color = "#027fff";
  //     reslinkColors();
  //   }
  // } else {
  //   navbarContainer.style.background = "#027fff";
  //   logo.style.color = "#faf7ef";
  //   invertLinkColors();
  //   if (mediaQuery.matches) {
  //     linkColorsBars();
  //     toggleBtn.style.color = "#faf7ef";
  //     invertLinkColorsBars();
  //   }
  // }
});

toggleBtn.onclick = () => {
  bars.forEach((e) => {
    e.classList.toggle("change");
  });
  ul.classList.toggle("toggled");
};

function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("showMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "قراءة المزيد";
    moreText.style.display = "none";
    document.getElementById("container").style.height = "480px";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "اظهر اقل";
    moreText.style.display = "inline";
    document.getElementById("container").style.height = "905px";
  }
}

function showMore1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("showMore1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "قراءة المزيد";
    moreText1.style.display = "none";
    document.getElementById("container1").style.height = "480px";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "اظهر اقل";
    moreText1.style.display = "inline";
    document.getElementById("container1").style.height = "750px";
  }
}

function showMore2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("showMore2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "قراءة المزيد";
    moreText2.style.display = "none";
    document.getElementById("container2").style.height = "480px";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "اظهر اقل";
    moreText2.style.display = "inline";
    document.getElementById("container2").style.height = "790px";
  }
}

const prayTimeBtn = document.getElementById("prayTimeBtn");
prayTimeBtn.addEventListener("click", () => {
  Swal.fire({
    title: "تنبيه",
    text: "لا تزال قيد التطوير",
    icon: "info",
    confirmButtonColor: "#027fff",
  });
});
const prayTimeBtn1 = document.getElementById("prayTimeBtn1");
prayTimeBtn1.addEventListener("click", () => {
  Swal.fire({
    title: "تنبيه",
    text: "لا تزال قيد التطوير",
    icon: "info",
    confirmButtonColor: "#027fff",
  });
});

const feedbtn = document.createElement("button");
feedbtn.setAttribute("id", "feedBack");
document.body.appendChild(feedbtn);

feedbtn.innerHTML = `<i class="fa-solid fa-headphones-simple"></i>`;

feedbtn.addEventListener("click", () => {
  location.href = "#contact";
});

feedbtn.addEventListener("mouseover", () => {
  feedbtn.innerHTML = `تواصل معنا  <i class="fa-solid fa-headphones-simple"></i>`;
});
feedbtn.addEventListener("mouseout", () => {
  feedbtn.innerHTML = `<i class="fa-solid fa-headphones-simple"></i>`;
});

document.getElementById("tasbehBtnRed").onclick = () => {
  location.href = "../html/tasbeeh.html";
};

document.getElementById("AzkarBtnRed").onclick = () => {
  location.href = "../html/azkar.html";
};

let redmore1 = document.getElementById("tasbehBtnRed1");
document.getElementById("AzkarBtnRed1").onclick = () => {
  Swal.fire({
    title: "<strong>تابع الاذكار</strong>",
    icon: "info",
    html: `
    <p class="body-text more-para">
    <strong>الاستشعار بعظمة الله: </strong> تمنح القلب الاستشعار بعظمة
    الخالق جل جلاله. <br />
  </p>
  <p class="body-text more-para">
    <br />
    الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ أَلَا
    بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ <br />
    <strong> {الرعد:28} </strong>
  </p>
  <p class="body-text more-para">
    <strong>وقال شيخ الإسلام ابن تيمية:</strong> “الذكر للقلب مثل الماء
    للسمك، فكيف يكون حال السمك إذا فقد الماء؟!”
  </p>
  <p class="body-text more-para">
    فعلاً، الأذكار هي روح الإسلام ووسيلة للتقرب إلى الله تعالى. دعونا
    نحافظ عليها ونستمر في ذكر الله في كل الأوقات. 🌟🤲
  </p>
</div>
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      الذهاب الى قراءة الاذكار
    `,
    cancelButtonText: `
      الرجوع للخلف
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      location.href = "../html/azkar.html";
    }
  });
};
let redmore2 = document.getElementById("tasbehBtnRed1");
document.getElementById("tasbehBtnRed1").onclick = () => {
  Swal.fire({
    title: "<strong>تابع التسبيح</strong>",
    icon: "info",
    html: `
    <p class="body-text" more-para>
    بالإضافة إلى ذلك، التسبيح يعد أيضًا من أسباب مغفرة الذنوب، ويفتح
    أبواب السماء، ويجلب القبول من الله. لذا، دعونا نكثف من تسبيح الله
    واستغفاره في حياتنا اليومية. 🌟
  </p>
  <p class="body-text more-para">
    وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ ۚ وَمَا كَانَ
    اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ
    <strong>{الأنفال: 33} </strong> <br />
    وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنفُسَهُمْ
    ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ وَمَن يَغْفِرُ
    الذُّنُوبَ إِلَّا اللَّهُ وَلَمْ يُصِرُّوا عَلَىٰ مَا فَعَلُوا
    وَهُمْ يَعْلَمُونَ <strong>{آل عمران: 135} </strong> <br />
    وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ
    اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا
    <strong>{النساء: 110} </strong> <br />
  </p>
</div>
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      الذهاب الى السبحه
    `,
    cancelButtonText: `
      الرجوع للخلف
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      location.href = "../html/tasbeeh.html";
    }
  });
};
