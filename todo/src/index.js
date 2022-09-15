import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// 단위 나누기 함수: action 값 리턴
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// object 반환만 가능하며 인수 변경이 불가능함
// 변경법은? 직접적인 변경이 아닌 새로운 객체 state를 return
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // 스프레드 연산자를 통해 배열의 얕은 복사로 원본값만 참조 결국 두가지 값을 모두 가지는 형태
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      // id값이 안맞으면 배열에 남아있고 결과를 새로운 배열로 반환
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// 단위 나누기: 함수를 불러옴 인자값을 받으면 위에서 처리
const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  dispatchAddTodo(todo);
  // action을 통해 원하는 정보를 전송할 수 있음
  // store 수정은  action 전송으로만 가능하다
};

form.addEventListener('submit', onSubmit);
