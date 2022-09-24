const problems = require('../Evaluations Problems/Evaluations')

describe('Problem #1 - Solving string sequence',()=>{
    test('The result shoud be, true',()=>{
        const expected = true
        const result = problems.evaluation.functionSequence('{}[]()')
        expect(expected).toBe(result)
    })

    test('The result shoud be, true',()=>{
        const expected = true
        const result = problems.evaluation.functionSequence('({[]})')
        expect(expected).toBe(result)
    })

    test('The result shoud be, false',()=>{
        const expected = false
        const result = problems.evaluation.functionSequence('])[]()')
        expect(expected).toBe(result)
    })

    test('The result shoud be, false',()=>{
        const expected = false
        const result = problems.evaluation.functionSequence('(((((((((((((((((()))))))))))))))))]')
        expect(expected).toBe(result)
    })
})

describe('Problem #2 - Calculate how many strings equal to a can be constructed using only letters from b',()=>{
    test('The result should be 2',()=>{
        const expected = 2
        const result = problems.evaluation.functionStrings('abc','abccba')
        expect(expected).toBe(result)
    })
    test('The result should be 1',()=>{
        const expected = 1
        const result = problems.evaluation.functionStrings('ab','acbzab')
        expect(expected).toBe(result)
    })
    test('The result should be 0',()=>{
        const expected = 0
        const result = problems.evaluation.functionStrings('zw','acbzab')
        expect(expected).toBe(result)
    })
})