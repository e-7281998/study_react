import React from 'react';
import TodoListItem from './TodoListItem';
import './scss/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle, onToggleUpdate, onUpdateState}) => {
  return (
      <div className="TodoList">
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}
            onToggleUpdate={onToggleUpdate} onUpdateState={onUpdateState} />
        ))}
      </div>
  );
};

export default React.memo(TodoList);
