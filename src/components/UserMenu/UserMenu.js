import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import LogIn from './ViewLogIn';
import LogOut from './ViewLogOut';

export default function UserMenu() {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLogged ? <LogIn /> : <LogOut />}</>;
}
