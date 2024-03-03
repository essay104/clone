// const hiYo = alert("안녕하세요");
const btn = document.querySelector(".btn");
const resultBox = document.querySelector(".outputBox");
const body = document.querySelector("body");
const darkMode = document.querySelector(".darkMode");
const header = document.querySelector(".practice_header");
// const label = document.querySelector("label");
// console.log(userBirth, resultBox);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const userBirth = document.querySelector("#month").value;
  if (userBirth <= 12) {
    // if (userBirth === "1") {
    //   resultBox.innerHTML =
    //     "상큼한 사랑을 하게 되는 매우 좋은 달 입니다. 당신의 진솔함과 순수한 감정을 충분히 발휘하시길 바랍니다. 아껴왔던 아이템을 사업화 시킬 수 있는 기회가 옵니다. 창업을 준비하는 사람이라면 창업운도 있습니다. 여의치 않은 상황임에도 귀인을 만날 수 있는 기운이 있습니다. 재물과 연결 될 수도 있겠습니다. 건강한 한 달이며 허리 쪽에 신경을 좀 더 써야 하겠습니다. 재물과 관련해서는 큰 변화는 없으나 마음의 안정을 찾을 수는 있겠습니다. 직장에서는 일에 대한 마무리를 잘 짓게 되면 이에 따른 보상이 예상됩니다. 이동운에 관하여 살펴보면 독립에 대한 욕구로 움직이고 싶겠으나 나쁜 기운이 없으니 현재의 위치가 더 낫겠습니다.";
    // } else if (userBirth === "2") {
    //   resultBox.innerHTML =
    //     "멀게만 느껴졌던 재물이 바로 들어오는 달 입니다. 진행하고 있던 일이 있다면 배짱있게 밀고 나가도 좋겠습니다. 횡재수도 보이니 두루 괜찮습니다. 애정운이 모처럼 순수하고 강하게 있으니 편안한 마음으로 받아들이면 될 것입니다. 사업운과 대인운도 매우 좋으니 부담없이 추진하거나 만나면 좋은 결과를 얻을 수 있겠습니다. 직업이나 취업운도 꽤 좋습니다. 건강만 조심하시면 여러모로 매우 좋은 달이 되겠습니다.";
    // } else if (userBirth === "3") {
    //   resultBox.innerHTML =
    //     "직장에서 진행하고 있던 일이 좋게 마무리 됩니다. 지위가 높아질 수도 있으며, 자신의 미래를 설계하기 좋은 시기이기도 합니다. 사업자는 수확의 시기입니다. 새로운 아이템이나 파트너가 생길 수 있습니다. 학업운을 보면 공부에 도움이 되는 상황이 발생하고 귀인의 도움으로 공부가 한결 수월해집니다. 안정적인 사랑이 가능한 달 입니다. 이성 친구로부터 고백을 받을 수 있는 시기이기도 합니다. 금전적으로는 급한 변화를 모색하지 않으면 득이 되는 달이 되겠습니다.";
    // } else if (userBirth === "4") {
    //   resultBox.innerHTML =
    //     "현물 등을 가지고 사업을 하고 있다면 큰 이득이 남고 또한 좋은 거래처가 생기게 됩니다. 자기계발이나 신규 상품을 개발하기에도 좋습니다. 직장인이라면 유통성을 발휘하는 일이 생기겠습니다. 건강은 괜찮은 달이겠습니다. 애정운과 이동운은 좋지는 않으나 큰 이슈는 없을 것 같습니다. 사랑하는 이가 있는 사람이라면 그 연인에게 좀 더 관심을 가져야 좋은 관계가 됩니다. 대인운은 중순 이후부터 풀리겠습니다.";
    // } else if (userBirth === "5") {
    //   resultBox.innerHTML =
    //     "학습능력이 매우 좋은 시기입니다. 그렇다하여 아무런 노력이나 투자 없이 얻게 되는 것은 아닙니다. 사업파트너를 여럿 만나게 됩니다. 사업을 위한 자기계발 하기에 좋은 시기입니다. 직장인은 신중한 결단을 하게 되는데 좋은 기회를 얻게 되는 때입니다.";
    // } else if (userBirth === "6") {
    //   resultBox.innerHTML =
    //     "특별한 이슈나 직접적인 원인이 있지 않더라도 더 나은 상황으로 변화 시키기 위해서 인위적으로 자신의 위치나 장소를 변화 시키는 것도 좋은 방법이 되겠습니다. 학업이나 시험, 합격운이 좋은 편 입니다. 애정, 사랑에 관련한 부분은 크게 무리하지 않으면 문제 없겠습니다. ";
    // } else if (userBirth === "7") {
    //   resultBox.innerHTML =
    //     "귀인과 재운이 동시에 등장하며 집안에서도 경사스런 일이 생깁니다. 이성관계는 깊은 관계로 발전할 수 있는 기운이 매우 강합니다. 평소대로만 대응하시길 바랍니다. 우연한 기회로 귀한 인연을 만날 수 있습니다. 학업운도 좋아 공부에 대한 결실이 보이는 때 입니다. 시험운도 매우 좋아 시험을 봐야 할 것이 있다면 이 시기에 보면 좋겠습니다. 건강운도 좋습니다. ";
    // } else if (userBirth === "8") {
    //   resultBox.innerHTML =
    //     "대인운이 매우 좋은 한 달 입니다. 그냥저냥 알고 지내던 사이가 조만간 좋은 소식을 안겨다 줄 수 있겠습니다. 시험운도 괜찮아서 좋은 소식을 기대해도 되겠습니다. 오랜만에 소화기관이 편안해지니 근사한 외식도 해 볼만 합니다. 크고 작은 이동수가 생길 수 있는데 원래대로 진행하시면 됩니다. 재물과 애정운이 좀 신통치 않은데 지키기만 하셔도 선전하니 크게 염려치 마시길 바랍니다.";
    // } else if (userBirth === "9") {
    //   resultBox.innerHTML =
    //     "이동운이 좋습니다. 좀 무리하다 싶은 생각이 들어도 기회라는 촉이 온다면 도전해봐도 되겠습니다. 직업과 사업도 괜찮은 기운이 드네요. 연관된 일이라면 더없이 좋은 기회가 될 수 있겠습니다. 처음에 마음을 다지고 계획을 세웠던 것처럼 이 시기에도 그러한 마음가짐을 가지고 행동하는 게 유익합니다. 지극히 개인적인 일로는 재물을 소비하지 않는 것이 좋겠습니다.";
    // } else if (userBirth === "10") {
    //   resultBox.innerHTML =
    //     "새로운 보금자리로 이동 할 수 있습니다. 좋은 흐름이니 기회가 된다면 움직이시길 바랍니다. 애정운이 좋습니다. 작은 행동에도 이성에게 좋은 반응을 얻게 되는 군요. 몰랐던 것을 알게 되니 공부하기에 좋은 달 입니다. 재물운은 안정적입니다. 괜찮은 재물 소식도 있을 수 있습니다. ";
    // } else if (userBirth === "11") {
    //   resultBox.innerHTML =
    //     "이동운이 매우 좋은 달이 되겠습니다. 상황이 된다면 이동하는 것이 낫겠습니다. 애정이나 사랑에 관해서는 진중하고 다소 무겁게 처신하는 것이 득이 될 것입니다. 새로운 환경에서의 만남도 괜찮겠습니다. 직장에서의 일이 많아 질 수 있으나 당신의 꿈과 목표에 가까워 지는 것이니 즐거이 받아들이면 되겠습니다. ";
    // } else if (userBirth === "12") {
    //   resultBox.innerHTML =
    //     "직접적이지는 않지만 큰 재물이 들어올 기회를 얻게 되는 달 입니다. 평상시 페이스를 유지하면 되겠습니다. 지인들과 관계를 돈독히 하기 좋은 시기입니다. 학업운도 좋아 깊이 있는 공부를 해도 괜찮겠습니다. 사업자는 수익률이 떨어질 수 있으나 전체적인 흐름에서 큰 영향을 주지는 않습니다. 가지고 있으면서 모든 것을 수익화 시키지 못했으니 멀지 않은 주위에서 아이템을 찾기 바랍니다. 이동수가 있더라도 개인운과는 크게 관련이 없는 이동이겠습니다. ";
    // }
    // if ((userBirth = ![1, 2, 3, 4...12])) {
    //   resultBox.innerHTML = "다시 입력해 주세요";
    // }
    switch (userBirth) {
      case "1":
        resultBox.innerHTML =
          "상큼한 사랑을 하게 되는 매우 좋은 달 입니다. 당신의 진솔함과 순수한 감정을 충분히 발휘하시길 바랍니다. 아껴왔던 아이템을 사업화 시킬 수 있는 기회가 옵니다. 창업을 준비하는 사람이라면 창업운도 있습니다. 여의치 않은 상황임에도 귀인을 만날 수 있는 기운이 있습니다. 재물과 연결 될 수도 있겠습니다. 건강한 한 달이며 허리 쪽에 신경을 좀 더 써야 하겠습니다. 재물과 관련해서는 큰 변화는 없으나 마음의 안정을 찾을 수는 있겠습니다. 직장에서는 일에 대한 마무리를 잘 짓게 되면 이에 따른 보상이 예상됩니다. 이동운에 관하여 살펴보면 독립에 대한 욕구로 움직이고 싶겠으나 나쁜 기운이 없으니 현재의 위치가 더 낫겠습니다.";
        break;
      case "2":
        resultBox.innerHTML = resultBox.innerHTML =
          "멀게만 느껴졌던 재물이 바로 들어오는 달 입니다. 진행하고 있던 일이 있다면 배짱있게 밀고 나가도 좋겠습니다. 횡재수도 보이니 두루 괜찮습니다. 애정운이 모처럼 순수하고 강하게 있으니 편안한 마음으로 받아들이면 될 것입니다. 사업운과 대인운도 매우 좋으니 부담없이 추진하거나 만나면 좋은 결과를 얻을 수 있겠습니다. 직업이나 취업운도 꽤 좋습니다. 건강만 조심하시면 여러모로 매우 좋은 달이 되겠습니다.";
        break;
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
      case "11":
      case "12":
        resultBox.innerHTML =
          "직장에서 진행하고 있던 일이 좋게 마무리 됩니다. 지위가 높아질 수도 있으며, 자신의 미래를 설계하기 좋은 시기이기도 합니다. 사업자는 수확의 시기입니다. 새로운 아이템이나 파트너가 생길 수 있습니다. 학업운을 보면 공부에 도움이 되는 상황이 발생하고 귀인의 도움으로 공부가 한결 수월해집니다. 안정적인 사랑이 가능한 달 입니다. 이성 친구로부터 고백을 받을 수 있는 시기이기도 합니다. 금전적으로는 급한 변화를 모색하지 않으면 득이 되는 달이 되겠습니다.";
        break;
    }
  } else {
    resultBox.innerHTML = "다시 입력해 주세요";
  }
});

