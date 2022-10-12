const jsContainer = require('../Evaluations Problems/WaterContainer')

describe('Solving a Water Container with an array of numbers as argument',()=>{
    test('The result should be 49',()=>{
        const expected = 49
        const result = jsContainer.GetArea.functionContainer([1,8,6,2,5,4,8,3,7])
        expect(expected).toBe(result)
    })
    test('The result should be 54',()=>{
        const expected = 54
        const result = jsContainer.GetArea.functionContainer([1,9,6,2,5,4,8,12,7])
        expect(expected).toBe(result)
    })
    test('The result should be 1',()=>{
        const expected = 1
        const result = jsContainer.GetArea.functionContainer([1,1])
        expect(expected).toBe(result)
    })
    test('The result should be 16',()=>{
        const expected = 16
        const result = jsContainer.GetArea.functionContainer([4,3,2,1,4])
        expect(expected).toBe(result)
    })
    test('The result should be 2',()=>{
        const expected = 2
        const result = jsContainer.GetArea.functionContainer([1,2,1])
        expect(expected).toBe(result)
    })
})