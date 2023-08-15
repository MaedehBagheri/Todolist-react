import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./TodoForm";
function TodoList({ todos, onComplete, onDelete, onUpdateTodo }) {
  const [edit, setEdit] = useState({ id: null, text: "", isComplete: false });

  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <div>No anything here</div>;

    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
              onComplete={() => onComplete(todo.id)}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div>
      {console.log("hi")}
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
}

export default TodoList;