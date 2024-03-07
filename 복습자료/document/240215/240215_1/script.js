const result = document.querySelector("#result");

for (let a = 2; a <= 9; a++) {
  result.innerText = "<h2>" + "[ 구구단 " + a + "단 ]" + "</h2>";
  for (let b = 1; b <= 9; b++) {
    result.innerText = a + " x " + b + " = " + a * b;
    result.innerText = "<br/>";
  }
}
