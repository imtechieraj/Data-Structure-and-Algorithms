/* 
You are given an integer array prices where prices[i] is the price

of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. 

You can only hold at most one share of the stock at any time.

However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

var maxProfit = function (prices) {
    // let buy=prices[0];
    // prices[0]=0;
    // let profit=0;

    // for(let i=1;i<prices.length;i++){
    //     console.log(prices[i])
    // if(buy>prices[i]){
    //     buy=prices[i];
    //      prices[i]=0;
    // }else{
    //     profit=Math.max(prices[i]-buy,profit)
    // }
    // }
    // return profit
    // let profit = 0;
    // prices.reduce((preValue, data) => {
    //     if (data > preValue) {
    //         currentProfit = data - preValue;
    //         profit = profit + currentProfit;
    //         return data
    //     } return data
    // }, 0);
    // return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))