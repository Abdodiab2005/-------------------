// logout button
// document.getElementById("logout-icon").addEventListener("click", () => {
//   localStorage.clear();
//   location.replace("../html/home.html");
// });

// declare the selection btns
let tasBtn1 = document.getElementById("tasBtn1");
let tasBtn2 = document.getElementById("tasBtn2");
let tasBtn3 = document.getElementById("tasBtn3");
let tasBtn4 = document.getElementById("tasBtn4");
let tasBtn5 = document.getElementById("tasBtn5");
let tasBtn6 = document.getElementById("tasBtn6");
let tasBtn7 = document.getElementById("tasBtn7");

// declare the displayed selected elements
let selectedItem = document.getElementById("SelectedItem");
let counterScreen = document.getElementById("counterVal");

// declare counters
let counterVal1;
let counterVal2;
let counterVal3;
let counterVal4;
let counterVal5;
let counterVal6;
let counterVal7;

// counter Btns
let counterBtns1 = document.getElementById("counterBtns1");
let counterBtns2 = document.getElementById("counterBtns2");
let counterBtns3 = document.getElementById("counterBtns3");
let counterBtns4 = document.getElementById("counterBtns4");
let counterBtns5 = document.getElementById("counterBtns5");
let counterBtns6 = document.getElementById("counterBtns6");
let counterBtns7 = document.getElementById("counterBtns7");

// increasment Btn
let incBtn1 = document.getElementById("inc1");
let incBtn2 = document.getElementById("inc2");
let incBtn3 = document.getElementById("inc3");
let incBtn4 = document.getElementById("inc4");
let incBtn5 = document.getElementById("inc5");
let incBtn6 = document.getElementById("inc6");
let incBtn7 = document.getElementById("inc7");

// reset Btns
let resetBtn1 = document.getElementById("reset1");
let resetBtn2 = document.getElementById("reset2");
let resetBtn3 = document.getElementById("reset3");
let resetBtn4 = document.getElementById("reset4");
let resetBtn5 = document.getElementById("reset5");
let resetBtn6 = document.getElementById("reset6");
let resetBtn7 = document.getElementById("reset7");

let counterBtns = document.querySelectorAll(".counter");

// سبحان الله Btn
tasBtn1.addEventListener("click", () => {
  selectedItem.innerText = tasBtn1.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns1.classList.remove("hide");
  counterVal1 = localStorage.getItem("سبحان الله");
  counterScreen.innerText = counterVal1;
  incBtn1.onclick = () => {
    counterVal1++;
    counterScreen.innerHTML = counterVal1;
    localStorage.setItem("سبحان الله", counterVal1);
  };
  resetBtn1.addEventListener("click", () => {
    localStorage.setItem("سبحان الله", 0);
    counterVal1 = 0;
    counterScreen.innerText = counterVal1;
  });
});

// الحمدلله Btn
tasBtn2.addEventListener("click", () => {
  selectedItem.innerText = tasBtn2.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns2.classList.remove("hide");
  counterVal2 = localStorage.getItem("الحمدلله");
  counterScreen.innerText = counterVal2;
  incBtn2.onclick = () => {
    counterVal2++;
    counterScreen.innerHTML = counterVal2;
    localStorage.setItem("الحمدلله", counterVal2);
  };
  resetBtn2.addEventListener("click", () => {
    localStorage.setItem("الحمدلله", 0);
    counterVal2 = 0;
    counterScreen.innerText = counterVal2;
  });
});

// الله أكبر Btn
tasBtn3.addEventListener("click", () => {
  selectedItem.innerText = tasBtn3.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns3.classList.remove("hide");
  counterVal3 = localStorage.getItem("الله أكبر");
  counterScreen.innerText = counterVal3;
  incBtn3.onclick = () => {
    counterVal3++;
    counterScreen.innerHTML = counterVal3;
    localStorage.setItem("الله أكبر", counterVal3);
  };
  resetBtn3.addEventListener("click", () => {
    localStorage.setItem("الله أكبر", 0);
    counterVal3 = 0;
    counterScreen.innerText = counterVal3;
  });
});

