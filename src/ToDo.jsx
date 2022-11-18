import React, { useRef, useState } from "react";
import "./ToDo.css";

export default function ToDo() {
  const ref = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dummy, setDummy] = useState(0);

  const handleClick = () => {
    if (text) {
      setTodos([...todos, text]);
      setText("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    }
  };

  const handleCheck = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleEdit = (index) => {
    ref.current.focus();
    if (text.length > 0) todos[index] = text;
    setDummy(dummy + 1);
    setTodos(todos);
    setText("");
  };

  return (
    <form className="todo" onSubmit={(e) => e.preventDefault()}>
      <div className="title-container">
        <h2 className="title">
          To edit an item: type text in input and click edit
        </h2>
      </div>
      <input
        className="text-input"
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Add a todo"
        value={text}
        ref={ref}
      ></input>
      <button className="list-button add" onClick={handleClick}>
        Add
      </button>
      <ul className="list">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`${
              selected.includes(index)
                ? "todo-container selected"
                : "todo-container"
            }`}
          >
            <div className="todo-continer-helper">
              <input
                type="checkbox"
                onChange={() => handleCheck(index)}
                checked={selected.includes(index)}
              ></input>
              <li
                onClick={() => handleCheck(index)}
                className={`${selected.includes(index) ? "checked" : ""}`}
              >
                {todo}
              </li>
            </div>
            <button className="list-button" onClick={() => handleDelete(index)}>
              Del
            </button>
            <button className="list-button" onClick={() => handleEdit(index)}>
              Edit
            </button>
          </div>
        ))}
      </ul>
    </form>
  );
}
