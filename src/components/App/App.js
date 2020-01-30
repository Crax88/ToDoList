import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import StatusFilter from "../StatusFilter/StatusFilter";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { label: "Drink coffee", important: false, id: 1 },
      { label: "Make awesome app", important: true, id: 2 },
      { label: "Have lunch", important: false, id: 3 }
    ]
  };
  deleteTodo = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(todo => todo.id !== id)
      };
    });
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchBar />
          <StatusFilter />
        </div>
        <TodoList todos={this.state.todos} onDelete={this.deleteTodo} />
      </div>
    );
  }
}
