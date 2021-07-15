import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './Game.scss'

function Game() {
    const [reel1, setReel1] = useState([]);
    const [reel2, setReel2] = useState([]);
    const [reel3, setReel3] = useState([]);
    let totalCoins = 20;

    useEffect(() => {
        setReel1(["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]);
        setReel2(["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]);
        setReel3(["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"])
    }, [])

    const handleRoll = () => {
        const newArr = [];
        const index1 = Math.floor(Math.random()*((reel1.length-1) -0+1)+0);
        newArr.push(reel1[index1])
        const index2 = Math.floor(Math.random()*((reel2.length-1) -0+1)+0);
        newArr.push(reel2[index2])
        const index3 = Math.floor(Math.random()*((reel3.length-1) -0+1)+0);
        newArr.push(reel3[index3])
        totalCoins -= 1;
        console.log(newArr, totalCoins)
    }

    return (
        <div className="game-section">
            <div className="game">
                <div className="slot-section">
                    <Button variant="contained" color="secondary" onClick={handleRoll}>Roll</Button>
                </div>
            </div>
        </div>
    )   
}

export default Game;