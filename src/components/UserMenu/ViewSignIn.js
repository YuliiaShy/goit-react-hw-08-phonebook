import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from 'react-bootstrap/Button';

import userAvatar from './user.png';

export default function SignIn() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authOperations.signOut());
  };
  return (
    <nav className="d-flex justify-content-between rounded border border-1 navbar navbar-expand-lg navbar-light bg-light bg-white">
      <div>
        <img
          src={userAvatar}
          alt="avatar"
          style={{ width: '32px', marginRight: '10px', marginLeft: '10px' }}
        />
        <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Welcome {userName}
        </span>
      </div>
      <Button
        style={{ marginRight: '10px' }}
        type="button"
        onClick={handleLogOut}
      >
        SignOut
      </Button>
    </nav>
  );
}
