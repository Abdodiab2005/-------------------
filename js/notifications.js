function scheduleNotification() {
  const now = new Date();
  const fivePm = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    17,
    0,
    0
  );
  const sixAm = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    6,
    0,
    0
  );

  // If it's past 5 PM, set fivePm for the next day
  if (now > fivePm) {
    fivePm.setDate(fivePm.getDate() + 1);
  }

  // If it's past 5 AM, set sixAm for the next day
  if (now > sixAm) {
    sixAm.setDate(sixAm.getDate() + 1);
  }

  const msUntilfivePm = fivePm.getTime() - now.getTime();
  const msUntilsixAm = sixAm.getTime() - now.getTime();

  // Schedule the 6 PM notification
  setTimeout(() => {
    new Notification("ونيس المُسلم", {
      body: `حان الآن موعد أذكار المساء`,
      icon: "../photos/head-icon.ico", // path to the icon image
    });
    // After showing the 6 PM notification, set it to repeat daily
    setInterval(() => {
      new Notification("ونيس المُسلم", {
        body: "حان الآن موعد أذكار المساء",
        icon: "../photos/head-icon.ico", // path to the icon image
      });
    }, 24 * 60 * 60 * 1000);
  }, msUntilfivePm);

  // Schedule the 5 AM notification
  setTimeout(() => {
    new Notification("ونيس المُسلم", {
      body: "موعد أذكار الصباح",
      icon: "../photos/head-icon.ico", // path to the icon image
    });
    // After showing the 5 AM notification, set it to repeat daily
    setInterval(() => {
      new Notification("ونيس المُسلم", {
        body: "موعد أذكار الصباح",
        icon: "../photos/head-icon.ico", // path to the icon image
      });
    }, 24 * 60 * 60 * 1000);
  }, msUntilsixAm);
}

// Don't forget to request permission for notifications
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    scheduleNotification();
  } else {
    console.error("Notification permission denied");
  }
});
