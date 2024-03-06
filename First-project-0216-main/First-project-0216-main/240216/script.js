const gnb = document.querySelector(".gnb");
console.log(".gnb");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    gnb.classList.add("active");
  } else {
    gnb.classList.remove("active");
  }
});

$(".top").click(function (e) {
  $.scrollTo(this.hash || 0, 1000);
  e.preventDefault();
});

$("li a").click(function (e) {
  $.scrollTo(this.hash || 0, 1000);
  e.preventDefault();
});
