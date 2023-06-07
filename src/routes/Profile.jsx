import { useAuthContext } from '@/context/AuthContext';
import styles from '@/styles/Profile.module.scss';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>profile.</h1>
      <div className={styles.profile}>
        <h2>Hello, {user}</h2>
      </div>
    </div>
  );
};
export default Profile;
