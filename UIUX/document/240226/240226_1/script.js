const now = new Date();
const firstDay = new Date(2024, 0, 9);
const result = document.querySelector("#container p");

const con = document.querySelector("container");

const passedTime = now - firstDay;
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000)); //하루 = 24 시간 * 60 분 * 60초 * 1000밀리초

const eventDay = () => {
  result.innerText = `${passedDay}일 만큼 지났습니다.`;
};

eventDay();
