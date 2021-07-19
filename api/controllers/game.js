const User = require('../models/user');

exports.startGame = async (req, res) => {
  try {
    let coins = +req.query.coins;
    const userId = req.query.userId;

    const reel1 = [
      'cherry',
      'lemon',
      'apple',
      'lemon',
      'banana',
      'banana',
      'lemon',
      'lemon',
    ];
    const reel2 = [
      'lemon',
      'apple',
      'lemon',
      'lemon',
      'cherry',
      'apple',
      'banana',
      'lemon',
    ];
    const reel3 = [
      'lemon',
      'apple',
      'lemon',
      'apple',
      'cherry',
      'lemon',
      'banana',
      'lemon',
    ];

    const items = [];
    const index1 = Math.floor(Math.random() * (reel1.length - 1 - 0 + 1));
    items.push(reel1[index1]);
    const index2 = Math.floor(Math.random() * (reel2.length - 1 - 0 + 1));
    items.push(reel2[index2]);
    const index3 = Math.floor(Math.random() * (reel3.length - 1 - 0 + 1));
    items.push(reel3[index3]);

    let updatedCoins = processCoins(items);
    coins += updatedCoins.rewards;

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          coins,
        },
      }
    ),
      res.status(200).json({
        items,
        coins: coins,
        rewards: updatedCoins.rewards,
        msg: updatedCoins.msg,
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

function processCoins(items) {
  if (items[0] === 'cherry' && items[1] === 'cherry' && items[2] === 'cherry') {
    return { rewards: 50, msg: 'You got 3 cherry in a row 🥳' };
  } else if (
    (items[0] === 'cherry' && items[1] === 'cherry') ||
    (items[1] === 'cherry' && items[2] === 'cherry')
  ) {
    return { rewards: 40, msg: 'You got 2 cherry in a row 😁' };
  } else if (
    items[0] === 'apple' &&
    items[1] === 'apple' &&
    items[2] === 'apple'
  ) {
    return { rewards: 20, msg: 'You got 3 apples in a row 😉' };
  } else if (
    (items[0] === 'apple' && items[1] === 'apple') ||
    (items[1] === 'apple' && items[2] === 'apple')
  ) {
    return { rewards: 10, msg: 'You got 2 apple in a row 😋' };
  } else if (
    items[0] === 'banana' &&
    items[1] === 'banana' &&
    items[2] === 'banana'
  ) {
    return { rewards: 15, msg: 'You got 3 banana in a row 🙃' };
  } else if (
    (items[0] === 'banana' && items[1] === 'banana') ||
    (items[1] === 'banana' && items[2] === 'banana')
  ) {
    return { rewards: 5, msg: 'You got 2 banana in a row 🙂' };
  } else if (
    items[0] === 'lemon' &&
    items[1] === 'lemon' &&
    items[2] === 'lemon'
  ) {
    return { rewards: 3, msg: 'You got 3 lemon in a row 🙂' };
  }
  return { rewards: 0, msg: 'You got nothing, Please try again 😟' };
}
