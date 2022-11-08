const {codingFunction1, codingFunction2, codingFunctiontest} = require('../Evaluations Problems/CodingChallenge')

describe('Problem test #1 from Turing - Scores',()=>{
    test('The result should be 30 ',()=>{
        const expected = 30
        const result = codingFunctiontest('5,2,C,D,+')
        expect(expected).toBe(result)
    })
    test('The result should be 27',()=>{
        const expected = 27
        const result = codingFunctiontest('5,-2,4,C,D,9,+,+')
        expect(expected).toBe(result)
    })
    test('The result should be 1',()=>{
        const expected = 1
        const result = codingFunctiontest('1')
        expect(expected).toBe(result)
    })
})

describe('Problem #1 from Turing - Colors',()=>{
    test('The result should be green red gold black blue',()=>{
        const expected = 'green red gold black blue'
        const result = codingFunction1('red2 blue5 black4 green1 gold3')
        expect(expected).toEqual(result)
    })
    test('The result should be black white red green',()=>{
        const expected = 'black white red green'
        const result = codingFunction1('white2 green4 red3 black1')
        expect(expected).toEqual(result)
    })
})
