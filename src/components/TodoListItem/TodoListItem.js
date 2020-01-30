import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };
  render() {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) classNames += " done";
    if (important) classNames += " important";
    return (
      <span className={classNames}>
        <span onClick={this.onLabelClick} className="todo-list-item-label">
          {label}
        </span>
        <button
          onClick={this.onMarkImportant}
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          onClick={onDelete}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
