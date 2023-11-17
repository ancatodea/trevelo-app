import styles from "./User.module.css";
import UserName from "./UserName";
import UserProfilePicture from "./UserProfilePicture";

export default function User() {
    return(
        <div className={styles.user}>
        <UserProfilePicture />
        <UserName />
        </div>
    )
}