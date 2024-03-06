const infoT = document.querySelector("#tall");
const infoW = document.querySelector("#weight");

const infoTW = [infoT, infoW];
console.log(infoTW);

infoTW.forEach((e) => {
  e.addEventListener("focus", () => {
    e.setAttribute("placeholder", "");
  });
});

//forEach() : 배열에 대해 함수를 실행하는 메소드
//setAttribute : 해당 변수의 속성값을 정의
//e:element 각 배열의 요소를 의미

// 적정체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정체중 구하는 공식을 통한 결과값 +- 5kg까지 허용!

// 1.사용자에게 키값을 받아온다
// 2.사용자에게 몸무게값을 받아온다
// 3.사용자에게 받아온 키 & 몸무게값을 가지고 적정체중을 구한다
// 4.적정체중을 구한 이후에 +- 5kg의 범위를 설정한다
// 5.적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다
// 6.최종 결과값을 웹 브라우저 화면에 출력한다

const btn = document.querySelector("#btn");
const res = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const infoT = document.querySelector("#tall").value;
  const infoW = document.querySelector("#weight").value;
  const calC = (infoT - 100) * 0.9;
  const result =
    infoW >= calC - 5 && infoW <= calC + 5
      ? `적정 체중입니다`
      : `적정 체중이 아닙니다 노력하세요`;
  res.innerHTML = result;
});
