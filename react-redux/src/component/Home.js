import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store';
import Todo from './Todo';

function Home() {
  const [text, setText] = useState('');
  const onChange = (event) => {
    setText(event.target.value);
  };
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} />
        ))}
      </ul>
    </>
  );
}

export default Home;
