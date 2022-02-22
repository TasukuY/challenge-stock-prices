/*
This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
The best function will be given an array of stock prices in the order they happened throughout the day.
It should return the maximum possible profit on the stock for that day.
For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. 
So the profit would be $12:

best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5
best([2, 3, 10, 6, 4, 8, 1])
// 8 - buy at $2, sell at $10
best([7, 9, 5, 6, 3, 2])
// 2 - buy at $7, sell at $9
best([0, 100])
// 100 - buy at $0, sell at $100
best([5, 4 , 3, 2, 1])
// 0
best([100])
// 0
best([100, 0])
// 0
*/

//get the length of the array
//check the highest value of the day
//slice(indexOfHighest, (length - 1) - indexOfHighest) -> keep making new array
//if the length of the new array === 1 -> return 0 benefit
//else -> check the lowest value of the day in the modified array
//highest value - lowest value
//return the maximam profit, highest value, and lowest value

let best1 = stockPrices => {
    let highestPrice = getHighestPrice(stockPrices);
    let highestPriceIndex = stockPrices.indexOf(highestPrice);

    if(highestPriceIndex === 0){
        return 0;
    }else{
        //modify the array to make the last element the highestPrice
        let newArr = stockPrices.slice(highestPriceIndex, (stockPrices.length - 1));
    }
    //console.log(stockPrices);
    let lowestPrice = getLowestPrice(newArr);
    return highestPrice - lowestPrice;
}



let getHighestPrice = arr => {
    let highestPrice = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(highestPrice < arr[i]){
            highestPrice = arr[i];
        }
    }
    return highestPrice;
}

let getLowestPrice = arr => {
    let lowestPrice = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(lowestPrice > arr[i]){
            lowestPrice = arr[i];
        }
    }
    return lowestPrice;
}
let test = [101, 100, 99] //, 1, 24, 82, 90, 12, 39];

let best2 = stockPrices => {
    let maxBenefit = 0;
    let lowest = stockPrices[0];

    for(let i = 1; i < stockPrices.length; i++){
        if(stockPrices[i] < lowest){
            lowest = stockPrices[i];
        }
        
        let possibleBenefit = stockPrices[i] - lowest;
        if(possibleBenefit > maxBenefit){
            maxBenefit = possibleBenefit;
        }
    }
    return maxBenefit;  
    
}

console.log(best2(test));

