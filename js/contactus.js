const form = document.querySelector("form");
const fname = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");

if (localStorage.getItem("UNV")) {
  fname.value = localStorage.getItem("UNV");
}

function sendEmail() {
  const bodyMsg = `Full Name: ${fname.value} <br> email: ${email.value} <br> phone number: ${phone.value} <br> subject: ${subject.value} <br> Message: ${msg.value} <br>`;
  Email.send({
    SecureToken: "5d8b4959-8426-4cd9-8947-0a1f30bdae4d",
    To: "mazaya.services.contact@gmail.com",
    From: "mazaya.services.contact@gmail.com",
    Subject: subject.value,
    Body: bodyMsg,
  }).then(
    function (message) {
      Swal.fire({
        title: "تم ارسال الرسالة بنجاح",
        html: `
        <span class="success-msg-form"> سيتم الرد على استفساركم عن طريق البريد الالكتروني او الواتساب خلال ساعات الرجاء التحقق من صحة البيانات المدخله</span>
        `,
        icon: "success",
      });
    },
    function (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "حدث خطأ غير متوقع الرجاء المحاوله مره أخرى",
      });
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");

      if (items[1].value != "") {
        checkEmail();
      }

      items[1].addEventListener("keyup", () => {
        checkEmail();
      });

      if (items[2].value != "") {
        checkNumber();
      }

      items[2].addEventListener("keyup", () => {
        checkNumber();
      });

      if (items[4].value != "") {
        checkMsg();
      }

      items[4].addEventListener("keyup", () => {
        checkMsg();
      });
    }

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");
  if (!email.value.match(emailregx)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "برجاء إدخال بريد الكتروني صالح !";
    } else {
      errorTxtEmail.innerText = "لا يمكن ترك الحقل فارغاً";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

function checkNumber() {
  const numberregx = /^[0-9]+$/;
  const errorTxtPhone = document.querySelector(".error-txt.phone");
  if (!phone.value.match(numberregx)) {
    phone.classList.add("error");
    phone.parentElement.classList.add("error");

    if (phone.value != "") {
      errorTxtPhone.innerText = "برجاء إدخال رقم هاتف صالح !";
    } else {
      errorTxtPhone.innerText = "لا يمكن ترك الحقل فارغاً";
    }
  } else if (phone.value.length < 5) {
    phone.classList.add("error");
    phone.parentElement.classList.add("error");
    errorTxtPhone.innerText = "برجاء إدخال رقم هاتف صالح !";
  } else {
    phone.classList.remove("error");
    phone.parentElement.classList.remove("error");
  }
}

function checkMsg() {
  const errorTxtMsg = document.querySelector(".error-txt.msg");
  if (msg.value.length > 1000) {
    msg.classList.add("error");
    msg.parentElement.classList.add("error");
    errorTxtMsg.innerText = "يجب أن لا تتجاوز الرساله 1000 حرف";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  checkEmail();
  checkNumber();
  checkMsg();
  if (
    !fname.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !email.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !msg.classList.contains("error")
  ) {
    sendEmail();
    form.reset();
    return false;
  }
});
// إنشاء العداد والنص
let counter = 0;
let apperaCounter = document.querySelector(".counter");
let counterWords = document.getElementById("countWords");
let counterMsg = document.createElement("label");
counterMsg.textContent = `${counter} / 1000`; // تحديث النص ليكون عدد الأحرف الحالي والحد الأقصى
apperaCounter.appendChild(counterMsg);

// استماع لحدث keyup لتحديث العداد عندما يتم الكتابة
msg.addEventListener("keyup", () => {
  counter = msg.value.length; // تحديث قيمة العداد بعدد الأحرف الحالي
  counterMsg.textContent = `${counter} / 1000`; // تحديث النص ليعكس العدد الجديد
  if (counter > 1000) {
    checkMsg();
    counterWords.style.color = "#d93025";
  }
});
