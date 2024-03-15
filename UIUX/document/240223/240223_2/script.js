const cButtons = document.querySelector(".check");
const dButtons = document.querySelector(".delete");
const products = document.querySelector("#products");

dButtons.addEventListener("click", function () {
  products.classList.add("none");
});

cButtons.addEventListener("click", () => {
  products.classList.remove("none");
});
