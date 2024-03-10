const select = document.querySelector("#study");

select.addEventListener("change", () => {
  const option = document.querySelectorAll("option".values);
  window.location.href = option;
});

// 시간에 따라 제목 출력하기

const today = new Date();
const hrs = today.getHours();

console.log(hrs); //시간

const title = document.querySelector("h1"); //문구가 나오도록 위치할 곳

title.textContent = ""; // 문구 삭제

const time = () => {
  if (hrs >= 6 && hrs < 12) {
    title.textContent = "Good Morning!!";
  } else if (hrs >= 10 && hrs < 18) {
    title.textContent = "Good Afternoon!!";
  } else {
    title.textContent = "Good Night!!";
  }
};

setInterval(time(), 1000 * 60 * 60);
