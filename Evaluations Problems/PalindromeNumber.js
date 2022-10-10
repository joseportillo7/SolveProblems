/**
 * Write a function that return true if a whole number is palindrome or not
 */
const PalindromeNumber = (num) =>{
    if(typeof(num) === 'number'){
        let numstring = Array.from(num.toString())
        if(numstring.toString() === numstring.reverse().toString()) return true        
    }  
    return false
}

/**
 * Write a function that takes an array of whole numbers and return true if is a palindrome number
 * or false if not.
 */
let arrNumbers = []
const PalindromeNumberArr = (arr) =>{
    arrNumbers = []
    arr.forEach(element => {
        arrNumbers.push({
            number: element, isPalindrome: PalindromeNumber(element)
        })
    });
    return arrNumbers
}


module.exports.GetPalindrome = {
    PalindromeNumber,
    PalindromeNumberArr
}