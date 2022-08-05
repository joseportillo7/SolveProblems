const jsarray = require('../JavaScript Fundamentals/JavaScript Arrays')

describe("JavaScriptArrays - Problem#24 - Get nth element of array",()=>{
    test("The result shoud be 3",()=>{
        const expected = 3
        const result = jsarray.jsArray.MyFunction1([1,2,3,4,5],3)
        expect(expected).toBe(result)
    })
})