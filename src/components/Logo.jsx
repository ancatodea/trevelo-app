import logo from "../assets/trevelogo.svg";
import styles from "./Logo.module.css";

export default function Logo() {
    return (
        <>
            <img className={styles.logo} src={logo} alt="Logo" />
        </>
    );
}
