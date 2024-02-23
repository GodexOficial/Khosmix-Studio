const menuLinks = document.querySelectorAll('.kheader a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scrollTo({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToDiv(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToDiv);
});
window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".button");
  scroll.classList.toggle("active", window.scrollY > 100);
});
function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
