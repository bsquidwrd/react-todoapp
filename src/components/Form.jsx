import { useRef, useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    inputRef.current.focus();
  }

  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          autoFocus
          ref={inputRef}
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
