// 사용자가 이메일주소를 입력하면, result 공간에 사용자의 이메일 정보를 출력하게 해주세요!!!
// split = 문자열을 배열화

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("#userInput");
const btn = document.querySelector("input[type=`submit");
const result = document.querySelector("#result");

emailSearch = (e) => {
  e.preventDefault();
  let username = "";
  let domain = "";

  if (userEmail.value != "") {
    userName = userEmail.value.split("@")[0];
  }
};

form.addEventListener("submit", emailSearch);
