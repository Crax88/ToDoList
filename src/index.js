import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>Drink Coffe</li>
      <li>Do stuff</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>My Todo List</h1>;
};
const SearchBar = () => {
  return <input placeholder="search" type="text" />;
};
const el = (
  <div>
    <AppHeader />
    <SearchBar />
    <TodoList />
  </div>
);

ReactDOM.render(el, document.getElementById("root"));
