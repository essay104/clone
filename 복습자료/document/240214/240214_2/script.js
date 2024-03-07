// 1.사용자가 입력한 소비자가를 찾아온다
// 2.사용자가 입력한 할인률값을 찾아온다
// 3.사용자가 "할인 가격 계산하기" 버튼을 클릭한다면, 이벤트가 작동하게해준다
// 4.계산 이벤트를 정의
// 5."할인된 가격 출력" 공간에 계산된 값을 출력시켜준다
const btn = document.querySelector("#button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const payPrice = document.querySelector("#price").value;
  const saleRate = document.querySelector("#rate").value;
  const calcPrice = payPrice * (saleRate / 100);
  const realPrice = payPrice - calcPrice;
  const result = document.querySelector("#showResult");
  result.innerText = `고객님 께서 지불하실 금액은 ${realPrice}원 입니다!`;
});

///////.value는 일반적으로 이벤트 핸들러 내부에서 사용한다!!!!!!!!!!!!!!!!!!!!!
