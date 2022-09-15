import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// 오타방지를 위한 개선책
const ADD = "ADD"
const MINUS = "MINUS"

// 현 상태를 불러오는 함수 (변화 가능한 데이터, action)
// 변화할 상태값이 없다면 지정할 기본값도 입력 가능
// action은 reducer와 소통할 방식
const reducer = (count = 0, action) => {
  // if - else 문보다 간단한 방식: switch

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState(); // 숫자 카운드 변화를 감지
};

// 변화를 store에서 감지하고 싶을 경우 : subscribe 활용
// sore 변화시 바뀔 값 입력.
store.subscribe(onChange);

// 리듀서에게 액션 보내기: dispatch 사용
// dispatch가 reducer 불러오기, 현재값과 action을 조합
// action은 object 형식으로 문자열로 입력시 오류 발생
// type은 사전에 정의된 키워드를 활용함.
const handleAdd = () => {
  store.dispatch({ type: ADD });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', () => store.dispatch({ type: MINUS }));

// subscribe : store 안의 변화를 알게 해줌
