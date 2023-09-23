import React, { useState } from "react";
import PropTypes from "prop-types";

import { AddTodo } from "./AddTodo.jsx";
import "../assets/styles/todoList.css";

export const TodoList = ({ text }) => {
  const [toggle, setToggle] = useState(false);

  const toggleInput = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="wrapper">
        <h1 className="title">
          {text}
          <span>
            <i
              onClick={toggleInput}
              role="button"
              tabIndex={0}
              onKeyDown={toggleInput}
              className="pencil alternate small icon"
            ></i>
          </span>
        </h1>
      </header>
      {toggle && <AddTodo />}
    </>
  );
};

TodoList.propTypes = {
  text: PropTypes.string,
};
