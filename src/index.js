const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0; // 숫자 변수화

number.innerText = count;

const updateText = () => {
  number.innerText = count; // 숫자 갱신용 함수
};


// 이벤트에 대한 함수 정의 
const handleAdd = () => {
  count += 1;
  updateText(); // 숫자 변화. 없을 경우 실행은 되나 변화하지 않음.
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

// 클릭시 이벤트 발생
plus.addEventListener('click', handleAdd); 
minus.addEventListener('click', handleMinus);