// أستغفر الله Btn
tasBtn4.addEventListener("click", () => {
  selectedItem.innerText = tasBtn4.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns4.classList.remove("hide");
  counterVal4 = localStorage.getItem("أستغفر الله");
  counterScreen.innerText = counterVal4;
  incBtn4.onclick = () => {
    counterVal4++;
    counterScreen.innerHTML = counterVal4;
    localStorage.setItem("أستغفر الله", counterVal4);
  };
  resetBtn4.addEventListener("click", () => {
    localStorage.setItem("أستغفر الله", 0);
    counterVal4 = 0;
    counterScreen.innerText = counterVal4;
  });
});

// لا إله إلا الله Btn
tasBtn5.addEventListener("click", () => {
  selectedItem.innerText = tasBtn5.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns5.classList.remove("hide");
  counterVal5 = localStorage.getItem("لا إله إلا الله");
  counterScreen.innerText = counterVal5;
  incBtn5.onclick = () => {
    counterVal5++;
    counterScreen.innerHTML = counterVal5;
    localStorage.setItem("لا إله إلا الله", counterVal5);
  };
  resetBtn5.addEventListener("click", () => {
    localStorage.setItem("لا إله إلا الله", 0);
    counterVal5 = 0;
    counterScreen.innerText = counterVal5;
  });
});

// اللهم صلي على سيدنا محمد Btn
tasBtn6.addEventListener("click", () => {
  selectedItem.innerText = tasBtn6.value;
  counterBtns.forEach((counterBtns) => {
    counterBtns.classList.add("hide");
  });
  counterBtns6.classList.remove("hide");
  counterVal6 = localStorage.getItem("اللهم صلي وسلم وبارك على سيدنا محمد");
  counterScreen.innerText = counterVal6;
  incBtn6.onclick = () => {
    counterVal6++;
    counterScreen.innerHTML = counterVal6;
    localStorage.setItem("اللهم صلي وسلم وبارك على سيدنا محمد", counterVal6);
  };
  resetBtn6.addEventListener("click", () => {
    localStorage.setItem("اللهم صلي وسلم وبارك على سيدنا محمد", 0);
    counterVal6 = 0;
    counterScreen.innerText = counterVal6;
  });
});

// ! fieldd click popup
let popupCounts = 1;
localStorage.setItem("popupCounts", popupCounts);
if (popupCounts === 0) {
  inputValpopup = null;
}
document.getElementById("addnewzekr").onclick = function inputValpopup() {
  if (popupCounts > 0) {
    Swal.fire({
      title: "تنبيه",
      html: `
      ما يتم ادخاله في هذا الحقل يتم ارساله الينا لتحسين تجربة التطبيق الخاص بنا
       يُرجي عدم ادخال بيانات شخصيه اطلاقاً او ارسال رسائل وهميه 
      <br>  شكراً لتفهمكم
    `,
      icon: "info",
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.setItem("popupCounts", popupCounts--);
      }
    });
  }
};

// ! validation
function popupError() {
  Swal.fire({
    icon: "error",
    title: "حدث خطأ",
    text: "لا يمكن أن يكون النص فارغاً أو أزيد من 30 حرفاً",
  });
}
function popupError2() {
  Swal.fire({
    icon: "error",
    title: "حدث خطأ",
    text: "لا يمكن اضافة أكثر من زر",
  }).then((res) => {
    if (res.isConfirmed) {
      confPopup();
    }
  });
}

// ! delete popup
function confPopup() {
  Swal.fire({
    title: "هل تريد حذف العنصر؟",
    text: "لا يمكنك التراجع في هذا الاجراء!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "نعم احذفه",
    cancelButtonText: "لا",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("inputVal");
      let inpVal = localStorage.key(8);
      localStorage.removeItem(inpVal);
      Swal.fire({
        title: "تم الحذف",
        text: "تم حذف الزر بنجاح",
        icon: "success",
      }).then((res) => {
        if (res.isConfirmed) {
          location.reload();
        }
      });
    }
  });
}

