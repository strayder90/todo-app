import React, { useState } from "react";
import PropTypes from "prop-types";

import "@assets/styles/todo.css";

import { HeaderTitle } from "@components/HeaderTitle.jsx";

import { AddTodo } from "./AddTodo.jsx";
import { TodosList } from "./TodosList.jsx";
import { useFetch } from "../hooks/useFetch.jsx";

export const Todo = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  const { data: todos, isLoading, error, addDoc } = useFetch();

  const toggleInput = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {error && <>{error}</>}
      {!isLoading && <HeaderTitle text={text} toggleInput={toggleInput} />}
      {toggle && !error && <AddTodo addDoc={addDoc} />}
      {isLoading && !error && <h3>Loading...</h3>}
      {todos && !isLoading && <TodosList todos={todos} />}
    </>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
};
