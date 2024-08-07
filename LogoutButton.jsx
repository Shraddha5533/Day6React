
import { useAuthContext } from './AuthContext';

function LogoutButton() {
  const { logout } = useAuthContext();

  return (
    <button onClick={logout}>Logout</button>
  );
}

export default LogoutButton;
