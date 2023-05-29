import React, { useState } from "react";

export default function TodoForm({addTodo}) {
  const [value, setValue] = useState("");
  
  function handleSubmit(event){
    event.preventDefault();
   addTodo(value);

   setValue("");
  }
  
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todoInput"
        placeholder="Enter a Task..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
}
