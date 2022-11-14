const {functionAddTwoNumbers} = require('../Evaluations Problems/AddTwoNumbers')

describe('LeetCode - Add Two Numbers',()=>{
    test('The result should be [7,0,8]',()=>{
        const expected = [7,0,8]
        const result = functionAddTwoNumbers([2,4,3],[5,6,4])
        expect(expected).toEqual(result)
    })
    test('The result should be [0]',()=>{
        const expected = [0]
        const result = functionAddTwoNumbers([0],[0])
        expect(expected).toEqual(result)
    })
    test('The result should be [8,9,9,9,0,0,0,1]',()=>{
        const expected = [8,9,9,9,0,0,0,1]
        const result = functionAddTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])
        expect(expected).toEqual(result)
    })
})