import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { HeaderTitle } from "@components/HeaderTitle.jsx";

import { AddTodo } from "./AddTodo.jsx";
import { TodosList } from "./TodosList.jsx";
import "@assets/styles/todo.css";

export const Todo = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([]);

  const toggleInput = () => {
    setToggle(!toggle);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const fetchedData = async () => {
    const result = await fetch("http://localhost:8000/todos");
    const data = await result.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
      <HeaderTitle text={text} toggleInput={toggleInput} />
      {toggle && <AddTodo />}
      <TodosList todos={todos} handleDelete={handleDelete} />
    </>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
};
