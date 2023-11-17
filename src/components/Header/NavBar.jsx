import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <>
            <ul className={styles.navBarContainer}>
                <li className={styles.navItem}>Acasa</li>
                <li className={styles.navItem}>Favorite</li>
                <li className={styles.navItem}>Exploreaza</li>
                <li className={styles.navItem}>Notificari</li>
            </ul>
        </>
    );
}
