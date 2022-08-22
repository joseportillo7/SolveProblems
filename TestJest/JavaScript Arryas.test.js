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

describe('JavaScriptArrays - Problem #29 - Remove a especific array element',()=>{
    test('The result should be [1,2]',()=>{
        const expected = [1,2]
        const result = jsarray.jsArray.MyFunction6([1,2,'2'],'2')
        expect(expected).toEqual(result)
    })
    test('The result should be ["2",1]',()=>{
        const expected = ['2',1]
        const result = jsarray.jsArray.MyFunction6([false,'2',1],false)
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #30 - Count number of elements in JavaScript array',()=>{
    test('The result should be 4',()=>{
        const expected = 4
        const result = jsarray.jsArray.MyFunction7([1,2,'2',5])
        expect(expected).toEqual(result)
    })
    test('The result should be 2',()=>{
        const expected = 2
        const result = jsarray.jsArray.MyFunction7([true,'hola'])
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #31 - Count number of negative values in array',()=>{
    test('The result should be 3',()=>{
        const expected = 3
        const result = jsarray.jsArray.MyFunction8([1,-2,-100,-5])
        expect(expected).toEqual(result)
    })
    test('The result should be 0',()=>{
        const expected = 0
        const result = jsarray.jsArray.MyFunction8([1000,9000])
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #32 - Sort an array of string alphabetically',()=>{
    test('The result should be [j,k,l,m]',()=>{
        const expected = ['j','k','l','m']
        const result = jsarray.jsArray.MyFunction9(['m','j','k','l'])
        expect(expected).toEqual(result)
    })
    test('The result should be [a,b,c,z]',()=>{
        const expected = ['a','b','c','z']
        const result = jsarray.jsArray.MyFunction9(['z','b','a','c'])
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #33 - Sort an array of numbers in decending order',()=>{
    test('The result should be [5,4,3,2,1]',()=>{
        const expected = [5,4,3,2,1]
        const result = jsarray.jsArray.MyFunction10([4,1,5,2,3])
        expect(expected).toEqual(result)
    })
    test('The result should be [5,40,20,1]',()=>{
        const expected = [5,40,20,1]
        const result = jsarray.jsArray.MyFunction10([20,5,1,40])
        expect(expected).toEqual(result)
    })
})

describe('JavaScriptArrays - Problem #34 - Calculate the sum of an array of numbers',()=>{
    test('The result should be 50',()=>{
        const expected = 50
        const result = jsarray.jsArray.MyFunction11([10,5,15,10,10])
        expect(expected).toBe(result)
    })
    test('The result should be -3',()=>{
        const expected = -3
        const result = jsarray.jsArray.MyFunction11([-20,10,7])
        expect(expected).toBe(result)
    })
})

describe('JavaScriptArrays - Problem #35 - Return the average of an array of numbers',()=>{
    test('The result should be 50',()=>{
        const expected = 50
        const result = jsarray.jsArray.MyFunction12([10,100,40])
        expect(expected).toBe(result)
    })
    test('The result should be 370',()=>{
        const expected = 370
        const result = jsarray.jsArray.MyFunction12([10,100,1000])
        expect(expected).toBe(result)
    })
})

describe('JavaScriptArrays - Problem #36 - Return the longest string from an array of strings',()=>{
    test('The result should be javascript',()=>{
        const expected = 'javascript'
        const result = jsarray.jsArray.MyFunction13(['java','javascript','c++','mongoDB'])
        expect(expected).toBe(result)
    })
    test('The result should be february',()=>{
        const expected = 'february'
        const result = jsarray.jsArray.MyFunction13(['june','july','february','august'])
        expect(expected).toBe(result)
    })
})

describe('JavaScriptArrays - Problem #37 - Check if all array elements are equal',()=>{
    test('The result should be true',()=>{
        const expected = true
        const result = jsarray.jsArray.MyFunction14([2,2,2,2,2,2])
        expect(expected).toEqual(result)
    })
    test('The result should be false',()=>{
        const expected = false
        const result = jsarray.jsArray.MyFunction14([2,2,2,2,'2',2])
        expect(expected).toEqual(result)
    })
})