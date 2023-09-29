import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Deleted } from "@components/Deleted";

import { Todo } from "@components/Todo.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Todo text={"Todo List"} />
        <Routes>
          <Route exact path="/deleted" element={<Deleted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
