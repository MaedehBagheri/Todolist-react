import React, { useRef, useState, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("please fill input");
      return;
    }
    props.submitTodo(input);
    setInput("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update todo..." : "add todo..."}
          ref={inputRef}
        />
        <button className="add" type="submit">
          {props.edit ? "update" : "add"}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;