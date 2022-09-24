const problems = require('../Evaluations Problems/Evaluations')

describe('Solution of sequence',()=>{
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