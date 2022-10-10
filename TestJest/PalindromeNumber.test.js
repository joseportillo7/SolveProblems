const jspalindrome = require('../Evaluations Problems/PalindromeNumber')

describe('Solving a function with a Palindrome Number',()=>{
    test('The result of the number 12121 should be true',()=>{
        const expected = true
        const result = jspalindrome.GetPalindrome.PalindromeNumber(12121)
        expect(expected).toBe(result)
    })
    test('The result of the number -121 should be false',()=>{
        const expected = false
        const result = jspalindrome.GetPalindrome.PalindromeNumber(-121)
        expect(expected).toBe(result)
    })
    test('The result of the number 10 should be false',()=>{
        const expected = false
        const result = jspalindrome.GetPalindrome.PalindromeNumber(10)
        expect(expected).toBe(result)
    })
})


describe('Solving a function with an array of whole numbers that determine if an specific number is a Palindrome Number',()=>{
    test('The result should be true,false,false,true',()=>{
        const expected = [
            {number: 121, isPalindrome: true},
            {number: -121, isPalindrome: false},
            {number: 10, isPalindrome: false},
            {number: 22322, isPalindrome: true}
        ]
        const result = jspalindrome.GetPalindrome.PalindromeNumberArr([121,-121,10,22322])
        expect(expected).toEqual(result)
    })
    test('The result should be false,false,false,true',()=>{
        const expected = [
            {number: 1211, isPalindrome: false},
            {number: -12331, isPalindrome: false},
            {number: 10003, isPalindrome: false},
            {number: 200002, isPalindrome: true}
        ]
        const result = jspalindrome.GetPalindrome.PalindromeNumberArr([1211,-12331,10003,200002])
        expect(expected).toEqual(result)
    })
    test('The result should be true,true,true',()=>{
        const expected = [
            {number: 9009, isPalindrome: true},
            {number: 11111, isPalindrome: true},
            {number: 121212212121, isPalindrome: true}
        ]
        const result = jspalindrome.GetPalindrome.PalindromeNumberArr([9009,11111,121212212121])
        expect(expected).toEqual(result)
    })
})