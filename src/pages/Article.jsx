import logo from "../assets/trevelogo.svg";

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