darkMode.addEventListener("click", function () {
  body.classList.toggle("darkModeOn");
  header.classList.toggle("darkModeOnHeader");
});

const label = document.querySelector(".monthS");
const inputBox = document.querySelector("#month");

console.log(inputBox, label);

// inputBox.onclick = function () {
//   label.classList.toggle("hidden");
// };

// inputBox.addEventListener("click", () => {
//   label.classList.toggle("hidden");
// });

inputBox.addEventListener("click", () => {
  label.classList.remove("monthS");
});

const aClass = document.querySelector(".A_class");
const bClass = document.querySelector(".B_class");
const cClass = document.querySelector(".C_class");
const scoreSubmit = document.querySelector(".score_submit");

scoreSubmit.addEventListener("click", function () {
  const score = document.querySelector(".submit_your_score").value;
  if ((score >= 100, score >= 0)) {
    if (score >= 80) {
      aClass.classList.toggle("class_open");
      bClass.classList.remove("class_open");
      cClass.classList.remove("class_open");
    } else if (score >= 60) {
      bClass.classList.toggle("class_open");
      aClass.classList.remove("class_open");
      cClass.classList.remove("class_open");
    } else if (score >= 0) {
      cClass.classList.toggle("class_open");
      aClass.classList.remove("class_open");
      bClass.classList.remove("class_open");
    } else {
      const result = document.querySelector(".result_box");
      result.innerHTML = "다시 입력해 주세요";
    }
  }
});

const good = document.querySelector(".true");
const bad = document.querySelector(".false");

good.addEventListener("click", () => {
  const QzResult = document.querySelector(".QzResult");
  QzResult.innerHTML = "정답입니다!!!";
});
bad.addEventListener("click", () => {
  const QzResult = document.querySelector(".QzResult");
  QzResult.innerHTML = "오답입니다!!!";
});

//삼항조건연산자

const chosenQz = document.querySelector(".Qz_button");
const chosenYear = document.querySelector(".chosen");

chosenQz.addEventListener("click", () => {
  const chosenYear = document.querySelector(".chosen").value;
  const chosenResult = (chosenYear = 1392 ? "정답입니다" : "오답입니다");
  const qz2Result = document.querySelector(".Qz2Result");
  qz2Result.innerHTML = chosenResult;
  console.log(chosenResult);
});
