const {combination} = require('../Evaluations Problems/CombinationOfLetters')

describe('Combination of Letters, How many string equal to "a" can be constructered from "b"',()=>{
    test('The result should be 2',()=>{
        const expected = 2
        const result = combination('abc','abccba')
        expect(expected).toBe(result)
    })
    test('The result should be 1',()=>{
        const expected = 1
        const result = combination('ab','abcbcb')
        expect(expected).toBe(result)
    })
    test('The result should be 0',()=>{
        const expected = 0
        const result = combination('abcdefgh','abcbcb')
        expect(expected).toBe(result)
    })
    test('The result should be 3',()=>{
        const expected = 3
        const result = combination('ab','abcbbaa')
        expect(expected).toBe(result)
    })
})