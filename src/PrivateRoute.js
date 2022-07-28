import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ children }) {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return isLogged ? children : <Navigate to="/" />;
}
