import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import StatusFilter from "../StatusFilter/StatusFilter";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import "./App.css";

export default class App extends Component {
  createTodo = todo => {
    return {
      label: todo,
      done: false,
      important: false,
      id: this.maxId++
    };
  };
  maxId = 100;
  state = {
    todos: [
      this.createTodo("Drink Coffe"),
      this.createTodo("Build Awesome App"),
      this.createTodo("Have lunch")
    ]
  };

  deleteTodo = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(todo => todo.id !== id)
      };
    });
  };

  addTodo = todo => {
    this.setState(({ todos }) => {
      return {
        todos: [...todos, this.createTodo(todo)]
      };
    });
  };

  toggleImportant = id => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex(el => el.id === id);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      return {
        todos: [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
      };
    });
  };

  toggleDone = id => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex(el => el.id === id);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      return {
        todos: [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
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
        <TodoList
          todos={this.state.todos}
          onDelete={this.deleteTodo}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
