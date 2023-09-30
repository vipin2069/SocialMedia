import { useAuth } from '../Auth/Auth';

const UserProfile = () => {
    const { currentUser, logout } = useAuth();

    return (
      <div>
        <h2>Welcome, {currentUser ? currentUser.email : 'Guest'}</h2>
        {currentUser && <button onClick={logout}>Logout</button>}
      </div>
    );
}

export default UserProfile