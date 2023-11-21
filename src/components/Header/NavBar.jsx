import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {

    return (
        <>
            <ul className={styles.navBarContainer}>
                <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to="/">
                        Acasa
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        className={styles.navLink}
                        to="/favourites"
                        activeClassName={styles.currentLink}
                        exact
                    >
                        Favorite
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to="/explore">
                        Exploreaza
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink className={styles.navLink} to="/article">
                        Articole
                    </NavLink>
                </li>
            </ul>
        </>
    );
}
