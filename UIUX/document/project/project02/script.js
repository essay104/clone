// 워밍업!!

const text = document.querySelector('input[type="text"]');
const form = document.querySelector("form");

text.addEventListener("click", () => {
  text.placeholder = "";
});

// 1단계 todo 이벤트 만들기

console.log(form);

const createItems = (e) => {
  e.preventDefault();

  const createElement = (listId, item) => {
    const list = document.querySelector(`#${listId}`);
    const item = document.createElement("div");
  };

  const createTodo = (e) => {
    e.preventDefault();
    
  };
};

form.addEventListener("submit", createItems);
