const problems2 = require('../Evaluations Problems/Stack')

describe('Problem #1.1, Solving string sequence with a Stack',()=>{
    test('The result of the stack shoud be, false',()=>{
        const expected = false
        const result = problems2.stack.characterSequence('[](){}{}([{()}])}')
        expect(expected).toBe(result)
    })
    test('The result of the stack should be true',()=>{
        const expected = true
        const result = problems2.stack.characterSequence('[](){}{}([{()}])')
        expect(expected).toBe(result)
    })
    test('The result of the stack should be false',()=>{
        const expected = false
        const result = problems2.stack.characterSequence('({[{([({([({)(})])})])}]}){}')
        expect(expected).toBe(result)
    })
    test('The result of the stack should be true',()=>{
        const expected = true
        const result = problems2.stack.characterSequence('({[{([({([({})])})])}]})')
    })
})
