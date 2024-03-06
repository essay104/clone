const menu = document.querySelector("#study");
const btn = document.querySelector(".move");
const option = document.querySelectorAll("option");

movingPage = () => {
  window.location.href("index2.html");
};

btn.addEventListener("click", movingPage);
