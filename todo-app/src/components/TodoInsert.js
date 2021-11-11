import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './scss/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {

  const [ value, setValue ] = useState ('');

  const onChange = useCallback( e => {
    setValue(e.target.value);
  },[]);  //두번 째 배열에 조건이 없으므로 처음 렌더링 될 때 생성

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      //submit 이벤트는 브라우저에서 새로고침을 발생시킴, 이를 방지
      e.preventDefault();
    },
    [onInsert, value]
  )
  return (
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
  );
};

export default TodoInsert;
