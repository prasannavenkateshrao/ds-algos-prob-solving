

var numOfUnplacedFruits = function(fruits, baskets) {
    fruits.sort((a,b) => a-b);
    baskets.sort((a,b) => a-b);
    var i =0, j=0;
    while(i < fruits.length && j < baskets.length){
        if(baskets[j] >= fruits[i]){
            i++;
        }
        j++;
    }
    return fruits.length - i;
};

console.log(numOfUnplacedFruits([4,2,5],[3,5,4]));

var unplacedFruits = function(fruits, baskets) {
    // Sort fruits and baskets in ascending order
    fruits.sort((a, b) => a - b);
    baskets.sort((a, b) => a - b);
    
    let i = 0; // Pointer for fruits
    let j = 0; // Pointer for baskets
    
    while (i < fruits.length && j < baskets.length) {
        if (baskets[j] >= fruits[i]) {
            // If the current basket can hold the current fruit, place it
            i++;
        }
        // Move to the next basket
        j++;
    }
    
    // Remaining unplaced fruits
    return fruits.length - i;
};
console.log(unplacedFruits([4,2,5],[3,5,4]));