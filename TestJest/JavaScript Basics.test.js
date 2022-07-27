const jsbasic = require('../JavaScript Fundamentals/JavaScript Basics')

describe("JavaScript Basics - Problem #1 - Sum two numbers", () =>{
    test("The result should be 5", () =>{
        const expected = 5;
        const result = jsbasic.jsBasics.MyFunction1(2,3)
        expect(expected).toBe(result)
    })

    test("The result should be 100", () =>{
        const expected = 100;
        const result = jsbasic.jsBasics.MyFunction1(25,75)
        expect(expected).toBe(result)
    })
})

describe("JavaScript Basics - Problem #2 - Comparation operators, strict equality", () =>{
    test("The result should be false", () =>{
        const expected = false
        const result = jsbasic.jsBasics.MyFunction2(2,'2')
        expect(expected).toBe(result)
    })

    test("The result should be true", () =>{
        const expected = true
        const result = jsbasic.jsBasics.MyFunction2(3,3)
        expect(expected).toBe(result)
    })
})

describe("JavaScript Basics - Problem #3 - Get type of value", ()=>{
    test("The result should be boolean", () =>{
        const expected = 'boolean'
        const result = jsbasic.jsBasics.MyFunction3(false)
        expect(expected).toBe(result)
    })

    test("The result should be string", () =>{
        const expected = 'string'
        const result = jsbasic.jsBasics.MyFunction3('Cadena ejemplo')
        expect(expected).toBe(result)
    })
})

describe("JavaScript Basics - Problem #4 - Get nth character of string", ()=>{
    test("The result should be a",()=> {
        const expected = 'a'
        const result = jsbasic.jsBasics.MyFunction4('abcde',1)
        expect(expected).toBe(result)
    })
    test("The result should be o",()=> {
        const expected = 'o'
        const result = jsbasic.jsBasics.MyFunction4('Ejemplo',7)
        expect(expected).toBe(result)
    })
})

