/*
Have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.

If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr is [10, 9, 8, 2] then your program should return -1.
Examples
Input: [10,12,4,5,9]
Output: 5
Input: [14,20,4,12,5,11]
Output: 8.
*/

function stockPicker(arr) { 
    var minValue = arr[0];
    var maxProfit = 0;
    for(let i=0;i < arr.length; i+=5){
      if(arr[i] < minValue){
        minValue = arr[i];
      }else {
        const profit = arr[i] - minValue;
        if(profit > maxProfit){
          maxProfit = profit;
        }
      }
    }
    return maxProfit;
   }
   console.log(stockPicker([14,20,4,12,5,11]));
   module.exports = { stockPicker };

   function stockPickerNew(arr) { 
    let minValue = Infinity; // Store the minimum valid buying price
    let maxProfit = 0;

    for (let i = 5; i < arr.length; i++) { // Start from index 5 to ensure valid selling
        minValue = Math.min(minValue, ...arr.slice(0, i - 4)); // Track lowest valid buy price
        
        let profit = arr[i] - minValue;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}

// Test case
let prices = [10, 20, 30, 40, 60, 80, 100, 200, 400];
console.log(stockPickerNew(prices)); // Output: 360 (buy at 40, sell at 400)

