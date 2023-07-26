
/*
Task 1 : Create a function that takes a string as input and returns the reversed 
version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh"
*/

const strRevers = (str) => {
    const length = str.length
    let altString = ''
    for (i = length - 1; i >= 0; i--) {
        altString += str[i]
    }
    return altString;

}

// console.log(strRevers('hello world'));

/*  Task 2 : Create a function that takes an array of 
numbers as input and returns the sum of all positive numbers in the array.

Example Input: [2, -5, 10, -3, 7] Example Output: 19
*/

const posSum = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
        if (num >= 0) {
            sum += parseInt(num);
        }

    })
    return sum;
}


// console.log(posSum([2, -5, 10, -3, 7]));
/*
Task 3: Write a JavaScript program to find the most frequent
element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
*/

const frequent = (arr) => {
    const count = {}
    let MostFrequent = 0
    arr.forEach((c) => {
        count[c] = count[c] + 1 || 1
    })
    const keys = Object.keys(count)
    const length = keys.length
    for (x = 0; x < length; x++) {
        if (MostFrequent < count[keys[x]]) {
            MostFrequent = keys[x]
        }
    }
    return MostFrequent;
}


/*
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The 
function should find two numbers in the array that add up to the target value.
Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

*/

const twoNumbers = (arr, target) => {

    let indices
    const length = arr.length
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] + arr[i + 1] === target) {
            indices = [i, i + 1]
        }
    }
    return indices

}


/*
Task 5: Implement a simple JavaScript calculator. 
The calculator should take two numbers and an operator (+, -, *, /) 
as input and return the result of the operation.

*/

const jsCal = (num1, operator, num2) => {
    const str = num1 + operator + num2
    console.log(str)
    return result = eval(str).toFixed(2)

}

/*
Task 7: Implement a function that converts a Roman numeral to an integer. 
The function should take a Roman numeral string (e.g., "IX" or "XXI") 
as input and return the corresponding integer value.
*/

const romaToInteger = (roman) => {
    const romanNumerals = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;
    let preNum = 0;
    roman.split('').forEach((char) => {
        const num = romanNumerals[char]
        if (num >= preNum) {
            total += num;

        }
        else {
            total -= num;
        }
        preNum = num

    })
    return total

}

// console.log(romaToInteger('XXX'))
/*
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. 
The function should return the second smallest number.
*/

const smallestSecond = (arr) => {
    const uniqArr = arr.filter((item, index) => arr.indexOf(item) === index)

    return uniqArr.sort()[1]
}


