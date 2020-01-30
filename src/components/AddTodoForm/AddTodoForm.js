import React from "react";
import "./AddTodoForm.css";

const AddTodoForm = ({ addTodo }) => {
  return (
    <div className="item-add-form">
      <button
        onClick={() => addTodo("Do stuff")}
        className="btn btn-outline-secondary"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
