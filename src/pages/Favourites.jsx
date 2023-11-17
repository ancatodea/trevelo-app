import Header from "../components/Header/Header"
import logo from "../assets/trevelogo.svg"

export default function Favourites() {
    return (
        <>
            <Header />
            <div className={styles.favouritesCard}>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
        </>
    );
    
}