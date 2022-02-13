import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  function createBulkTodos() {
    const array = [];
    for(let i=1; i<= 2500; i++){
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false,
        update: false,
      });
    }
    return array;
  }

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);
//TodoInsert
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        update: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;  //nextId에 1씩 더하기
    },
  []
  );
//TodoList
  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter( todo => todo.id !== id));
    },
    []
  );

  const onToggle = useCallback(
    id => {
      setTodos( todos =>
        todos.map(todo =>
          // 배열 하나하나 돌면서 id값을 비교해라.
          // 지금 선택된 id와 값이 같다면 앞의 배열들은 그대로 두고,
          // checked 상태를 반대로 해라.
          // id 값이 같다면 그대로 둬라

          todo.id === id ? { ...todo, checked : !todo.checked } : todo
        ),
      );
    },
    []
  );

  const onToggleUpdate = useCallback(
    id => {
      setTodos( todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, update : !todo.update } : todo
        ),
      );
    },
    []
  );

  const onUpdateState = useCallback(
    (id, value) => {
      setTodos( todos =>
        todos.map(todo =>
        todo.id === id ? {...todo, text : value, update: false} : todo
        ),
      );
    },
    []
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}
        onToggleUpdate={onToggleUpdate} onUpdateState={onUpdateState}/>
    </TodoTemplate>
  );
};

export default App;
