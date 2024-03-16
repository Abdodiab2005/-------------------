const form = document.querySelector("form");
const fname = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");

function sendEmail() {
  const bodyMsg = `Full Name: ${fname.value} <br> email: ${email.value} <br> phone number: ${phone.value} <br> subject: ${subject.value} <br> Message: ${msg.value} <br>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mazaya.services.contact@gmail.com",
    Password: "C81C7D35E001B842FCDF8022DFEF54A659F9",
    To: "mazaya.services.contact@gmail.com",
    From: "mazaya.services.contact@gmail.com",
    Subject: subject.value,
    Body: bodyMsg,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
