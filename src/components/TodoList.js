import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  const todosElms = todos.map(todo => {
    const { id, ...todoProps } = todo;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...todoProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{todosElms}</ul>;
};

export default TodoList;
