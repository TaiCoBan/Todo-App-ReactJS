import { useState } from "react";
import styles from "../styles/Container.module.css";
import TodoList from "./TodoList";

export default function Container() {
    const [todos, setTodos] = useState([
        { title: "Learn React", description: "Study hooks and components" },
        { title: "Build a ToDo App", description: "Create a React todo app" },
    ]);

    const handleDeleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.container}>
            <h1>Tasks</h1>
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
    );
}
