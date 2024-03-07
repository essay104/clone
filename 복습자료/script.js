// const select = document.querySelector("#study");

// select.addEventListener("change", () => {
//   const option = document.querySelectorAll("option".values);
//   window.location.href = option;
// });

const select = document.querySelector("#study");

select.addEventListener("change", () => {
  const selectedOption = select.value;
  window.location.href = selectedOption;
});
