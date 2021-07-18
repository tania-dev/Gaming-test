import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeLogout } from "../../redux/actions";
import './Navbar.scss';

function Navbar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(state => state);

    useEffect(() => {
        if(!state.login) {
            history.push("/login")
        }
    }, [state, history])

    const handleLogout = () => {
        dispatch(makeLogout());
    }

    return (
        <nav className="navbar-section">
            <div className="navbar-items">
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </nav>
    )
}

export default Navbar;