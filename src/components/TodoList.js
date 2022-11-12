import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodos} />
    </div>
  );
}

export default TodoList;
