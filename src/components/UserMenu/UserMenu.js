import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import SignIn from './ViewSignIn';
import SignOut from './ViewSignOut';

export default function UserMenu() {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLogged ? <SignIn /> : <SignOut />}</>;
}
