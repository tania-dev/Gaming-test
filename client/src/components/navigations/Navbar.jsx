import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

    const goToHome = () => {
        history.push("/");
    }

    const goToGame = () => {
        history.push("/game");
    }

    return (
        <div className="navbar-section">
            <div className="navbar-items">
                <Button variant="contained" color="secondary" className="home-btn" onClick={goToHome}>
                    Home
                </Button>
                <Button variant="contained" color="secondary" className="game-btn" onClick={goToGame}>
                    Game
                </Button>
                <Button variant="contained" color="secondary" className="logout-btn" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Navbar;