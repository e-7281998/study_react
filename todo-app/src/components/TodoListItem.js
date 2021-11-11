import React, { useCallback, useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from 'react-icons/md';
import {
  BsPencilFill
} from 'react-icons/bs';
import cn from 'classnames';
import './scss/TodoListItem.scss';

<<<<<<< HEAD
const TodoListItem = ({ todo, onRemove, onToggle, onToggleUpdate, onUpdateState }) => {

  const { id, text, checked, update } = todo;

  //수정
  const [ value, setValue ] = useState ('');
=======
const TodoListItem = ({ todo, onRemove, onToggle }) => {
>>>>>>> 66c1e3d16f1ec26e5df83031e699d42b683d35a4

  const onChange = useCallback( e => {
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback( e => {
    onUpdateState(id, value);
    setValue('');
    e.preventDefault();
  },
  [onUpdateState, value]
);

  return (
    <div className="TodoListItem">
      <div className={cn('checkBox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <form className={ update ? cn('updateBoxShow') : cn('updateBox')} onSubmit={onSubmit}>
        <input
          placeholder={text}
          onChange={onChange}
          value={value}
        />
        <button className="updateBtn" type="submit">수정</button>
      </form>
      <div className="update" onClick={() => onToggleUpdate(id)}>
        <BsPencilFill />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
