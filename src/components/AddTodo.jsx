import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collectionReference } from "../hooks/useFetch";

// Not needed to use useNavigate because there are no multiple pages here. But usefull to improve app.

export const AddTodo = ({ addDoc }) => {
  const initialTodo = "";
  const [todo, setTodo] = useState(initialTodo);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let idCounter = 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: idCounter++, name: todo };

    setIsLoading(true);

    addDoc(collectionReference, newTodo)
      .then((res) => {
        setIsLoading(false);
        setTodo("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
