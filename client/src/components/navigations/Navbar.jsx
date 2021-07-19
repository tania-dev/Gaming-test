import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeLogout } from '../../redux/actions';
import './Navbar.scss';

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!state.login) {
      history.push('/login');
    }
    setTimeout(function () {
      let user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
    }, 50);
  }, [user, state, history]);

  const handleLogout = () => {
    dispatch(makeLogout());
  };

  return (
    <nav className="navbar-section">
      <div className="navbar-items">
        {user && Object.keys(user).length > 0 ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/game">Game</Link>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
