import { donatePopup } from "./donation.js";

// !Create Footer Element
let footer = document.createElement("footer");
let contentFooter = document.createElement("div");
contentFooter.classList.add("content-footer");
footer.appendChild(contentFooter);

// !Wanes El-Muslim Section
let contentContainer = document.createElement("div");
let h2 = document.createElement("h2");
let h21 = document.createTextNode(`ونيس المُسلم`);
h2.appendChild(h21);
contentContainer.appendChild(h2);
let spanEle = document.createElement("span");
spanEle.classList.add("span-content");
let spanContent = document.createTextNode(
  `وإن ضاقت بك الأركانُ يومًا ‏فَرُكن الله رحبٌ لا يضيقُ`
);
let breakLine = document.createElement("br");
let spanContent2 = document.createTextNode(
  `و فَي كَلامِهِ الوِنسُ و الطَّمَأنِينَه دَائِمَاً فَاذْكُرُوهُ يَذْكُركُم`
);
spanEle.appendChild(spanContent);
spanEle.appendChild(breakLine);
spanEle.appendChild(spanContent2);
contentContainer.appendChild(spanEle);
contentFooter.appendChild(contentContainer);

// !Parts Section
let parts = document.createElement("div");
parts.classList.add("parts");
let h4 = document.createElement("h4");
let h4Content = document.createTextNode("الأقسام");
h4.appendChild(h4Content);
parts.appendChild(h4);
for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  li.classList.add(`li${i}`);
  let a = document.createElement("a");
  a.classList.add(`a${i}`);
  let aContent;
  if (i === 0) {
    aContent = document.createTextNode("الرئيسية");
    a.href = "../html/home.html";
  } else if (i === 1) {
    aContent = document.createTextNode("تسبيح");
    a.href = "../html/tasbeeh.html";
  } else if (i === 2) {
    aContent = document.createTextNode("أذكارك، حصنك");
    a.href = "../html/azkar.html";
  }
  a.appendChild(aContent);
  li.appendChild(a);
  parts.appendChild(li);
}
footer.appendChild(parts);
contentFooter.appendChild(parts);

// !Help Secion
let help = document.createElement("div");
help.classList.add("help");
let h42 = document.createElement("h4");
let h4Content1 = document.createTextNode("المساعدة");
h42.appendChild(h4Content1);
help.appendChild(h42);
for (let i = 4; i < 7; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let aContent;
  if (i === 4) {
    aContent = document.createTextNode("عن المطور");
    a.href = "#";
  } else if (i === 5) {
    aContent = document.createTextNode("تواصل معنا");
    a.href = "../html/contactUs.html";
  } else if (i === 6) {
    aContent = document.createTextNode("للدعم المادي");
    a.setAttribute("href", "#");
    a.setAttribute("id", "donation-Btn");
  }
  a.appendChild(aContent);
  li.appendChild(a);
  help.appendChild(li);
}
footer.appendChild(help);
contentFooter.appendChild(help);

// ! Icons Section
let icons = document.createElement("div");
icons.classList.add("icons");
let aIcon1 = document.createElement("a");
aIcon1.href = "https://t.me/wanes_elmoslem";
let icon1 = document.createElement("i");

// *Telegram Icon
icon1.setAttribute("class", "fa-brands fa-telegram");
icon1.setAttribute("id", "tele");
icons.appendChild(aIcon1);
aIcon1.appendChild(icon1);
icons.classList.add("icons");

// * Facebook Icon
let aIcon3 = document.createElement("a");
aIcon3.href = "https://www.facebook.com/groups/2042659169460891/";
let icon3 = document.createElement("i");
icon3.setAttribute("class", "fa-brands fa-facebook");
icon3.setAttribute("id", "face");
icons.appendChild(aIcon3);
aIcon3.appendChild(icon3);

// * Whatsapp Icon
let aIcon2 = document.createElement("a");
aIcon2.href = "https://whatsapp.com/channel/0029VaUFu9WD38CULjlAsC0c";
let icon2 = document.createElement("i");
icon2.setAttribute("class", "fa-brands fa-whatsapp");
icon2.setAttribute("id", "whats");
icons.appendChild(aIcon2);
aIcon2.appendChild(icon2);
footer.appendChild(icons);

// ! Info Section
let info = document.createElement("div");
info.classList.add("info");
let infoh2 = document.createElement("h2");
let infoi = document.createElement("i");
infoi.setAttribute("class", "fa-solid fa-copyright");
let infoh3 = document.createElement("h3");
infoh2.appendChild(infoi);
let infoh32 = document.createElement("h3");
let h2Content = document.createTextNode(` جميع الحقوق محفوظة`);
let infoh3Content = document.createTextNode("Mazaya Store");
let infoh32Content = document.createTextNode("Ver 1.3.1");
infoh2.appendChild(h2Content);
infoh3.appendChild(infoh3Content);
infoh32.appendChild(infoh32Content);
info.appendChild(infoh2);
info.appendChild(infoh3);
info.appendChild(infoh32);
footer.appendChild(info);
document.body.appendChild(footer);

document.getElementById("donation-Btn").addEventListener("click", () => {
  donatePopup();
});
