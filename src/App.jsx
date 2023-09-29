import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Deleted } from "@components/Deleted";

import { Todo } from "@components/Todo.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Todo text={"Todo List"} />} />
          <Route exact path="/deleted" element={<Deleted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
