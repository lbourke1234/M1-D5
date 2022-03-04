// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

let randomArray = []
function giveMeRandom(n){
    for (i = 0; i < 10; i++){
        randomArray[i] = Math.ceil(Math.random() * 10)
    }
return randomArray
}

console.log(giveMeRandom())


let sumOver5 = null
function checkArray(){
    for (i = 0; i < 10; i++){
        if (randomArray[i] > 5){
            return sumOver5 + randomArray[i];
        } else {
            continue
        }
    }console.log(sumOver5)
}

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let shoppingCart = [
    {
        "price":15,
        "name":"Book",
        "id":"B1",
        "quantity":2
    },
    {
        "price":60,
        "name":"Book",
        "id":"B1",
        "quantity":2
    },
    {
        "price":75,
        "name":"Book",
        "id":"B1",
        "quantity":2
    }
]

let totalCost = 0
function shoppingCartTotal(){
    for (i = 0; i < shoppingCart.length; i++){
        totalCost += shoppingCart[i].price
    }console.log(totalCost)
}

shoppingCartTotal();

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

function addToShoppingCart(obj){
    shoppingCart.push(obj)
    return shoppingCart.length
}

console.log(addToShoppingCart(
    {"price":30,
    "name":"Book",
    "id":"B1",
    "quantity":4}))

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/
let maxValue = null
function maxShoppingCart(array){
    for (i = 0; i < shoppingCart.length; i++){
        if (shoppingCart[i].price > maxValue){
            maxValue = shoppingCart[i].price
        }
    }return maxValue
}

console.log(maxShoppingCart(shoppingCart))

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(cartLast){
    return cartLast[cartLast.length -1]
}
console.log(latestShoppingCart(shoppingCart))

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(x){
    while (x > 0) {
        let y = Math.floor(Math.random()) * 9
        if (y < 5){
            console.log(y)
        } else {
            break;
        }
    }
}

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/