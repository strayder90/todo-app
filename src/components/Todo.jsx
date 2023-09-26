import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { HeaderTitle } from "@components/HeaderTitle.jsx";

import { AddTodo } from "./AddTodo.jsx";
import { TodosList } from "./TodosList.jsx";
import "@assets/styles/todo.css";

export const Todo = ({ text }) => {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleInput = () => {
    setToggle(!toggle);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const result = await fetch("http://localhost:8000/todos");
        const data = await result.json();

        setTodos(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        throw Error("Failed to fetch data!", { error });
      }
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
