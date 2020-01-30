import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const todosElms = todos.map(todo => {
    return (
      <li>
        <TodoListItem {...todo} />
      </li>
    );
  });

  return <ul>{todosElms}</ul>;
};

export default TodoList;
