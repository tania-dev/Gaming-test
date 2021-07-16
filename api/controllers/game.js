exports.startGame = async (req, res) => {
    try {
      let coins = +req.query.coins;
      const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"];
      const reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"];
      const reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"];

      const items = [];
      const index1 = Math.floor(Math.random()*((reel1.length-1) -0+1));
      items.push(reel1[index1])
      const index2 = Math.floor(Math.random()*((reel2.length-1) -0+1));
      items.push(reel2[index2])
      const index3 = Math.floor(Math.random()*((reel3.length-1) -0+1));
      items.push(reel3[index3])
      
      let updatedCoins = processCoins(items)
      updatedCoins += coins;

      res.status(200).json({
        items,
        coins: updatedCoins
      })

    } catch(err) {
        res.status(500).json({ error: err });
    }
}

function processCoins(items) {
    if(items[0] === 'cherry' && items[1] === 'cherry' && items[2] === 'cherry') {
        return 50;
    } else if((items[0] === 'cherry' && items[1] === 'cherry') || (items[1] === 'cherry' && items[2] === 'cherry')) {
        return 40;
    } else if(items[0] === 'apple' && items[1] === 'apple' && items[2] === 'apple') {
        return 20;
    } else if((items[0] === 'apple' && items[1] === 'apple') || (items[1] === 'apple' && items[2] === 'apple')) {
        return 10;
    } else if(items[0] === 'banana' && items[1] === 'banana' && items[2] === 'banana') {
        return 15;
    } else if((items[0] === 'banana' && items[1] === 'banana') || (items[1] === 'banana' && items[2] === 'banana')) {
        return 5;
    } else if(items[0] === 'lemon' && items[1] === 'lemon' && items[2] === 'lemon') {
        return 3;
    } 
    return 0;
}