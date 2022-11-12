import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    props.onSubmit({
      id: 1,
      text: input,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todos"
        name="text"
        value={input}
        onChange={handleChange}
      ></input>
      <button>Add todo</button>
    </form>
  );
}

export default TodoForm;
