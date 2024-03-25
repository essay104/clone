const string = prompt("영문 소문자로 된 문자열을 입력하세요!");

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);

//1. slice()
// 배열의 일부를 추출해서 새로운 배열을 반환

//2. join()
// 배열의 모든 요소를 하나의 문자열로 결합
