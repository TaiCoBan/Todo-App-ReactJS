// import './App.css';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <Sidebar />
//   );
// }

// export default App;
import Sidebar from "./components/Sidebar";
import styles from "./styles/App.module.css";
import Container from "./components/Container";

export default function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Container />
    </div>
  );
}