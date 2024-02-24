import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
