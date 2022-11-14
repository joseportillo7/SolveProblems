//Add Two Numbers - Difficulty: Medium

/**
 * You are given two non-empty linked lists representing two non-negative intgers. The digits
 * are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers
 * and return the sum as a linked list
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself
 */

class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

const functionNodeList = (l1,l2) =>{
    let nodel1 = new ListNode(l1)
    let nodel2 = new ListNode(l2)
    //let reducel1 = new ListNode()

    let concatl1 = ''
    let concatl2 = ''
    for(let i = nodel1.data.length-1; i >= 0; i--){
        concatl1 += nodel1.data[i]
    }

    for(let i = nodel2.data.length-1; i >= 0; i--){
        concatl2 += nodel2.data[i]
    }

    let suma = (parseInt(concatl1) + parseInt(concatl2)).toString().split('').reverse()

    let arr = []
    suma.forEach(element => {
        arr.push(parseInt(element))
    })

    let result = new ListNode(arr)

    return result.data
}

/*****************************************************************************/

// solution as an array.
const functionAddTwoNumbers = (l1,l2) => {
    let auxl1 = ''
    let auxl2 = ''

    for(let i = l1.length-1; i >= 0; i--){
        auxl1 += l1[i]
    }

    for(let i = l2.length-1; i >= 0; i--){
        auxl2 += l2[i]
    }

    let sum = (parseInt(auxl1) + parseInt(auxl2)).toString().split('').reverse()

    let newarray = []
    sum.forEach(item => {
        newarray.push(parseInt(item))
    })

    return newarray
}

console.log(functionNodeList([2,4,3],[5,6,4]));

module.exports = {
    functionAddTwoNumbers
}
