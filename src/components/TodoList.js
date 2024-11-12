import styles from "../styles/TodoList.module.css";
import TodoCard from "./TodoCard";

export default function TodoList({ todos = [] }) {
    return (
        <div className={styles.list}>
            {todos.map((todo, id) => (
                <TodoCard
                    key={id}
                    content={todo.content}
                />
            ))}
        </div>
    );
}
