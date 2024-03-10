// //1. 바탕화면 바꾸기 (addclassevent)

// const container = document.querySelector("#container");
// const colors = ["black", "blue", "red", "yellow"];
// const btn = document.querySelector(".bg");

// let i = 0;

// btn.addEventListener("click", () => {
//   i++;
//   if (i >= colors.length) {
//     i = 0;
//   }
//   container.classList = "";
//   container.classList.add(colors[i]);
// });

// console.log(btn);

// 이미지 전환하기!!

const pic = document.querySelector("#wrap");

let num = 1;

const gallery = (e) => {
  if (e) {
    if (num === 9) return;
    num++;
  } else if (num === 1) return;
  num--;
  pic.setAttribute("style", `background:url('/images/pic_${num}.jpg')`);
};
