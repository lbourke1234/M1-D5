/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let resultRectangle = function area(l1, l2){
    return l1 * l2;
}
console.log(resultRectangle(7, 6))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(int1, int2) {
    if (int1 === int2){
        return (int1 + int2) * 3;
    } else {
        return int1 + int2
    }
}
console.log(crazySum(6, 12))
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(number){
    if (number < 19){
        return 19 - number;
    } else if (number > 19){
        return (number - 19) * 3;
    } else if (number === 19){
        return 0;
    } else {
        return "Please enter a number";
    }
}
console.log(crazyDiff(19))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n){
    if ((n >= 20 && n <= 100) || n === 400){
        return true
    } else {
        return false
    }
}
console.log(boundary(35))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str){
    if (str.substring(0, 6) === "Strive") {
        return str.substring(7)
    } else {
        return "Strive " + str;
    }
}
console.log(strivify("Hello What's up?"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(positiveNum){
    if (positiveNum % 3 === 0 || positiveNum % 7 === 0) {
        return "The number is divisable by 3 or 7";
    } else {
        return "The number is not divisable by 3 or 7, too bad";
    }
}
console.log(check3and7(7))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let reversedStr = ""

function reverseString(strToReverse){
    for (let i = strToReverse.length -1; i >= 0; i--){
        reversedStr = reversedStr.concat(strToReverse[i]);
    }
    console.log(reversedStr)
}
reverseString("My name is Leon, nice to meet you")

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
let sentence = ""
function upperFirst(str){
    let words = str.split(" ")
    words[0].toUpperCase
    for (i = 0; i < words.length; i++){
        sentence = sentence.concat(words[i]) + "" 
    }
}console.log(sentence)

upperFirst("Leon is my name")

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(str){
    console.log(str.substring(1, str.length-1))
}

cutString("How is everyone doing today, Nice to see you all")

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let randomArray = []
function giveMeRandom(n){
    for (i = 0; i < 10; i++){
        randomArray[i] = Math.ceil(Math.random() * 10)
    }
return randomArray
}

console.log(giveMeRandom())

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/