const sort = require('../exercise6.3/heapsort');

const value = (prices, arr) => {
  if (prices.lengh < 1) {
    return (arr[0] = 0);
  }
  for (i = 0; i < prices.length; i++) {
    let j = i;
    while (j <= prices.length - 2) {
      arr.push(prices[i] - prices[j + 1]);
      j++;
    }
  }
};

const stockPrices = [4,9,5,0,7,10,1];
const temperoryArray = [];
value(stockPrices, temperoryArray);
console.log("maximum profit", Math. abs(sort(temperoryArray)[0]));
