import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className="user-info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicl8t0zTLXE36WMnjHszD20A9ZsoSGwfqCQ&s" alt="User Avatar" className="avatar" />
                <div className="user-name">The Tai Luu Dinh</div>
                <div className="user-email">luudinhthetai741@outlook.com</div>
            </div>
            <a className={styles.active} href="#tasks">Tasks</a>
            <a href="#important">Important</a>
            <a href="#c1">Cate 1</a>
            <a href="#c2">Cate 2</a>
            <div className="bottom-sidebar">
                <a href="#">+ New List</a>
            </div>
        </div>
    );
}
