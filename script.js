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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hidden");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
