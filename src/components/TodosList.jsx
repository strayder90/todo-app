import React from "react";
import PropTypes from "prop-types";

export const TodosList = ({ todos, handleDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <div className="list" key={todo.id}>
          <h4>{todo.name}</h4>
          <span className="button-delete" onClick={() => handleDelete(todo.id)}>
            <i className="trash alternate outline icon"></i>
          </span>
        </div>
      ))}
    </>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func,
};
