const zekrArr = [
  "صلي على النبي",
  "سُبحان الله",
  "الحمدلله",
  "لا اله الا الله",
  "لا اله الا انت سبحانك اني كنت من الظالمين",
];

// Generate a random index within the range of the array length
const randomIndex = Math.floor(Math.random() * zekrArr.length);

// Retrieve the random string from the array using the random index
const randomString = zekrArr[randomIndex];

function notif() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showCloseButton: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "info",
    html: `${randomString}`,
  });
}
onload = () => {
  notif();
};
