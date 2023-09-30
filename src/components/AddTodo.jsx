import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Not needed to use useNavigate because there are no multiple pages here. But usefull to improve app.

export const AddTodo = () => {
  const initialTodo = "";
  const [todo, setTodo] = useState(initialTodo);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { todo };

    setIsLoading(true);

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).then(() => {
      console.log("New todo added.");
      setIsLoading(false);
      navigate("/");
    });

    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add todo" required />
        </div>
        {!isLoading && (
          <button className="ui button button-add" type="submit">
            Save
          </button>
        )}
        {isLoading && (
          <button disabled className="ui button button-add" type="submit">
            Saving todo...
          </button>
        )}
      </form>
    </>
  );
};
