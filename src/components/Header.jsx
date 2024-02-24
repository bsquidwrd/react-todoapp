import GitHubLink from "./github/GitHubLink";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>My Todo List</div>
      <GitHubLink url="https://github.com/bsquidwrd/react-todoapp" />
    </>
  );
}
