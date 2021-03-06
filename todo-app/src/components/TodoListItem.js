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

const TodoListItem = ({ todo, style, onRemove, onToggle, onToggleUpdate, onUpdateState }) => {

  const { id, text, checked, update } = todo;

  //수정
  const [ value, setValue ] = useState ('');
  const onChange = useCallback( e => {
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback( e => {
    if(value !== ''){
      onUpdateState(id, value);
      setValue('');
    }
    e.preventDefault();
  },
  [onUpdateState, value]
);

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem" >
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
    </div>
  );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
