// 트리거와 이미지 배열을 불러오기

const btns = document.querySelectorAll(".btn");
const imgs = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];

//백그라운드 속성을 부여할 공간
const main = document.querySelector(".main");

let i = 0; //초기 값 설정

main.style.background = `url(./images/${imgs[0]})`; //main이라는 공간에 스타일 정의

//유사배열에 forEach(각 배열 개체에 적용할 수 있는 매서드) 적용 //각 btns요소에 addEventListener 적용
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains === "left") {
      i--; // element에 left라는 클래스가 포함되었을 때 (참) -- 증감연산자 적용
      if (i < 0) {
        i = imgs.length - 1;
      } //단 i가 0보다 작아질 경우 (참) i는 이미지의 갯수 (0,1,2,3,4,5 총 6개) -1, 즉 imgs.5로 되돌아감
    } else if (e.target.classList.contains === "right") {
      i++; //left클래스가 포함되지 않았을 때 (거짓) 요소에 right라는 클래스가 포함되어 있다면 ++연산자를 적용
      if (i > imgs.length) {
        i = 0; // 단 i가 이미지의 갯수(length) = 6보다 커졌을때 i는 0으로 돌아간다 (img.0)
      }
    }
    main.style.background = `url(./images/${imgs[i]})`; //btn을 click했을때 main에 백그라운드 스타일을 적용한다
  });
});

// console.log(btns)
