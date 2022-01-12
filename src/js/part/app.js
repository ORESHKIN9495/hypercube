const device =
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );

const w = window;
const d = document;
const body = document.body;
const navbar = document.querySelector("nav");

// Check user device agent
device ? body.classList.add("__mobile") : body.classList.add("__desktop");

// Scroll position
var scrollPosition = 0;

// Section scroll offset
var scrollOffset = 125;

function switchNavbar() {
  navbar.className == ""
    ? (navbar.className = "active")
    : (navbar.className = "");
}

function moveTo(e) {
  let section = w.pageYOffset + d.querySelector(e).getBoundingClientRect().top;

  // If section is close to page's bottom then window will scroll only to some position above the element.
  let targetY =
    body.scrollHeight - section < w.innerHeight
      ? body.scrollHeight - w.innerHeight
      : section;

  navbar.classList.remove("active");

  w.scrollTo(0, w.pageYOffset + targetY - w.pageYOffset - scrollOffset);
}

w.addEventListener("scroll", () => {
  const currentPosition = w.pageYOffset;

  currentPosition <= 0 ? body.classList.remove("scroll-up") : "";

  if (
    currentPosition - 20 > scrollPosition &&
    !body.classList.contains("scroll-down")
  ) {
    // down
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentPosition < scrollPosition &&
    body.classList.contains("scroll-down")
  ) {
    // up
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  scrollPosition = currentPosition;
});
