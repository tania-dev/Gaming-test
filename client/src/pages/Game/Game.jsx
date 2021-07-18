import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import './Game.scss'
import { gameStart } from '../../redux/actions';

function Game() {
    const [totalCoins, setTotalCoins] = useState(20);
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        setTotalCoins(state.game.coins)
    }, [state])

    const handleRoll = () => {
        dispatch(gameStart(totalCoins - 1))
    }
    return (
        <div className="game-section">
            <div className="game">
                <div className="slot-section">
                    <Button variant="contained" color="secondary" onClick={handleRoll}>Roll</Button>
                </div>
                <div className="items-section">
                    <div className="items">
                        {state.game.items.map((item, index) => {
                            return (
                                <p key={index} className="item">{item}</p>
                            )
                        })}
                    </div>
                    <div className="coins-section">
                        <h3>Total Coins: {state.game.coins}</h3>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Game;