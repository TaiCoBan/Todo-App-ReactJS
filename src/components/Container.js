import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Container.module.css";
import TodoList from "./TodoList";

export default function Container() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách todos
        axios.get('http://localhost:8080/api/todos/category?category=Tasks')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Tasks</h1>
            <TodoList todos={todos} />
        </div>
    );
}
