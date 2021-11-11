import React from 'react';
import TodoListItem from './TodoListItem';
import './scss/TodoList.scss';

<<<<<<< HEAD
const TodoList = ({ todos, onRemove, onToggle, onToggleUpdate, onUpdateState}) => {
  return (
      <div className="TodoList">
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}
            onToggleUpdate={onToggleUpdate} onUpdateState={onUpdateState} />
=======
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
      <div className="TodoList">
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
>>>>>>> 66c1e3d16f1ec26e5df83031e699d42b683d35a4
        ))}
      </div>
  );
};

export default TodoList;
