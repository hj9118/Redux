import { createStore } from 'redux';
//store 데이터를 넣을 state

const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (count = 0) => {
  // 이 안에 들어오는 것이 데이터가 될 것
  
  // 이게 return으로 수행할 수 있는 방법은? action
  count++;
  count--;
};
const store = createStore(reducer);

// let count = 0;
// 유일하게 데이터가 변하는 지점, state 역할
