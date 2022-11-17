const {functionAddTwoNumbers, list1,list2,list3,list4,list5,list6} = require('../Evaluations Problems/AddTwoNumbers_LinkedList')

describe('LeetCode - Add Two Numbers',()=>{
    test('The result should be [7,0,8]',()=>{

        const expected = {"next": {"next": {"next": null, "value": 8}, "value": 0}, "value": 7}
        const result = functionAddTwoNumbers(list1,list2)
        expect(expected).toEqual(expect.objectContaining(result))
    })
    test('The result should be [0]',()=>{

        const expected = {"next": null, "value": 0}
        const result = functionAddTwoNumbers(list3,list4)
        expect(expected).toEqual(expect.objectContaining(result))
    })
    test('The result should be [8,9,9,9,0,0,0,1]',()=>{
        const expected = {}
        const result = functionAddTwoNumbers(list5,list6)
        expect(expected).toEqual(expect.objectContaining(result))
    })
})