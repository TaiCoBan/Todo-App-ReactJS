// import './App.css';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <Sidebar />
//   );
// }

// export default App;
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import styles from "./styles/App.module.css";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "Learn React", description: "Study hooks and components" },
    { title: "Build a ToDo App", description: "Create a React todo app" },
  ]);

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1>My Todo List</h1>
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  );
}