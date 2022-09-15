import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (count = 0, action) => {

  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};
const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState(); // 숫자 카운드 변화를 감지
}
store.subscribe(onChange)

const handleAdd = () => {
  store.dispatch({ type: 'ADD' });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', () => store.dispatch({ type: 'MINUS' }));

// subscribe : store 안의 변화를 알게 해줌