const jsarray = require('../JavaScript Fundamentals/JavaScript Arrays')

describe("JavaScriptArrays - Problem #24 - Get nth element of array",()=>{
    test("The result shoud be 3",()=>{
        const expected = 3
        const result = jsarray.jsArray.MyFunction1([1,2,3,4,5],3)
        expect(expected).toBe(result)
    })
    test("The result shoud be 6",()=>{
        const expected = 6
        const result = jsarray.jsArray.MyFunction1([10,9,8,7,6],5)
        expect(expected).toBe(result)
    })
})

describe('JavaScriptArrays - Problem #25 - Remove first n element of an array',()=>{
    test('The result should be [4]',()=>{
        const expected = [4]
        const result = jsarray.jsArray.MyFunction2([1,2,3,4])
        expect(expected).toEqual(result)
    })
    test('The result should be []',()=>{
        const expected = []
        const result = jsarray.jsArray.MyFunction2([1,2,3])
        expect(expected).toEqual(result)
    })
})