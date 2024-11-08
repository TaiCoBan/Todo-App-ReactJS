import styles from "../styles/Sidebar.module.css"

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <a className={styles.active} href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}