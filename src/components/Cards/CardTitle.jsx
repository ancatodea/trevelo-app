import styles from "./CardTitle.module.css";

export default function CardTitle({title}) {
    return (
        <>
            <h3 className={styles.cardTitle}>
                {title}
            </h3>
        </>
    );
}
