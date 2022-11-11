const {functionTwoSum} = require('../Evaluations Problems/TwoSum')

describe('LeetCode - Return indices of the two numbers such that they add up to target',()=>{
    test('The result should be [0,1]',()=>{
        const expected = [0,1]
        const result = functionTwoSum([2,7,11,15],9)
        expect(expected).toEqual(result)
    })
    test('The result should be [1,2]',()=>{
        const expected = [1,2]
        const result = functionTwoSum([3,2,4],6)
        expect(expected).toEqual(result)
    })
    test('The result should be [0,6]',()=>{
        const expected = [0,6]
        const result = functionTwoSum([1,1,2,1,4,5,6],7)
        expect(expected).toEqual(result)
    })
})