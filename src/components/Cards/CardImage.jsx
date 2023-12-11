import styles from "./CardImage.module.css";
import CardTitle from "./CardTitle";

export default function CardImage({ photo }) {
    return (
        <div className={styles.cardImage}>
            <img src={photo} alt="API photo" />
            <CardTitle title="tuuuutu" />
        </div>
    );
}
