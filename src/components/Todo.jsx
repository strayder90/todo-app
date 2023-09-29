import React, { useState } from "react";
import PropTypes from "prop-types";

import { HeaderTitle } from "@components/HeaderTitle.jsx";
import "@assets/styles/todo.css";

import { AddTodo } from "./AddTodo.jsx";
import { TodosList } from "./TodosList.jsx";
import { useFetch } from "../hooks/useFetch.jsx";

export const Todo = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  const { data: todos, isLoading, Error, handleDelete } = useFetch("http://localhost:8000/todos");

  const toggleInput = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {Error && <p>{Error}</p>}
      <HeaderTitle text={text} toggleInput={toggleInput} />
      {toggle && <AddTodo />}
      {isLoading && <h3>Loading...</h3>}
      {todos && !isLoading && <TodosList todos={todos} handleDelete={handleDelete} />}
    </>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
};
