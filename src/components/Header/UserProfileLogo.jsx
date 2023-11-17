import userLogo from '../../assets/favicon.svg';
import styles from './UserProfileLogo.module.css';

export default function UserProfileButton() {
    return (
        <>
            <img className={styles.userLogo} src={userLogo} alt="User logo" />
        </>
    );
}