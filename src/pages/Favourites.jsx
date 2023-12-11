import Header from "../components/Header/Header";
import Card from '../components/Cards/Card.jsx';
import logo from "../assets/trevelogo.svg";
import styles from "./Favourites.module.css";

export default function Favourites() {
    return (
        <>
            <Header />
            <Card />
            {/* <div className={styles.favouritesCard}>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div> */}
        </>
    );
    
}