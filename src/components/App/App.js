import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import StatusFilter from "../StatusFilter/StatusFilter";
import "./App.css";

const App = () => {
  const todos = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Make awesome app", important: true, id: 2 },
    { label: "Have lunch", important: false, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchBar />
        <StatusFilter />
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
