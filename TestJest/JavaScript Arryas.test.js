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

describe('JavaScriptArrays - Problem #26 - Get Last n elements of an array',()=>{
    test('The result should be [2,3,4]',()=>{
        const expected = [2,3,4]
        const result = jsarray.jsArray.MyFunction3([1,2,3,4])
        expect(expected).toEqual(result)
    })
    test('The result should be [d,e,f]',()=>{
        const expected = ['d','e','f']
        const result = jsarray.jsArray.MyFunction3(['a','b','c','d','e','f'])
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #27 - Get first n elements of an array',()=>{
    test('The result should be [1,2,3]',()=>{
        const expected = [1,2,3]
        const result = jsarray.jsArray.MyFunction4([1,2,3,4,5,6,7])
        expect(expected).toEqual(result)
    })
    test('The result should be [a,b,c]',()=>{
        const expected = ['a','b','c']
        const result = jsarray.jsArray.MyFunction4(['a','b','c'])
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #28 - Return last n array elements',()=>{
    test('The result should be [1,2,4]',()=>{
        const expected = [1,2,4]
        const result = jsarray.jsArray.MyFunction5([8,7,6,5,1,2,4],3)
        expect(expected).toEqual(result)
    })
    test('The result should be [a,b,c]',()=>{
        const expected = ['a','b','c']
        const result = jsarray.jsArray.MyFunction5(['a','b','c'],7)
        expect(expected).toEqual(result)
    })
})