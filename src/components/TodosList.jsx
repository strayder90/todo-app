import React from "react";
import PropTypes from "prop-types";

export const TodosList = ({ todos, handleDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func,
};
