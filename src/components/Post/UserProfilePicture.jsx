import userLogo from "../../assets/favicon.svg";
import styles from "./UserProfilePicture.module.css";

export default function UserProfilePicture() {
    return (
        <>
            <img
                className={styles.userProfilePicture}
                src={userLogo}
                alt="User logo"
            />
        </>
    );
}
