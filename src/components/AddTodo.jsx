import React, { useState } from "react";

export const AddTodo = () => {
  const initialTodo = "";
  const [todos, setTodos] = useState(initialTodo);

  const handleAddTodo = (e) => {
    e.preventDefault();

    setTodos(initialTodo);
  };

  return (
    <>
      <form onSubmit={handleAddTodo} className="ui form">
        <div className="field">
          <input value={todos} onChange={(e) => setTodos(e.target.value)} type="text" placeholder="Add todo" required />
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
