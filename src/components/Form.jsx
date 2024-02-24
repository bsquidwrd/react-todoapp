import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          placeholder="Enter todo item..."
          value={todo.name}
          type="text"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