// ! Send Email Function
function sendEmail() {
  let inputVal = document.getElementById("addnewzekr").value;
  const bodyMsg = `name: ${localStorage.getItem(
    "UNV"
  )} <br> new zekr: ${inputVal}`;
  Email.send({
    SecureToken: "5d8b4959-8426-4cd9-8947-0a1f30bdae4d",
    To: "mazaya.services.contact@gmail.com",
    From: "mazaya.services.contact@gmail.com",
    Subject: "This is a subject",
    Body: bodyMsg,
  }).then(
    function (message) {
      console.log(message);
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

let innerValue;
var inputVal = document.getElementById("addnewzekr").value;
// ! Add New Zekr Field
document.forms[0].onsubmit = (ele) => {
  ele.preventDefault();
  inputVal = document.getElementById("addnewzekr").value;
  if (inputVal !== "" && inputVal.length < 30) {
    if (!localStorage.getItem("inputVal")) {
      localStorage.setItem("inputVal", inputVal);
      counterBtns.forEach((counterBtns) => {
        counterBtns.classList.add("hide");
      });
      counterBtns7.classList.remove("hide");
      localStorage.setItem(inputVal, 0);
      counterVal7 = localStorage.getItem(inputVal);
      counterScreen.innerText = counterVal7;
      let newBtn = document.createElement("button");
      newBtn.classList.add("selectBtn");
      newBtn.setAttribute("id", "tasBtn7");
      newBtn.setAttribute("value", inputVal);
      newBtn.innerText = inputVal;
      let appendNewZekr = document.getElementById("selectBtnsContainer");
      appendNewZekr.appendChild(newBtn);
      selectedItem.innerText = inputVal;
      sendEmail();
      location.reload();
    } else {
      popupError2();
    }
  } else {
    popupError();
  }
};
innerValue = localStorage.getItem("inputVal");

// document.getElementById("tasBtn7").addEventListener("click", () => {

// });

document.addEventListener("DOMContentLoaded", () => {
  const btn7 = document.getElementById("tasBtn7");
  if (btn7) {
    btn7.addEventListener("click", () => {
      counterBtns.forEach((counterBtns) => {
        counterBtns.classList.add("hide");
      });
      counterBtns7.classList.remove("hide");
      counterVal7 = localStorage.getItem(inputVal);
      counterScreen.innerText = counterVal7;
      selectedItem.innerHTML = localStorage.getItem("inputVal");
      incBtn7.onclick = () => {
        counterVal7++;
        counterScreen.innerHTML = counterVal7;
        localStorage.setItem(inputVal, counterVal7);
      };
      resetBtn7.addEventListener("click", () => {
        localStorage.setItem(inputVal, 0);
        counterVal7 = 0;
        counterScreen.innerText = counterVal7;
      });
    });
  } else {
    console.error("Element with ID 'tasBtn7' not found.");
  }
});

if (localStorage.getItem("inputVal")) {
  let newBtn = document.createElement("button");
  newBtn.classList.add("selectBtn");
  newBtn.setAttribute("id", "tasBtn7");
  newBtn.setAttribute("value", inputVal);
  newBtn.innerText = localStorage.getItem("inputVal");
  let appendNewZekr = document.getElementById("selectBtnsContainer");
  appendNewZekr.appendChild(newBtn);
}

function logoutPopup() {
  Swal.fire({
    icon: "error",
    title: "حدث خطأ",
    text: "لقد وصلت للحد الأقصى من استخدام الذاكره المحليه يجب عليك اعادة تسجيل الدخول مره أخرى",
  }).then((res) => {
    if (res.isConfirmed) {
      localStorage.clear();
    }
  });
}

if (localStorage.length > 100) {
  logoutPopup();
}
