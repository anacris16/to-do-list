import React, { useState } from "react";

export default function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(event) {
    event.preventDefault();
    editTodo(value, task.id);

    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todoInput"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
}
