/*
 Write a code on how to calculate the number of 
vowels and 
 consonants in a string?(Use Javascript only)
 */


const evaluation = (str) => {
    let vowelNum = 0
    let consonantNum = 0
    const vowel = ['a', 'e', 'i', 'o', 'u']
    str.split('').forEach((c) => {
        if (vowel.includes(c)) {
            vowelNum += 1;
        }
        else {
            consonantNum += 1
        }
    })
    return { vowelNum, consonantNum }
}

// -------------------------------------------------------------------------------------------------------------------

const isPalindrome = (str) => {

    str.toLowerCase()

    const reverseString = str.split('').reverse().join('')

    if (str === reverseString) {
        return 'The string is palindrome'
    }
    else {
        return 'The string is not palindrome'
    }

}

console.log(isPalindrome('lovol'))


