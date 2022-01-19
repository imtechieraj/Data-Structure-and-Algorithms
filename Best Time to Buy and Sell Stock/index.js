/* 
You are given an integer array prices where prices[i] is the price

of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. 

You can only hold at most one share of the stock at any time.

However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

var maxProfit = function (prices) {
    return prices.reduce((prev_value,_item,index)=>{
        if(_item<prices[index+1]){
            prev_value=prev_value+prices[index+1]-_item
        } return prev_value
    },0)
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))