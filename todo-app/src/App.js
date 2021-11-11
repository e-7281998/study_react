import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '라우팅',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;  //nextId에 1씩 더하기
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter( todo => todo.id !== id ));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          // 배열 하나하나 돌면서 id값을 비교해라.
          // 지금 선택된 id와 값이 같다면 앞의 배열들은 그대로 두고,
          // checked 상태를 반대로 해라.
          // id 값이 같다면 그대로 둬라
          todo.id === id ? { ...todo, checked : !todo.checked } : todo
        ),
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
