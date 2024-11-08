import styles from "../styles/TodoCard.module.css"

export default function TodoCard({ title, description, onDelete }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onDelete} className={styles.deleteBtn}>Delete</button>
        </div>
    );
}
