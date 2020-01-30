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
    ],
    pattern: ""
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
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
      return {
        todos: this.toggleProperty(todos, id, "important")
      };
    });
  };

  toggleDone = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, "done")
      };
    });
  };
  onSearchChange = pattern => {
    this.setState({
      pattern
    });
  };
  search = (items, pattern) => {
    if (pattern.length === 0) return items;
    return items.filter(item => {
      console.log(
        `${item}: ${item.label.toLowerCase().indexOf(pattern.toLowerCase())}`
      );
      return item.label.toLowerCase().indexOf(pattern.toLowerCase()) > -1;
    });
  };
  render() {
    const { todos, pattern } = this.state;
    const doneCount = todos.filter(todo => todo.done).length;
    const todoCount = todos.length - doneCount;
    const filteredTodos = this.search(todos, pattern);
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar onSearchChange={this.onSearchChange} />
          <StatusFilter />
        </div>
        <TodoList
          todos={filteredTodos}
          onDelete={this.deleteTodo}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
