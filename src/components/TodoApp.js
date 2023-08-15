import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import Select from "react-select";
// import Filter from "./Filter";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filterdStatus, setFilterdStatus] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption);
  }, [todos, selectedOption]);
  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplete = !selectedTodo.isComplete;

    const updatedTodos = [...todos];
    console.log(updatedTodos);
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const removeHandler = (id) => {
    const filterdTodos = todos.filter((t) => t.id !== id);
    setTodos(filterdTodos);
    // return filterdTodos;
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;

    const updatedTodos = [...todos];
    console.log(updatedTodos);
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (selectedFilter) => {
    console.log("selected", selectedFilter);
    switch (selectedFilter) {
      case "All":
        setFilterdStatus(todos);
        console.log(filterdStatus);
        break;
      case "Complete":
        setFilterdStatus(todos.filter((t) => t.isComplete));
        break;
      case "incomplete":
        setFilterdStatus(todos.filter((t) => !t.isComplete));
        break;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <NavBar
        allCount={todos.filter((t) => t).length}
        completeCount={todos.filter((t) => t.isComplete === false).length}
        filterTodos={filterTodos}
        setSelectedOption={setSelectedOption}
      />

      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filterdStatus}
        onDelete={removeHandler}
        onUpdateTodo={updateTodo}
        onComplete={completeHandler}
      />
    </div>
  );
}

export default TodoApp;