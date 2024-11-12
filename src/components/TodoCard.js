import styles from "../styles/TodoCard.module.css";

export default function TodoCard({ content }) {
    return (
        <div className={styles["task-item"]}>
            <input type="checkbox" />
            <span className={styles["task-text"]}>{content}</span>
        </div>
    );
}
