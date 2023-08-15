import React from "react";
import "../App.css";

function Todo({ todo, onComplete, onDelete, onEdit }) {
  return (
    <div className={`todo ${todo.isComplete ? "complete" : ""} `} key={todo.id}>
      <div>{todo.text}</div>
      <div>
        <span className="btn-todo btn-edit" onClick={onEdit}></span>
        <span className="btn-todo btn-delete" onClick={onDelete}></span>
        <span className="btn-todo btn-complete" onClick={onComplete}></span>
      </div>
    </div>
  );
}

export default Todo;