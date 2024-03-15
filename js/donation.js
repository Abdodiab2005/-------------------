export const donatePopup = () => {
  Swal.fire({
    title: `<strong id="donateHeader">دعمك لنا يضمن استمرارية عمل البرنامج</strong>`,
    html: `
      <div class="DonationsContainer" >
          <div class="donateIconContainer" id="donateContainer">
              <i>
                  <img class="DonateIcon" src="../photos/instapay.ico" alt="instaPay Icon">
              </i>
              <p id="donateId">
                  waneselmuslim@instapay
              </p>
          </div>
          <div class="donateIconContainer" id="donateContainer2"> 
              <i>
                  <img class="DonateIcon" src="../photos/cash icon.ico" alt="Vodafone Cash Icon">
              </i>
              <p id="donateId">
                  01558250954
              </p>
          </div>
          <div class="donateIconContainer" id="paypalDonate">
              <i>
                  <img class="DonateIcon" src="../photos/paypal.ico" alt="paypal Icon">
              </i>
              <p>
                  <a href="https://paypal.me/smtaboot?country.x=EG&locale.x=en_US" target="_blank"><p id="donateId">paypal</p></a>
              </p>
          </div>
      </div>
      `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `إغلاق`,
    confirmButtonColor: "#027fff",
  });
  // Select the copy buttons
  const copyButton1 = document.getElementById("donateContainer");
  const copyButton2 = document.getElementById("donateContainer2");

  // Attach event listeners to copy buttons
  copyButton1.addEventListener("click", () => {
    copyToClipboard("waneselmuslim");
  });

  copyButton2.addEventListener("click", () => {
    copyToClipboard("01558250954");
  });

  let paypal = document.getElementById("paypalDonate");
  paypal.onclick = () => {
    location.href = "https://paypal.me/smtaboot?country.x=EG&locale.x=en_US";
  };
};

//   Function to copy text to clipboard
export const copyToClipboard = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `تم نسخ النص الى الحافظه
    ${textarea.value}
    `,
    showConfirmButton: false,
    timer: 2000,
  });
};
