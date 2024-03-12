const chars = document.querySelectorAll(".character");

window.addEventListener("wheel", (e) => {
  if (scrollY < 1080) {
    if (e.deltaY > 0) {
      window.scroll({
        top: 1280,
        behavior: "smooth",
      });
      chars.forEach((char) => {
        char.classList.add("active");
      });
    } else if (e.deltaY < 0) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      chars.forEach((char) => {
        char.classList.remove("active");
      });
    }
  }
});
