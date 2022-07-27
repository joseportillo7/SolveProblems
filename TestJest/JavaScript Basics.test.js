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

