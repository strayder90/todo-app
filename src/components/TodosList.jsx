import React from "react";
import PropTypes from "prop-types";

export const TodosList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        const handleDelete = () => {
          fetch(`http://localhost:8000/todos/${todo.id}`, {
            method: "DELETE",
          }).then(() => {
            alert("Successfully deleted todo.");
          });
        };

        return (
          <div className="list" key={todo.id}>
            <h4>{todo.name}</h4>
            <span className="button-delete">
              <i className="trash alternate outline icon" onClick={handleDelete}></i>
            </span>
          </div>
        );
      })}
    </>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array,
};
