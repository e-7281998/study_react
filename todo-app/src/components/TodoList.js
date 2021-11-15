import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './scss/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle, onToggleUpdate, onUpdateState}) => {

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];

      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove ={onRemove}
          onToggle={onToggle}
          onToggleUpdate={onToggleUpdate}
          onUpdateState={onUpdateState}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle, onToggleUpdate, onUpdateState]
  );

  return (
    <List
      className="TodoList"
      width={495.33}
      height={513}
      rowCount={todos.length} //항목 개수
      rowHeight={57}
      rowRenderer={rowRenderer} //항목을 렌더링할 때 쓰는 함수
      list={todos}  //배열
      stype={{outline:'none'}} //List에 적용되는 outline 제거
    />
  );
};

export default React.memo(TodoList);
