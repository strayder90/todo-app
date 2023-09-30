import React, { useState } from "react";

export const AddTodo = () => {
  const initialTodo = "";
  const [todo, setTodo] = useState(initialTodo);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { todo };

    console.log(newTodo);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add todo" required />
        </div>
        <button className="ui button button-add" type="submit">
          Save
        </button>
      </form>
    </>
  );
};
