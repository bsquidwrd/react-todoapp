import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo item..."
          value={todo}
          type="text"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
