//popup창 만들기

const popup = document.querySelector(".header_popup p");
const popupWidth = 675;
const popupHeight = 845;

const popupChangeOver = () => {
  popup.innerText = "Pl League Table";
  popup.style.cursor = "pointer";
  popup.style.transition = "all 0.5s";
  popup.style.color = "#ff0000";
};
popup.addEventListener("mouseout", () => {
  popup.innerText = `정상을 향한 위대한 여정`;
  popup.style.transition = "all 0.5s";
  popup.style.color = "#fff";
});

popup.addEventListener("mouseover", popupChangeOver);

popup.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  const top = (window.screen.availHeight - popupHeight) / 2;
  window.open(
    "popup.html",
    "LeagueTable",
    `width = ${popupWidth} height = ${popupHeight} left = ${left} top= ${top}`
  );
});

//scroll 이동 이벤트

const scrollButton = document.querySelector(".scrollButton");
const logo = document.querySelector(".logo");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 1080,
    behavior: "smooth",
  });
});

logo.addEventListener("click", () => {
  window.scroll({
    top: 0,
  });
});

//날짜 이벤트

const today = new Date();
const finalDay = new Date(2024, 4, 20);
const displayTime = document.querySelector("currentTime");

seasonEnd = () => {
  const seasonEndTime = finalDay - today;
  const seasonEndDay = Math.floor(seasonEndTime / (24 * 60 * 60 * 1000));
  const leftDay = document.querySelector(".leftDay");
  leftDay.innerText = `시즌종료까지 ${seasonEndDay}일!!`;
};

seasonEnd();

const clock = document.querySelector(".currentTime");

const time = () => {
  let current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  if (hrs === 0) {
    hrs = 12;
  } else if (hrs === 24) {
    hrs = 0;
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;
  // 삼항조건연산자

  clock.innerText = `${hrs} : ${mins} : ${secs}`;
};

setInterval(time, 1000);

//iframe

const contentFrame = document.querySelector("#contentFrame");
const city = document.querySelector(".manBtn");
const liverpool = document.querySelector(".liverBtn");
const arsenal = document.querySelector(".arsenalBtn");

city.addEventListener("click", () => {
  contentFrame.setAttribute("src", "./city.html");
});
liverpool.addEventListener("click", () => {
  contentFrame.setAttribute("src", "./liverpool.html");
});
arsenal.addEventListener("click", () => {
  contentFrame.setAttribute("src", "./arsenal.html");
});