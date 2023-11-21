import logo from "../assets/trevelogo.svg";
import Header from "../components/Header/Header";
import styles from "./Article.module.css";

export default function Article() {
    return (
        <>
            <Header />
            <div className={styles.exploreCard}>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
        </>
    );
}
