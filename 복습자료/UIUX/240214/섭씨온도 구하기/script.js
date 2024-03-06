// const tem = document.querySelector("input[type=text]").value;
// const btn = document.querySelector("input[type=submit");
// const cel = ((tem - 32) / 1.8).toFixed(1); //toFixed = 반올림함수
// const result = document.querySelector(".result");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!isNaN(tem)) {
//     result.innerText = `화씨 ${tem}도는 섭씨 ${cel}도 입니다!`;
//   }
// });

const btn = document.querySelector("input[type=submit]");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  const tem = Number(document.querySelector("input[type=text]").value);
  const cel = ((tem - 32) / 1.8).toFixed(1); //toFixed = 반올림함수

  if (!isNaN(tem)) {
    result.innerText = `화씨 ${tem}도는 섭씨 ${cel}도 입니다!`;
  }
});
