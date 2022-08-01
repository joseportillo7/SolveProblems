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

describe("JavaScriptBasics - Problem #5 - Remove firts n characters of string", ()=> {
    test("The result shoud be 456",()=>{
        const expected = '456'
        const result = jsbasic.jsBasics.MyFunction5('123456')
        expect(expected).toBe(result)
    })
    test("The result shoud be def",()=>{
        const expected = 'def'
        const result = jsbasic.jsBasics.MyFunction5('abcdef')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #6 - Get last n characters of string",()=>{
    test("The result should be 789", () =>{
        const expected = '789'
        const result = jsbasic.jsBasics.MyFunction6('123456789')
        expect(expected).toBe(result)
    })
    test("The result should be def", () =>{
        const expected = 'def'
        const result = jsbasic.jsBasics.MyFunction6('abcdef')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #7 - Get first n characters of string", () =>{
    test("The result shoud be abc", () => {
        const expected = 'abc'
        const result = jsbasic.jsBasics.MyFunction7('abcdefgh')
        expect(expected).toBe(result)
    })
    test("The result shoud be 123", () => {
        const expected = '123'
        const result = jsbasic.jsBasics.MyFunction7('12345678')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #8 - Extract first half of string", () =>{
    test("The result should be 1234", () =>{
        const expected = '1234'
        const result = jsbasic.jsBasics.MyFunction8('12345678')
        expect(expected).toBe(result)
    })
    test("The result should be fgh", () =>{
        const expected = 'fgh'
        const result = jsbasic.jsBasics.MyFunction8('fghrtz')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #9 - Remove last n character of string", ()=>{
    test("The result should be 12",()=>{
        const expected = '12'
        const result = jsbasic.jsBasics.MyFunction9('12345')
        expect(expected).toBe(result)
    })
    test("The result should be abc",()=>{
        const expected = 'abc'
        const result = jsbasic.jsBasics.MyFunction9('abcdef')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #10 - Return the percentage of a number", () =>{
    test("The result should be 50", () =>{
        const expected = 50
        const result = jsbasic.jsBasics.MyFunction10(100,50)
        expect(expected).toBe(result)
    })
    test("The result should be 0.1", () =>{
        const expected = 0.1
        const result = jsbasic.jsBasics.MyFunction10(10,1)
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #11 - Basic JavaScript math operators", () => {
    test("The result should be 10.5",()=>{
        const expected = 10.5
        const result = jsbasic.jsBasics.MyFunction11(6,5,4,3,2,1)
        expect(expected).toBe(result)
    })

    test("The result should be -8",()=>{
        const expected = -8
        const result = jsbasic.jsBasics.MyFunction11(2,3,6,4,2,3)
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #12 - Check whether a string contains another string and concatenate",() => {
    test("The result should be JosePortillo",()=>{
        const expected = 'JosePortillo'
        const result = jsbasic.jsBasics.MyFunction12('Jose','Portillo')
        expect(expected).toBe(result)
    })
    test("The result should be slips",()=>{
        const expected = 'slips'
        const result = jsbasic.jsBasics.MyFunction12('lips','s')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #13 - Check if a number is even",() =>{
    test("The result should be true",()=>{
        const expected = true
        const result = jsbasic.jsBasics.MyFunction13(10)
        expect(expected).toBe(result)
    })
    test("The result should be false",()=>{
        const expected = false
        const result = jsbasic.jsBasics.MyFunction13(101)
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #14 - How many times does a character occur",()=>{
    test("The result should be 3",()=>{
        const expected = 3
        const result = jsbasic.jsBasics.MyFunction14('H','Hello, Hi, How are you')
        expect(expected).toBe(result)
    })
    test("The result should be 0",()=>{
        const expected = 0
        const result = jsbasic.jsBasics.MyFunction14('z','Hello, Hi, How are you')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #15 - Check if a number is a whole number",()=>{
    test("The result should be true",()=>{
        const expected = true
        const result = jsbasic.jsBasics.MyFunction15(10)
        expect(expected).toBe(result)
    })
    test("The result should be false",()=>{
        const expected = false
        const result = jsbasic.jsBasics.MyFunction15(10.5)
        expect(expected).toBe(result)
    })    
})

describe("JavaScriptBasics - Problem #16 - Multiplication, division, and comparasion operators",()=>{
    test("The result should be 0.1",()=>{
        const expected = 0.1
        const result = jsbasic.jsBasics.MyFunction16(10,100)
        expect(expected).toBe(result)
    })
    test("The result should be 1",()=>{
        const expected = 1
        const result = jsbasic.jsBasics.MyFunction16(2,0.5)
        expect(expected).toBe(result)
    })    
})

describe("JavaScriptBasics - Problem #17 - Round a number to 2 decimal places",()=>{
    test("The result should be 3.14",()=>{
        const expected = 3.13
        const result = jsbasic.jsBasics.MyFunction17(3.1316)
        expect(expected).toBe(result)
    })
    test("The result should be 25.14",()=>{
        const expected = 25.14
        const result = jsbasic.jsBasics.MyFunction17(25.13678)
        expect(expected).toBe(result)
    })    
})

describe("JavaScriptBasics - Problem #18 - Split a number into its digits",()=>{
    test("The result should be [1,2,3]",()=>{
        const expected = [1, 2, 3]
        const result = jsbasic.jsBasics.MyFunction18(123)
        expect(expected).toEqual(result)
    })
    test("The result should be [1,2,4,5,6,7,8]",()=>{
        const expected = [1,2,4,5,6,7,8]
        const result = jsbasic.jsBasics.MyFunction18(1245678)
        expect(expected).toEqual(result)
    })    
})

describe("JavaScriptBasics - Problem #19 - Clear up the chaos behind these strings",()=>{
    test("The result should be Javascript",()=>{
        const expected = 'Javascript'
        const result = jsbasic.jsBasics.MyFunction19('java','tpi%rcs')
        expect(expected).toBe(result)
    })
    test("The result should be Joseportillo",()=>{
        const expected = 'Joseportillo'
        const result = jsbasic.jsBasics.MyFunction19('jos%e','oll%itrop')
        expect(expected).toBe(result)
    })
})

describe("JavaScriptBasics - Problem #20 - Return the next higher prime number",()=>{
    test('The result should be 41',()=>{
        const expected = 41
        const result = jsbasic.jsBasics.MyFunction20(38)
        expect(expected).toBe(result)
    })
    test('The result should be 2',()=>{
        const expected = 2
        const result = jsbasic.jsBasics.MyFunction20(-3)
        expect(expected).toBe(result)
    })
})