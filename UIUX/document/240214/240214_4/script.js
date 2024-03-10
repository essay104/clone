// 1.교통비, 식비, 음료비를 받는다
// 2.사용자로부터 받은 3개의 값을 계산한다
// 3.계산된 값이 1만원 미만인지 여부를 확인한다!!
// 4.계산된 값의 결과값에 따라서 "A"메세지를 출력할지, "B"메세지를 출력할지 결정
// 5.최종 결정된 메세지를 웹 브라우저 화면에 출력한다

const result = document.querySelector("#result");
const btn = document.querySelector("button");

if (result != null) {
  btn.addEventListener("click", () => {
    const traffic = Number(prompt("지출한 교통비를 기입하세요"));
    const eat = Number(prompt("지출한 식비를 입력하세요!"));
    const drink = Number(prompt("음료비를 입력하세요"));
    const sum = traffic + eat + drink;
    if (10000 - sum > 0) {
      result.innerText = `잘하셨어요! ${sum}원만큼 지불하셨습니다!`;
    } else if (10000 - sum < 0) {
      result.innerText = `혼날래요?`;
    }
  });
}
