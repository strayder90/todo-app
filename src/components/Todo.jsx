import React, { useState } from "react";
import PropTypes from "prop-types";

import { HeaderTitle } from "@components/HeaderTitle.jsx";

import { AddTodo } from "./AddTodo.jsx";
import "@assets/styles/todo.css";

export const Todo = ({ text }) => {
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

Todo.propTypes = {
  text: PropTypes.string,
};
