//배경화면 바꾸기!!

//힌트 증감연산자, if문, 배열

// 1. doc에서 트리거를 불러온다

const btn = document.querySelector(".bg");

//2. 가상클라스를 배열 형태로 가져온다

const colors = ["black", "blue", "red", "yellow"];

//3. 트리거인 btn에 addEventlistener로 이벤트 작성

let i = 0; // i를 이벤트 안에 넣으면 클릭할때마다 i=0이 실행되어서 전역변수로 설정

btn.addEventListener("click", () => {
  const bg = document.querySelector("#wrap"); // 가상클라스를 부여할 대상 불러왔음
  i++; //증감연산자를 먼저 써야 click을 했을때 i가 증가
  if (i >= colors.length) {
    i = 0; // 한바퀴 다 돌았을 경우 초기화
  }
  bg.classList = "";
  bg.classList.add(colors[i]);
});

//이미지 전환하기
//if와 else if문 활용
//setAttribute 속성부여 이벤트 활용

const pic = document.querySelector(".pic");

let num = 1; //1부터 시작

//gallery라는 함수를 정의

const gallery = (e) => {
  if (e) {
    if (num === 9) return;
    num++; //num이 9가 될 때 까지가 참
  } else {
    if (num === 1) return;
    num--; //else if는 if가 거짓일때 실행됨 // num이 10이 되었을때 num이 1이 될때까지 반환하여 증감연산자로 반환
  }
  pic.setAttribute(
    "style",
    `background: url('/images/pic_${num}.jpg') center/cover no-repeat`
  );
};
