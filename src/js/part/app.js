const device =
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );
if (device) {
  document.body.classList.add("__mobile");
} else {
  document.body.classList.add("__desktop");
}
