import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { gameStart } from '../../redux/actions';
import Loader from '../../components/loader/Loader';
import clickHere from '../../pages/Game/click-here.png';
import './Game.scss';

function Game() {
  const [totalCoins, setTotalCoins] = useState(20);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState(true);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    document.title = 'Game';
    let user = JSON.parse(localStorage.getItem('user'));
    setTotalCoins(user ? user.coins : 20);
    setUserName(user ? user.name : 20);
  }, []);

  useEffect(() => {
    document.title = 'Game';
    let user = JSON.parse(localStorage.getItem('user'));
    setTotalCoins(user ? user.coins : 20);
  }, [state]);

  const handleRoll = () => {
    setLoading(true);
    setInitial(false);
    const payload = {
      coins: totalCoins - 1,
      userId: JSON.parse(localStorage.getItem('user'))._id,
    };
    setTimeout(function () {
      dispatch(gameStart(payload));
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="game-container">
      <div className="game-section">
        <div className="game">
          {initial && (
            <div className="items-section">
              <div className="items loading-items">
                {['item1', 'item2', 'item3'].map((item) => {
                  return (
                    <div className="item" key={item + Math.random()}>
                      {[
                        'cherry',
                        'lemon',
                        'apple',
                        'banana',
                        'lemon',
                        'cherry',
                      ].map((item, index1) => {
                        return <p key={index1 + Math.random()}>{item}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {!initial && loading && (
            <div className="items-section">
              <div className="items loading-items">
                {['item1', 'item2', 'item3'].map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      {
                        <Loader
                          width={'20px'}
                          margin={'70px 0px'}
                          height={'20px'}
                          style={{ marginTop: '71px' }}
                        />
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {!initial && !loading && (
            <div className="items-section">
              <div className="items">
                {state.game.items.map((item, index) => {
                  return (
                    <div
                      className="item"
                      style={{ lineHeight: '220px' }}
                      key={index}
                    >
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="coins-section">
          <h2>{userName}</h2>
          <h3>
            You have: <span className="have-coins">{totalCoins} coins</span>
          </h3>
          <div style={{ minHeight: '261px', minWidth: '234px' }}>
            <div>
              <hr />
              {!loading ? <p>{state.game.msg}</p> : 'spinning....'}
              <p style={{ color: 'green' }}>
                Reward adds: {!loading ? state.game.rewards : '-'}
              </p>
              <p style={{ color: 'red' }}>
                Game charge: {!loading ? '-1' : '-1'}
              </p>
            </div>

            {!loading && <img width="150px" src={clickHere} alt="click here" />}
          </div>
          <div className="slot-section">
            <Button variant="contained" color="secondary" onClick={handleRoll}>
              {loading ? (
                <Loader
                  width={'20px'}
                  height={'20px'}
                  margin={'-17px 2px 2px 2px'}
                />
              ) : (
                'Roll'
              )}
            </Button>
          </div>
        </div>
      </div>
      <div className="instructions">
        <h4>Instructions</h4>
        <p>
          You will get 20 coins at first as gift coins. Each time you play will
          cost 1 coin. And get rewards as mentioned bellow.{' '}
        </p>
        <h4>Rewards:</h4>
        <ul>
          <li>3 cherries in a row: 50 coins</li>
          <li>3 Apples in a row: 20 coins</li>
          <li>2 Apples in a row: 10 coins</li>
          <li>3 Bananas in a row: 15 coins</li>
          <li>2 Bananas in a row: 5 coins</li>
          <li>3 lemons in a row: 3 coins</li>
        </ul>
      </div>
    </div>
  );
}

export default Game;
