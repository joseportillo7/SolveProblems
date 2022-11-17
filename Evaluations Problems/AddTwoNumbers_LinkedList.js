//Add Two Numbers - Difficulty: Medium

/**
 * You are given two non-empty linked lists representing two non-negative intgers. The digits
 * are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers
 * and return the sum as a linked list
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself
 */

/**
 * Implementing a LinkedList from file ImplementingList.js
 */

 const createNode = (value) =>{
    return{
        value: value,
        next: null,
    }
}

class LinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    insert(value){
        this.length++
        let newNode = createNode(value)
        if(this.tail){
            this.tail.next = newNode
            this.tail = newNode
            return newNode
        }
        this.head = this.tail = newNode
        return newNode
    }

    insertfirst(value){
        let nuevo = createNode(value)
        if(this.tail){
            nuevo.next = this.head
            this.head = nuevo
            return nuevo
        }
        this.head = this.tail = nuevo
        return nuevo
    }

    print(){
        let current = this.head
        let concat = ''
        while(current){
            concat += '['+current.value+']->'
            current = current.next
        }
        console.log(concat+this.tail.next);
    }
}



const functionAddTwoNumbers = (l1,l2) =>{

    let sum = 0
    let current = createNode(0)
    let result = current

    while(l1.head || l2.head){
        if(l1.head){
            sum += l1.head.value
            l1.head = l1.head.next
        }

        if(l2.head){
            sum += l2.head.value
            l2.head = l2.head.next
        }

        current.next = createNode(sum % 10)
        current = current.next

        sum = sum > 9 ? 1 : 0
    }
    
    if(sum){
        current.next = createNode(sum)
    }

    return result.next
}

let list1 = new LinkedList()
list1.insert(2)
list1.insert(4)
list1.insert(3)

let list2 = new LinkedList()
list2.insert(5)
list2.insert(6)
list2.insert(4)


let list3 = new LinkedList()
list3.insert(0)
let list4 = new LinkedList()
list4.insert(0)

let list5 = new LinkedList()
list5.insert(9)
list5.insert(9)
list5.insert(9)
list5.insert(9)
list5.insert(9)
list5.insert(9)
list5.insert(9)

let list6 = new LinkedList()
list6.insert(9)
list6.insert(9)
list6.insert(9)
list6.insert(9)


console.log(functionAddTwoNumbers(list1,list2));
console.log(functionAddTwoNumbers(list3,list4));
console.log(functionAddTwoNumbers(list5,list6));

module.exports = {
    functionAddTwoNumbers, 
    list1, list2, list3, list4, list5, list6
}