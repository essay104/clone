const btn1 = document.querySelector("form");
const textBox = document.querySelector("input[type=text]");
const result1 = document.querySelector(".result");
const result2 = document.querySelector(".result2");

// console.log(btn1, textBox);

btn1.addEventListener("submit", () => {
  let gameNum = 0;

  switch (textBox.value) {
    case "찌":
      gameNum = 1;
      break;
    case "묵":
      gameNum = 2;
      break;
    case "빠":
      gameNum = 3;
      break;
    default:
      result1.innerText = `잘못 작성했습니다`;
  }

  const com = Math.ceil(Math.random() * 3);
  result1.innerHTML = `<img src="./images/section01/math_img_${com}.jpg">`;

  if (gameNum == com) {
    result2.innerText = `무승부!!`;
  } else {
    result2.innerText = `승부났음!!`;
  }
});

//section02

const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result3");

const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  userChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부!";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "보가위":
      case "가위바위":
      case "바위보":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});

//section03

window.onload = () => {
  const bgCount = 5;
  const randomNum = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(./images/section03/bg-${randomNum}.jpg)`;
};
