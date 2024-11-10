import styles from "../styles/TodoList.module.css";
import TodoCard from "./TodoCard";

export default function TodoList({ todos = [], onDeleteTodo }) {
    return (
        <div className={styles.list}>
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    title={todo.title}
                    description={todo.description}
                    // onDelete={() => onDeleteTodo(index)}
                />
            ))}
        </div>
    );
}
