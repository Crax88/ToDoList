import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/AppHeader";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";

const App = () => {
  const todos = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Make awesome app", important: true, id: 2 },
    { label: "Have lunch", important: false, id: 3 }
  ];
  return (
    <div>
      <AppHeader />
      <SearchBar />
      <TodoList todos={todos} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
