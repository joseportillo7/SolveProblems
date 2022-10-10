const jsprime = require('../Evaluations Problems/PrimeNumbers')

describe('How many prime Numbers there are in the array?', ()=> {
    test('The result should be [7,3,11]',()=>{
        const expected = [7,3,11]
        const result = jsprime.GetPrime.isPrime([1,10,7,3,11,12])
        expect(expected).toEqual(result)
    })
    test('The result should be [13,23]',()=>{
        const expected = [13,23]
        const result = jsprime.GetPrime.isPrime([13,14,15,16,20,22,23])
        expect(expected).toEqual(result)
    })
    test('The result should be [2,3,5,7,11,13,17,19,23,29,89,97]',()=>{
        const expected = [2,3,5,7,11,13,17,19,23,29,89,97]
        const result = jsprime.GetPrime.isPrime([2,3,5,7,11,13,17,19,23,29,77,87,89,97])
        expect(expected).toEqual(result)
    })
})