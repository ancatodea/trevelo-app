import Logo from './Logo';
import NavBar from "./NavBar";
import UserProfileLogo from "./UserProfileLogo";
import styles from './Header.module.css'

export default function Header() {
    return <div className={styles.headerContainer}>
        <Logo />
        <NavBar />
        <UserProfileLogo />
    </div>
}