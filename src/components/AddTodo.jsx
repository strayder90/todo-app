import React, { useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();

    console.log(todo);
  };

  return (
    <>
      <form onSubmit={handleAddTodo} className="ui form">
        <div className="field">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add todo" required />
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
