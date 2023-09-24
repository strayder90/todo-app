import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderTitle } from '@components/HeaderTitle.jsx';

import { AddTodo } from './AddTodo.jsx';
import '@assets/styles/todoList.css';

export const TodoList = ({ text }) => {
  const [toggle, setToggle] = useState(false);

  const toggleInput = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <HeaderTitle text={text} toggleInput={toggleInput} />
      {toggle && <AddTodo />}
    </>
  );
};

TodoList.propTypes = {
  text: PropTypes.string,
};
