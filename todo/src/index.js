const from = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createToDo = todo => {
  const li = document.createElement("li") // 2. 리스트 item을 제작
  li.innerHTML = todo; // 3. 리스트의 텍스트는 todo (인자로 받은 문자열)
  ul.appendChild(li); // 4. 리스트에 추가
};

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value
  input.value = "";
  createToDo(todo); // 1. 입력 텍스트 문자를 인자로 createTodo 실행
}

from.addEventListener("submit", onSubmit); // 0. 문자열을 입력하여 전송한 이후 발생 로직