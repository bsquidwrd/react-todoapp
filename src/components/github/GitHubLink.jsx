import githubLogo from "./github-mark.png";
import styles from "./githublink.module.css";

export default function GitHubLink({ url }) {
  return (
    <div className={styles.logo}>
      <a href={url} target="_blank">
        <img src={githubLogo} />
      </a>
    </div>
  );
}
