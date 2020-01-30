import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const todosElms = todos.map(todo => {
    const { id, ...todoProps } = todo;
    return (
      <li key={id}>
        <TodoListItem {...todoProps} />
      </li>
    );
  });

  return <ul>{todosElms}</ul>;
};

export default TodoList;
