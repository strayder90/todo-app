import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Todo } from "@components/Todo.jsx";
import ErrorBoundary from "@components/ErrorBoundary";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary fallback="Failed to fetch data.">
          <Routes>
            <Route exact path="/" element={<Todo text={"Todo List"} />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
