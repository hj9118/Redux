import React from 'react';
import { useDispatch } from 'react-redux';

function Todo({ text }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteTodo(id));
  };
  return <button onClick={onClick}>❌</button>;
}

export default Todo;
