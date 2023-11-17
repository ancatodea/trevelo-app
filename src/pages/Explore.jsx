import Header from "../components/Header/Header";
import styles from "./Explore.module.css";
import logo from "../assets/trevelogo.svg";

export default function Explore() {
    return (
        <>
            <Header />
            <div className={styles.exploreCard}>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
        </>
    );
}