/**
 * Century From Year
 * 
 * Given a year, return the century it is in. The first century spans
 * from the year 1 up to and including the year 100, the second - from 
 * the year 101 up to and including the year 200, etc
 */

const centuryFromYear = (year) =>{
    return year%100 === 0 ? year/100 : Math.floor(year/100)+1
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1988));


/**
 * Check Palindrome
 * 
 * Geven the string, check if it is a palindrome
 */
const checkPalindrome = (inputString) => {
    let validate = inputString.split('').reverse()
    return (validate.join('') === inputString) ? true : false
}

console.log(checkPalindrome('aabaa'));