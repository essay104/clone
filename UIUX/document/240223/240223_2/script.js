const cButtons = document.querySelector(".check");
const dButtons = document.querySelector(".delete");

dButtons.addEventListener("click", function () {
  this.parentNode.remove();
});
